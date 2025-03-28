
import { MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">FeedBacker</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Plataforma de feedback para projetos de desenvolvedores, designers e 
              profissionais de tecnologia. Conectando pessoas e impulsionando o crescimento.
            </p>
            <p className="text-sm text-foreground/50">&copy; {new Date().getFullYear()} FeedBacker. Todos os direitos reservados.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-foreground/70 hover:text-primary transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-foreground/70 hover:text-primary transition-colors">
                  Benefícios
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
