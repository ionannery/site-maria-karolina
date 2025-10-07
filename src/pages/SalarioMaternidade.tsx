import { MessageCircle, Heart, Shield, AlertCircle, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-maternidade.jpg";
import mariaKarolinaPhoto from "@/assets/maria-karolina.jpg";
import maeBebe from "@/assets/mae-bebe.jpg";
import gestante from "@/assets/gestante.jpg";

const SalarioMaternidade = () => {
  const handleCTAClick = () => {
    window.open('https://wa.me/558695600304?text=Olá, Dra. Maria Karolina! Acessei sua página sobre o salário-maternidade e quero saber se tenho direito ao benefício. Pode me ajudar?', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Mãe e bebê"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-beige opacity-60"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Mamãe, você pode receber mais de R$6.000,00 do INSS. Descubra agora como garantir o seu salário maternidade!
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 leading-relaxed">
              Já ajudei mais de 200 mamães em todo o Brasil a conquistarem esse benefício com segurança e tranquilidade. - Maria Karolina Carvalho, Advogada
            </p>
              <Button 
                  size="lg" 
                  className="bg-brown hover:bg-brown-dark shadow-medium text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-6 h-auto text-white w-full sm:w-auto"
                  onClick={handleCTAClick}
                >
                  <Heart className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base md:text-lg">Quero saber se tenho direito 💖</span>
              </Button>
          </div>
        </div>
      </section>

      {/* Sobre a Dra. Maria Karolina */}
      <section className="py-20 px-4 bg-gradient-soft">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-medium">
                <img 
                  src={mariaKarolinaPhoto}
                  alt="Dra. Maria Karolina Carvalho - Advogada Especialista em Direito Previdenciário"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brown rounded-2xl p-6 shadow-soft max-w-xs">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-white/90">Mamães ajudadas</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Dra. Maria Karolina Carvalho</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Advogada especialista em direito previdenciário com um diferencial especial: 
                  <strong className="text-foreground"> empatia e compreensão pela maternidade</strong>.
                </p>
                <p>
                  Com mais de <strong className="text-foreground">Com mais de 200 casos de sucesso</strong>, entendo profundamente 
                  as necessidades e desafios que as mamães enfrentam nesse momento tão importante.
                </p>
                <p>
                  Atendimento <strong className="text-foreground">100% online e humanizado</strong>, 
                  permitindo que você cuide do que é realmente importante enquanto eu cuido de garantir seus direitos.
                </p>
              </div>
              
              <blockquote className="border-l-4 border-brown pl-6 italic text-lg">
                "Eu sei o quanto esse momento é importante. Por isso, ajudo mamães como você a receberem 
                o que é delas por direito — com segurança, carinho e agilidade."
                <footer className="mt-2 text-sm font-medium text-foreground not-italic">
                  - Dra. Maria Karolina Carvalho
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Por que fazer com ajuda jurídica */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que fazer o processo com ajuda de um advogado especialista em salário maternidade?
            </h2>
            <p className="text-xl text-muted-foreground">
              Com a orientação certa, você transforma burocracia em tranquilidade para curtir o que realmente importa: o seu bebê.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center border-none shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
              <div className="bg-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-brown" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Evite erros que podem atrasar o benefício</h3>
              <p className="text-muted-foreground">
                Um erro na documentação ou no preenchimento pode atrasar seu benefício por meses. 
                Nós garantimos que tudo seja feito corretamente desde o início.
              </p>
            </Card>
            
            <Card className="p-8 text-center border-none shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
              <div className="bg-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-brown" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Receba orientação especializada do início ao fim</h3>
              <p className="text-muted-foreground">
                Do primeiro contato até a aprovação do seu benefício, você terá acompanhamento 
                constante e suporte em todas as etapas.
              </p>
            </Card>
            
            <Card className="p-8 text-center border-none shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="bg-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-brown" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Aumente as chances de aprovação</h3>
              <p className="text-muted-foreground">
                Com um processo correto e completo, suas chances de ter o benefício 
                aprovado aumentam significativamente.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3 Principais Erros */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-4">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Os principais erros de quem tenta solicitar o benefício sozinha
              </h2>
              <p className="text-xl text-muted-foreground">
                Esses erros simples fazem muitas mamães perderem um benefício que é um direito garantido. 
                Não deixe isso acontecer com você.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="p-8 border-l-4 border-brown">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-brown">❌</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Não saber qual documento o INSS realmente exige</h3>
                    <p className="text-muted-foreground">
                      Muitas mamães apresentam documentação incompleta ou incorreta, resultando em 
                      negativas que poderiam ser evitadas com a orientação adequada.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 border-l-4 border-brown">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-brown">❌</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Informar dados incorretos ou incompletos</h3>
                    <p className="text-muted-foreground">
                      Pequenos erros no preenchimento podem levar à negativa do pedido. 
                      É fundamental que todas as informações estejam precisas e completas.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 border-l-4 border-brown">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-brown">❌</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Desistir após o primeiro indeferimento</h3>
                    <p className="text-muted-foreground">
                      Uma negativa inicial não significa que você não tem direito. Muitos casos são 
                      revertidos com um recurso bem fundamentado.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que as mamães dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja como o meu trabalho tem transformado a vida de centenas de mamães em todo o Brasil.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-none shadow-soft">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brown text-brown" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Achei que não teria direito, mas a Dra. Maria me explicou tudo com calma. 
                Em poucas semanas, recebi meu benefício!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brown flex items-center justify-center text-white font-semibold">
                  JR
                </div>
                <div>
                  <p className="font-semibold">Juliana R.</p>
                  <p className="text-sm text-muted-foreground">Mamãe de primeira viagem</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 border-none shadow-soft">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brown text-brown" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Atendimento incrível! A Dra. Maria foi muito atenciosa e resolveu tudo 
                rapidamente. Super recomendo!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brown flex items-center justify-center text-white font-semibold">
                  CS
                </div>
                <div>
                  <p className="font-semibold">Camila S.</p>
                  <p className="text-sm text-muted-foreground">Mãe de gêmeos</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 border-none shadow-soft md:col-span-2 lg:col-span-1">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brown text-brown" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Estava perdida com toda a burocracia. A Dra. Maria cuidou de tudo 
                e consegui meu salário-maternidade sem estresse!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brown flex items-center justify-center text-white font-semibold">
                  PM
                </div>
                <div>
                  <p className="font-semibold">Patricia M.</p>
                  <p className="text-sm text-muted-foreground">Mamãe de duas crianças</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={maeBebe}
            alt="Mãe e bebê"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-beige"></div>
        </div>
        
        <div className="relative container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Enquanto você cuida do seu bebê, eu cuido o seu benefício.
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Não deixe que a burocracia tire sua paz nesse momento tão especial. 
              Dê o primeiro passo agora e descubra como é simples garantir o que é seu por direito.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                      size="lg" 
                      className="bg-brown hover:bg-brown-dark shadow-medium text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-6 h-auto text-white w-full"
                      onClick={handleCTAClick}
                  >
                      <Heart className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-sm sm:text-base md:text-lg">Descubra agora se você tem direito 💕</span>
                </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <CheckCircle className="h-8 w-8 mx-auto mb-3 text-brown" />
                <h3 className="font-semibold mb-2">Avaliação Gratuita</h3>
                <p className="text-sm text-muted-foreground">Análise completa do seu caso sem custo</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <Shield className="h-8 w-8 mx-auto mb-3 text-brown" />
                <h3 className="font-semibold mb-2">100% Seguro</h3>
                <p className="text-sm text-muted-foreground">Atendimento profissional e sigiloso</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <Star className="h-8 w-8 mx-auto mb-3 text-brown" />
                <h3 className="font-semibold mb-2">Sem Riscos</h3>
                <p className="text-sm text-muted-foreground">Pagamento apenas em caso de sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalarioMaternidade;
