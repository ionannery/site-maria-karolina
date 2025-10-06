import { MessageCircle, Shield, Clock, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-soft py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Dra. Maria Karolina Carvalho
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold">
                Especialista em Direito Previdenciário
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "Meu papel é garantir que a burocracia do INSS não impeça você de receber os benefícios e a proteção financeira que a lei assegura"
                <footer className="mt-2 text-sm font-medium text-foreground">- Maria Karolina Carvalho, Advogada</footer>
              </blockquote>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 shadow-soft text-lg px-8"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale comigo agora
              </Button>
              
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Anos de experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Taxa de aprovação</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-medium">
                <img 
                  src="https://mariakarolina.adv.br/assets/foto-02-BGLJqir5.jpg"
                  alt="Dra. Maria Karolina Carvalho - Advogada Especialista"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-soft">
                <img 
                  src="https://mariakarolina.adv.br/assets/foto-01-BwdTvafP.jpg"
                  alt="Mãe segurando bebê com carinho - Salário Maternidade"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Sobre Maria Karolina Carvalho</h2>
              <p className="text-muted-foreground leading-relaxed">
                Advogada especialista em direito previdenciário e trabalhista com foco total no atendimento humanizado e na garantia dos direitos de cada cliente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sólida experiência na defesa dos direitos dos segurados e trabalhadores. Há mais de 2 anos atua diretamente na concessão e revisão de benefícios previdenciários, bem como na proteção do trabalhador. Comprometida em oferecer soluções jurídicas personalizadas, une conhecimento técnico, dedicação e estratégia para assegurar os melhores resultados aos seus clientes.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-secondary/20 rounded-xl">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground mt-1">Casos aprovados</div>
                </div>
                <div className="text-center p-4 bg-accent/20 rounded-xl">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground mt-1">Taxa de sucesso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meus diferenciais</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 space-y-3 border-none shadow-soft hover:shadow-medium transition-shadow">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">Experiência</h3>
              <p className="text-sm text-muted-foreground">2+ anos especializados em direito previdenciário</p>
            </Card>
            
            <Card className="p-6 space-y-3 border-none shadow-soft hover:shadow-medium transition-shadow">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">Dedicação</h3>
              <p className="text-sm text-muted-foreground">Atendimento personalizado e humanizado</p>
            </Card>
            
            <Card className="p-6 space-y-3 border-none shadow-soft hover:shadow-medium transition-shadow">
              <CheckCircle className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">Resultados</h3>
              <p className="text-sm text-muted-foreground">98% de taxa de aprovação dos pedidos</p>
            </Card>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>Advogada especializada em direito previdenciário</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>Atendimento exclusivo e personalizado para cada cliente</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>Acompanhamento completo do processo</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>Consultoria gratuita inicial</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>Pagamento apenas em caso de sucesso</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Por que escolher meus serviços?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ofereço o melhor atendimento para garantir que você receba seu salário-maternidade sem complicações.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-none shadow-soft hover:shadow-medium transition-shadow">
              <h3 className="font-semibold text-xl mb-3">Análise Detalhada</h3>
              <p className="text-muted-foreground">
                Verificamos se você cumpre o requisito de apenas uma contribuição e se está no prazo correto.
              </p>
            </Card>
            
            <Card className="p-8 border-none shadow-soft hover:shadow-medium transition-shadow">
              <h3 className="font-semibold text-xl mb-3">Cálculo Preciso</h3>
              <p className="text-muted-foreground">
                Garantimos o valor máximo que você tem direito, evitando perdas financeiras.
              </p>
            </Card>
            
            <Card className="p-8 border-none shadow-soft hover:shadow-medium transition-shadow">
              <h3 className="font-semibold text-xl mb-3">Protocolo Rápido e Seguro</h3>
              <p className="text-muted-foreground">
                Cuidamos de toda a burocracia, do pedido no INSS ao recurso judicial, se necessário.
              </p>
            </Card>
            
            <Card className="p-8 border-none shadow-soft hover:shadow-medium transition-shadow">
              <h3 className="font-semibold text-xl mb-3">Atendimento Humanizado</h3>
              <p className="text-muted-foreground">
                Entendemos a importância desse momento. Oferecemos clareza e acompanhamento total.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-maternal">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Está Pronta para Garantir Seu Benefício?
            </h2>
            <p className="text-lg text-white/90">
              Não deixe que a complexidade da lei previdenciária te impeça de ter tranquilidade no período pós-parto ou adoção. Fale com quem entende!
            </p>
            <p className="text-white/90">
              Preencha o formulário abaixo ou nos chame no WhatsApp para uma análise gratuita do seu caso com a Dra. Maria Karolina Carvalho.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <Clock className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Prazos são importantes</h3>
                <p className="text-sm text-white/80">Alguns benefícios têm prazo para solicitação</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <MessageCircle className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Atendimento imediato</h3>
                <p className="text-sm text-white/80">Nossa equipe responde em minutos</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <Award className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Consulta gratuita</h3>
                <p className="text-sm text-white/80">Primeira avaliação sem custo</p>
              </div>
            </div>
            
            <div className="pt-6">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-medium text-lg px-8"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp agora
              </Button>
              <div className="mt-4 space-y-1">
                <p className="text-white/80 text-sm">✓ Consulta gratuita</p>
                <p className="text-white/80 text-sm">✓ Sem risco</p>
                <p className="text-white/80 text-sm">✓ Pagamento apenas em caso de sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
