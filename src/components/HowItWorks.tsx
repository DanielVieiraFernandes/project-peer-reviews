
import { Code, MessageSquare, ThumbsUp, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Submeta seu projeto",
    description: "Envie seu código, design ou projeto completo para receber avaliação da comunidade",
    icon: Code,
  },
  {
    title: "Receba feedbacks",
    description: "Profissionais e estudantes avaliam seu trabalho com comentários construtivos",
    icon: MessageSquare,
  },
  {
    title: "Melhore seu trabalho",
    description: "Implemente as sugestões e veja seu projeto evoluir com cada iteração",
    icon: ThumbsUp,
  },
  {
    title: "Conecte-se",
    description: "Crie uma rede de contatos profissionais e encontre oportunidades",
    icon: Zap,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
          <p className="text-foreground/70">
            Um processo simples para transformar seus projetos com a ajuda da comunidade
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-foreground/70 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
