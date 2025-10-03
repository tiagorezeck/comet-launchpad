import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Link } from 'react-router-dom';
import { Rocket, Target, Users, TrendingUp, Calendar, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-consultant.jpg';
import spaceBackground from '@/assets/space-background.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 14, 18, 0.85), rgba(10, 14, 18, 0.85)), url(${spaceBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-comet bg-clip-text text-transparent">
                    Desenvolver Pessoas.
                  </span>
                  <br />
                  <span className="text-foreground">
                    Transformar Negócios.
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                  O Instituto COMET acelera a transformação de empresas através de consultoria, mentoria e treinamentos especializados.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-foreground">
                  Com mais de <span className="text-primary font-semibold">10 anos de experiência</span> e a exclusiva <span className="text-primary font-semibold">Metodologia COMET</span>, já impactamos mais de <span className="text-primary font-semibold">20 empresas</span>, transformando-as em organizações sólidas, previsíveis e de alta performance.
                </p>
                
                <p className="text-base text-muted-foreground">
                  Fundado por <span className="font-semibold text-foreground">Tiago Rezeck</span>, consultor especializado no desenvolvimento de líderes e implantação de processos de gestão que geram resultados reais e sustentáveis.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contato">
                    <Calendar className="mr-2 h-5 w-5" />
                    Agende uma Reunião
                  </Link>
                </Button>
                
                <Button variant="outline" size="xl" asChild>
                  <a 
                    href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Instituto%20COMET."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Fale no WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:block hidden">
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={heroImage} 
                  alt="Consultor COMET em ação" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos Valores <span className="bg-gradient-comet bg-clip-text text-transparent">COMET</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada letra representa um pilar fundamental da nossa metodologia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { letter: 'C', value: 'Colaboração', desc: 'Trabalhamos juntos para alcançar objetivos comuns' },
              { letter: 'O', value: 'Organização', desc: 'Estruturamos processos para máxima eficiência' },
              { letter: 'M', value: 'Melhoria Contínua', desc: 'Evoluímos constantemente em busca da excelência' },
              { letter: 'E', value: 'Excelência', desc: 'Buscamos o mais alto padrão em tudo que fazemos' },
              { letter: 'T', value: 'Transformação', desc: 'Promovemos mudanças significativas e duradouras' },
              { letter: 'A', value: 'Autonomia', desc: 'Desenvolvemos a capacidade de autogestão' },
              { letter: 'S', value: 'Sinergia', desc: 'Criamos força através da união de talentos' },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 border border-border shadow-card hover:shadow-comet transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl font-bold bg-gradient-comet bg-clip-text text-transparent mb-3">
                  {item.letter}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.value}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Destaque */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Como Podemos <span className="bg-gradient-comet bg-clip-text text-transparent">Ajudar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções completas baseadas na Metodologia COMET para transformar sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Rocket className="h-12 w-12" />,
                title: 'Consultoria Empresarial',
                desc: 'Diagnóstico completo, planejamento estratégico e implementação de processos para organizar e expandir seu negócio com segurança.',
                link: '/servicos'
              },
              {
                icon: <Target className="h-12 w-12" />,
                title: 'Mentoria Estratégica',
                desc: 'Acompanhamento personalizado para empresários e líderes que buscam clareza, foco e resultados consistentes em suas decisões.',
                link: '/servicos'
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: 'Treinamentos Corporativos',
                desc: 'Desenvolvimento de equipes de alta performance através de capacitações práticas em liderança, gestão e processos.',
                link: '/servicos'
              },
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 border border-border shadow-card hover:shadow-comet transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.desc}
                </p>
                <Button variant="comet" asChild>
                  <Link to={service.link}>Saiba Mais</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nosso Propósito
            </h2>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              Ser um <span className="bg-gradient-comet bg-clip-text text-transparent font-semibold">cometa</span> que acelera a transformação das empresas, impulsionando pessoas, líderes e organizações rumo a novos patamares de desempenho e crescimento sustentável.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Pronto para <span className="bg-gradient-comet bg-clip-text text-transparent">Transformar</span> sua Empresa?
              </h2>
              <p className="text-lg text-muted-foreground">
                Entre em contato e descubra como a Metodologia COMET pode acelerar seus resultados
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
