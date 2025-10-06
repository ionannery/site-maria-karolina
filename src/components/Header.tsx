import { Link, useLocation, useNavigate } from "react-router-dom";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    setMobileMenuOpen(false); // Fecha o menu mobile
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-20 items-center justify-between">
        <button onClick={() => handleNavigation('/')} className="flex items-center cursor-pointer">
          <img 
            src={logo} 
            alt="Maria Karolina Carvalho - Advocacia e Consultoria Jurídica" 
            className="h-12 w-auto"
          />
        </button>
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => handleNavigation('/')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Início
          </button>
          <button
            onClick={() => handleNavigation('/salario-maternidade')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/salario-maternidade') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Salário Maternidade
          </button>
        </nav>
        
        {/* Botão WhatsApp Desktop */}
        <Button 
          className="hidden md:flex bg-brown hover:bg-brown-dark shadow-soft"
          onClick={() => window.open('https://wa.me/558695600304?text=Olá, gostaria de conhecer mais sobre seus serviços jurídicos.', '_blank')}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp
        </Button>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-card">
          <nav className="container py-4 flex flex-col space-y-4">
            <button
              onClick={() => handleNavigation('/')}
              className={`text-left text-base font-medium transition-colors hover:text-primary py-2 ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => handleNavigation('/salario-maternidade')}
              className={`text-left text-base font-medium transition-colors hover:text-primary py-2 ${
                isActive('/salario-maternidade') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Salário Maternidade
            </button>
            <Button 
              className="bg-brown hover:bg-brown-dark shadow-soft w-full"
              onClick={() => {
                window.open('https://wa.me/558695600304?text=Olá, gostaria de conhecer mais sobre seus serviços jurídicos.', '_blank');
                setMobileMenuOpen(false);
              }}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
