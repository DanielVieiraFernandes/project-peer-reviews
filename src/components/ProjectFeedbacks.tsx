import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, MessageCircle } from "lucide-react";
import { useState } from "react";

// Sample feedback data - in a real app, this would come from an API
const feedbacksData = {
  1: [
    {
      id: 1,
      author: "Patrícia Ramos",
      avatar: "/placeholder.svg",
      initials: "PR",
      content: "O layout está muito bem estruturado. As cores combinam perfeitamente e a organização dos elementos facilita a navegação. Sugiro apenas revisar o espaçamento entre os cards na versão mobile.",
      likes: 8,
      date: "2 dias atrás"
    },
    {
      id: 2,
      author: "Lucas Ferreira",
      avatar: "/placeholder.svg",
      initials: "LF",
      content: "Achei o dashboard muito intuitivo! As métricas estão bem apresentadas e os gráficos são claros. Uma sugestão seria adicionar a opção de exportar os relatórios em diferentes formatos.",
      likes: 5,
      date: "3 dias atrás"
    },
    {
      id: 3,
      author: "Amanda Costa",
      avatar: "/placeholder.svg",
      initials: "AC",
      content: "A paleta de cores é agradável e a hierarquia visual está bem definida. Talvez fosse interessante adicionar mais opções de filtragem para facilitar a análise dos dados.",
      likes: 12,
      date: "5 dias atrás"
    }
  ],
  2: [
    {
      id: 1,
      author: "Guilherme Santos",
      avatar: "/placeholder.svg",
      initials: "GS",
      content: "A documentação da API está muito clara! Os endpoints estão bem descritos e os exemplos ajudam bastante. Só tive um problema com a autenticação, talvez pudesse explicar melhor esse processo.",
      likes: 7,
      date: "1 dia atrás"
    },
    {
      id: 2,
      author: "Fernanda Lima",
      avatar: "/placeholder.svg",
      initials: "FL",
      content: "A estrutura do código está muito organizada. Gostei da separação em camadas e do padrão de repositório utilizado. Apenas sugiro adicionar mais testes para aumentar a cobertura.",
      likes: 9,
      date: "4 dias atrás"
    }
  ],
  3: [
    {
      id: 1,
      author: "Roberto Alves",
      avatar: "/placeholder.svg",
      initials: "RA",
      content: "A interface do app está muito bonita e a experiência do usuário é fluida. As notificações funcionam bem, mas talvez pudesse adicionar uma opção para personalizá-las conforme a preferência do usuário.",
      likes: 15,
      date: "2 dias atrás"
    },
    {
      id: 2,
      author: "Carla Mendes",
      avatar: "/placeholder.svg",
      initials: "CM",
      content: "O app está funcionando muito bem tanto no iOS quanto no Android. A performance é boa mesmo com muitos dados carregados. Uma sugestão seria implementar o modo offline para consulta das últimas previsões.",
      likes: 11,
      date: "5 dias atrás"
    },
    {
      id: 3,
      author: "Pedro Oliveira",
      avatar: "/placeholder.svg",
      initials: "PO",
      content: "Achei a navegação entre as telas muito intuitiva. O design está consistente e moderno. Só encontrei um pequeno bug quando mudo a orientação do celular - às vezes a interface fica desalinhada.",
      likes: 6,
      date: "1 semana atrás"
    }
  ],
  4: [
    {
      id: 1,
      author: "Marcela Souza",
      avatar: "/placeholder.svg",
      initials: "MS",
      content: "O sistema está muito bem desenvolvido. A funcionalidade de arrastar e soltar tarefas entre colunas é excelente. Sugiro apenas adicionar mais opções de filtros para visualizar as tarefas.",
      likes: 13,
      date: "3 dias atrás"
    }
  ],
  5: [
    {
      id: 1,
      author: "Daniel Costa",
      avatar: "/placeholder.svg",
      initials: "DC",
      content: "O redesign ficou muito mais moderno e atraente. A página carrega rapidamente e os elementos estão bem distribuídos. Talvez pudesse melhorar a responsividade em telas muito pequenas.",
      likes: 18,
      date: "1 dia atrás"
    },
    {
      id: 2,
      author: "Bianca Martins",
      avatar: "/placeholder.svg",
      initials: "BM",
      content: "Adorei as animações sutis nos botões e nos cards. Elas adicionam um toque especial sem comprometer a performance. O formulário de contato está bem posicionado e fácil de encontrar.",
      likes: 14,
      date: "3 dias atrás"
    }
  ]
};

interface ProjectFeedbacksProps {
  projectId: number;
}

const ProjectFeedbacks = ({ projectId }: ProjectFeedbacksProps) => {
  const [newFeedback, setNewFeedback] = useState("");
  const feedbacks = feedbacksData[projectId as keyof typeof feedbacksData] || [];
  
  const handleSubmitFeedback = () => {
    if (newFeedback.trim()) {
      // In a real app, this would call an API to save the feedback
      alert("Feedback enviado com sucesso!");
      setNewFeedback("");
    }
  };
  
  return (
    <div className="space-y-6">
      {/* New feedback form */}
      <div className="bg-secondary/30 rounded-lg p-4">
        <h3 className="text-sm font-medium mb-3">Deixe seu feedback</h3>
        <Textarea 
          placeholder="Compartilhe sua análise e sugestões sobre este projeto..." 
          className="mb-3 bg-background/50"
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)}
        />
        <div className="flex justify-end">
          <Button onClick={handleSubmitFeedback} disabled={!newFeedback.trim()}>
            Enviar feedback
          </Button>
        </div>
      </div>
      
      {/* Existing feedbacks */}
      {feedbacks.length > 0 ? (
        <div className="space-y-4">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-secondary/30 rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <Avatar>
                  <AvatarImage src={feedback.avatar} alt={feedback.author} />
                  <AvatarFallback>{feedback.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{feedback.author}</h4>
                  <p className="text-xs text-foreground/60">{feedback.date}</p>
                </div>
              </div>
              
              <p className="text-sm mb-4">{feedback.content}</p>
              
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" className="text-xs gap-1 h-8">
                  <ThumbsUp className="w-3 h-3" />
                  <span>{feedback.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-xs gap-1 h-8">
                  <MessageCircle className="w-3 h-3" />
                  <span>Responder</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-muted-foreground">
          <MessageCircle className="w-10 h-10 mx-auto mb-3 opacity-50" />
          <p>Nenhum feedback ainda. Seja o primeiro a comentar!</p>
        </div>
      )}
    </div>
  );
};

export default ProjectFeedbacks;
