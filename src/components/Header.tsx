
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border/40">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-xl font-bold text-primary">
          FeedBacker
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm transition-colors hover:text-primary ${
              location.pathname === '/' ? 'text-primary font-medium' : 'text-foreground/70'
            }`}
          >
            Início
          </Link>
          <Link 
            to="/projects" 
            className={`text-sm transition-colors hover:text-primary ${
              location.pathname === '/projects' ? 'text-primary font-medium' : 'text-foreground/70'
            }`}
          >
            Projetos
          </Link>
          <a href="#benefits" className="text-sm text-foreground/70 transition-colors hover:text-primary">
            Benefícios
          </a>
          <a href="#contact" className="text-sm text-foreground/70 transition-colors hover:text-primary">
            Contato
          </a>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Entrar
          </Button>
          <Button>Cadastrar</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
