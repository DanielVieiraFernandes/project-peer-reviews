
import { Button } from "@/components/ui/button";
import { MessageSquare, Code, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">FeedBacker</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
            Como Funciona
          </a>
          <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">
            Projetos
          </a>
          <a href="#benefits" className="text-foreground/80 hover:text-primary transition-colors">
            Benefícios
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:flex">
            Entrar
          </Button>
          <Button>
            Cadastrar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
