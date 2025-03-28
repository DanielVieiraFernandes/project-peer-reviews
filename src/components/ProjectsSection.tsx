
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MessageSquare, ThumbsUp, Eye } from "lucide-react";

const projects = [
  {
    title: "E-commerce Dashboard UI",
    description: "Interface moderna para dashboard de loja virtual com estatísticas e gráficos",
    author: "Marina Silva",
    category: "UI/UX Design",
    feedbacks: 24,
    likes: 57,
    views: 312,
  },
  {
    title: "API REST de Biblioteca",
    description: "Backend completo para gerenciamento de livros e empréstimos com autenticação",
    author: "Carlos Mendes",
    category: "Backend",
    feedbacks: 18,
    likes: 42,
    views: 189,
  },
  {
    title: "App de Clima React Native",
    description: "Aplicativo móvel com previsão do tempo e notificações personalizadas",
    author: "Juliana Costa",
    category: "Mobile",
    feedbacks: 35,
    likes: 89,
    views: 405,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Projetos Recentes</h2>
            <p className="text-foreground/70 max-w-2xl">
              Confira alguns dos projetos que estão recebendo feedback da nossa comunidade
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Ver Todos
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all h-full flex flex-col">
              <CardContent className="p-6 flex-grow">
                <Badge className="mb-4">{project.category}</Badge>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                <p className="text-sm text-foreground/50">por <span className="text-primary">{project.author}</span></p>
              </CardContent>
              <CardFooter className="p-6 pt-0 border-t border-border/50 flex justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-foreground/70 text-sm">
                    <MessageSquare className="w-4 h-4" />
                    <span>{project.feedbacks}</span>
                  </div>
                  <div className="flex items-center gap-1 text-foreground/70 text-sm">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{project.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-foreground/70 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{project.views}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Ver Detalhes</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Button variant="outline">Ver Todos</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
