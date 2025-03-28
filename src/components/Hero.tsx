
import { Button } from "@/components/ui/button";
import { MessageSquare, Code } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">Plataforma de Feedback de Projetos</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Transforme seus projetos com <span className="text-primary">feedbacks</span> construtivos
          </h1>
          
          <p className="text-lg text-foreground/80 mb-8 animate-slide-up">
            Conecte-se com desenvolvedores, designers e profissionais de tecnologia
            para trocar experiências e melhorar suas habilidades através de avaliações
            de projetos reais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2">
              <Code size={18} />
              Submeter Projeto
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <MessageSquare size={18} />
              Dar Feedback
            </Button>
          </div>
          
          <div className="pt-8 flex items-center justify-center gap-10 text-foreground/60">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm">Projetos Avaliados</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">300+</p>
              <p className="text-sm">Desenvolvedores</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">1500+</p>
              <p className="text-sm">Feedbacks Dados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
