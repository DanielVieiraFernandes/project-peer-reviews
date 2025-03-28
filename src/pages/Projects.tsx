
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectFeedbacks from "@/components/ProjectFeedbacks";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Dashboard UI",
    description: "Interface moderna para dashboard de loja virtual com estatísticas e gráficos",
    author: "Marina Silva",
    category: "UI/UX Design",
    feedbacks: 24,
    likes: 57,
    views: 312,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "API REST de Biblioteca",
    description: "Backend completo para gerenciamento de livros e empréstimos com autenticação",
    author: "Carlos Mendes",
    category: "Backend",
    feedbacks: 18,
    likes: 42,
    views: 189,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "App de Clima React Native",
    description: "Aplicativo móvel com previsão do tempo e notificações personalizadas",
    author: "Juliana Costa",
    category: "Mobile",
    feedbacks: 35,
    likes: 89,
    views: 405,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Sistema de Gestão de Tarefas",
    description: "Aplicação web para organização de projetos e acompanhamento de tarefas em equipe",
    author: "Rafael Oliveira",
    category: "Full Stack",
    feedbacks: 29,
    likes: 76,
    views: 284,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Redesign de Landing Page",
    description: "Modernização da página inicial de uma startup de tecnologia financeira",
    author: "Camila Santos",
    category: "UI/UX Design",
    feedbacks: 41,
    likes: 112,
    views: 562,
    image: "/placeholder.svg",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container px-4 py-10">
          <h1 className="text-3xl font-bold mb-8">Projetos & Feedbacks</h1>
          
          <div className="grid md:grid-cols-12 gap-6">
            {/* Scrollable projects list */}
            <div className="md:col-span-5 lg:col-span-4">
              <h2 className="text-xl font-semibold mb-4">Projetos Recentes</h2>
              <ScrollArea className="h-[calc(100vh-250px)] pr-4">
                <div className="space-y-4">
                  {projectsData.map((project) => (
                    <ProjectCard 
                      key={project.id}
                      project={project}
                      isSelected={selectedProject.id === project.id}
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
                </div>
              </ScrollArea>
            </div>
            
            {/* Selected project feedback */}
            <div className="md:col-span-7 lg:col-span-8">
              <h2 className="text-xl font-semibold mb-4">Feedbacks do Projeto</h2>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg h-[calc(100vh-250px)]">
                <Tabs defaultValue="feedbacks">
                  <div className="border-b border-border/50">
                    <TabsList className="bg-transparent h-12">
                      <TabsTrigger value="feedbacks" className="data-[state=active]:bg-background/60">
                        Feedbacks
                      </TabsTrigger>
                      <TabsTrigger value="details" className="data-[state=active]:bg-background/60">
                        Detalhes
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="feedbacks">
                    <ScrollArea className="h-[calc(100vh-320px)]">
                      <div className="p-4">
                        <ProjectFeedbacks projectId={selectedProject.id} />
                      </div>
                    </ScrollArea>
                  </TabsContent>
                  
                  <TabsContent value="details">
                    <ScrollArea className="h-[calc(100vh-320px)]">
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                        <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
                        
                        <div className="mb-4">
                          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {selectedProject.category}
                          </span>
                        </div>
                        
                        <p className="text-sm mb-6">
                          Desenvolvido por <span className="text-primary font-medium">{selectedProject.author}</span>
                        </p>
                        
                        <div className="aspect-video bg-secondary rounded-lg mb-6 overflow-hidden">
                          <img 
                            src={selectedProject.image} 
                            alt={selectedProject.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-secondary/50 p-4 rounded-lg text-center">
                            <p className="text-muted-foreground text-sm">Feedbacks</p>
                            <p className="text-2xl font-bold">{selectedProject.feedbacks}</p>
                          </div>
                          <div className="bg-secondary/50 p-4 rounded-lg text-center">
                            <p className="text-muted-foreground text-sm">Curtidas</p>
                            <p className="text-2xl font-bold">{selectedProject.likes}</p>
                          </div>
                          <div className="bg-secondary/50 p-4 rounded-lg text-center">
                            <p className="text-muted-foreground text-sm">Visualizações</p>
                            <p className="text-2xl font-bold">{selectedProject.views}</p>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
