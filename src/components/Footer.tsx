import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 bg-gradient-maternal bg-clip-text text-transparent">
              Dra. Maria Karolina Carvalho
            </h3>
            <p className="text-sm text-muted-foreground">
              Advogada especialista em direito previdenciário com foco em atendimento humanizado.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp: (11) 99999-9999
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Horário de Atendimento</h3>
            <p className="text-sm text-muted-foreground">
              Segunda a Sexta: 9h às 18h<br />
              Atendimento 100% online
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 Maria Karolina Carvalho. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
