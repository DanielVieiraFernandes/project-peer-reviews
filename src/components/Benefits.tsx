
import { CheckCircle, Star, Users, Rocket } from "lucide-react";

const benefits = [
  {
    title: "Feedback construtivo",
    description: "Receba comentários detalhados sobre pontos fortes e áreas de melhoria no seu projeto",
    icon: CheckCircle,
  },
  {
    title: "Crescimento profissional",
    description: "Evolua suas habilidades técnicas e de comunicação através da interação com outros desenvolvedores",
    icon: Rocket,
  },
  {
    title: "Visibilidade",
    description: "Destaque seu trabalho e seja reconhecido pela comunidade de tecnologia",
    icon: Star,
  },
  {
    title: "Networking",
    description: "Conecte-se com profissionais e estudantes da área, ampliando sua rede de contatos",
    icon: Users,
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-secondary">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Por que usar o FeedBacker?</h2>
          <p className="text-foreground/70">
            Benefícios para desenvolvedores, designers e profissionais de tecnologia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
