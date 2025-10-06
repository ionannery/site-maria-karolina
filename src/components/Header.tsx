import { Link, useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold bg-gradient-maternal bg-clip-text text-transparent">
            Maria Karolina Carvalho
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Início
          </Link>
          <Link 
            to="/salario-maternidade" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/salario-maternidade') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Salário Maternidade
          </Link>
        </nav>
        
        <Button 
          className="bg-primary hover:bg-primary/90 shadow-soft"
          onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp
        </Button>
      </div>
    </header>
  );
};

export default Header;
