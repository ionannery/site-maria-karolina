import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-white mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Maria Karolina Carvalho" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Especialista em Direito Previdenciário e Trabalhista, com sólida experiência na defesa dos direitos dos segurados e trabalhadores. Há mais de 2 anos atua diretamente na concessão e revisão de benefícios previdenciários, bem como na proteção do trabalhador.
            </p>
            <div className="flex gap-3 mt-4">
              <a 
                href="https://wa.me/558695600304?text=Olá, gostaria de conhecer mais sobre seus serviços jurídicos."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="mailto:advmariakarolina@gmail.com"
                className="w-10 h-10 rounded-full bg-brown flex items-center justify-center hover:bg-brown-dark transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-brown">Contato</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brown" />
                (86) 9 9560-0304
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brown" />
                advmariakarolina@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brown mt-1 flex-shrink-0" />
                <span>Rua Leonardo Castelo Branco, 1673, Morada do Sol, Teresina (PI)</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-brown">Atendimento</h3>
            <p className="text-sm text-gray-300 mb-2">
              Segunda a Sexta: 8h às 18h<br />
              Presencial e On-line
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-brown">Especializações</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Salário-maternidade</li>
              <li>• Auxílio-doença</li>
              <li>• Aposentadoria</li>
              <li>• Pensão por morte</li>
              <li>• Recursos INSS</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Maria Karolina Carvalho. Todos os direitos reservados.<br />OAB/PI 24.098 - Dra. Maria Karolina Carvalho</p>
            <p className="text-xs text-gray-500">
              Aviso Legal: Este site tem caráter meramente informativo. As informações aqui contidas não constituem consulta jurídica. Para orientação específica sobre seu caso, agende uma consulta conosco.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
