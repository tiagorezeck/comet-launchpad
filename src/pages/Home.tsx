import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Link } from 'react-router-dom';
import { Rocket, Target, Users, TrendingUp, Calendar, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-consultant.jpg';
import spaceBackground from '@/assets/space-background.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Impacto Emocional */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 14, 18, 0.7), rgba(10, 14, 18, 0.7)), url(${spaceBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay com gradiente animado */}
        <div className="absolute inset-0 bg-gradient-hero opacity-60 animate-pulse"></div>
        
        {/* Partículas de estrelas */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Hero Content - Centrado e Impactante */}
            <div className="text-center space-y-12 animate-fade-in">
              {/* Headline Principal */}
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                  <span className="block text-foreground mb-2">
                    Sua Empresa
                  </span>
                  <span className="block bg-gradient-comet bg-clip-text text-transparent">
                    Imparável
                  </span>
                </h1>
                
                <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-light">
                  Transforme caos em resultados. Desenvolva líderes que inspiram. Crie uma empresa de alta performance.
                </p>
              </div>

              {/* Prova Social Rápida */}
              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto py-8">
                {[
                  { number: '+10', label: 'Anos de Experiência' },
                  { number: '+20', label: 'Empresas Transformadas' },
                  { number: '100%', label: 'Metodologia Exclusiva' },
                ].map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-comet bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons - Impossíveis de Ignorar */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button variant="hero" size="xl" className="text-lg px-12 py-8 shadow-glow hover:shadow-comet transition-all" asChild>
                  <Link to="/contato">
                    <Calendar className="mr-3 h-6 w-6" />
                    Agende uma Reunião Agora
                  </Link>
                </Button>
                
                <Button variant="outline" size="xl" className="text-lg px-12 py-8 border-2" asChild>
                  <a 
                    href="https://wa.me/5511999999999?text=Olá!%20Quero%20transformar%20minha%20empresa%20com%20o%20Instituto%20COMET."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Fale no WhatsApp
                  </a>
                </Button>
              </div>

              {/* Urgência */}
              <p className="text-sm text-primary/80 font-medium">
                ✨ Vagas limitadas para consultoria • Agende sua avaliação gratuita
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
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
