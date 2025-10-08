import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Link } from 'react-router-dom';
import { Rocket, Target, Users, TrendingUp, Calendar, MessageCircle, Clock } from 'lucide-react';
import consultoriaHero from '@/assets/consultoria-hero.png';
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
                <p className="text-lg text-primary font-semibold mt-4">
                  Especialistas em empresas de pequeno e médio porte em fase de crescimento
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
                  <a 
                    href="https://wa.me/5524999382195?text=Quero%20agendar%20uma%20reunião%20e%20ter%20um%20diagnóstico"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="mr-3 h-6 w-6" />
                    Agende uma Reunião Agora
                  </a>
                </Button>
                
                <Button variant="outline" size="xl" className="text-lg px-12 py-8 border-2" asChild>
                  <a 
                    href="https://wa.me/5524999382195?text=Olá!%20Quero%20transformar%20minha%20empresa%20com%20o%20Instituto%20COMET."
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
              Soluções completas baseadas na Metodologia COMET, especializada em Desenvolvimento Humano e Organizacional (DHO), para transformação da sua empresa
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
                desc: 'Desenvolvimento de times de alta performance através de capacitações práticas em liderança, gestão e processos.',
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

      {/* Seção Agenda + Clientes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Vagas Limitadas */}
            <div className="bg-gradient-hero rounded-xl p-10 border-2 border-primary shadow-glow mb-12 text-center">
              <div className="inline-block bg-primary/10 rounded-full px-6 py-2 mb-6">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Clock className="h-5 w-5" />
                  <span>VAGAS LIMITADAS</span>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Apenas <span className="bg-gradient-comet bg-clip-text text-transparent">3 vagas disponíveis</span> para Outubro de 2025
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nosso modelo de consultoria é baseado em atendimento personalizado e resultados garantidos. Por isso, limitamos o número de clientes ativos.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a 
                  href="https://wa.me/5524999382195?text=Quero%20garantir%20minha%20vaga%20para%20consultoria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-3 h-6 w-6" />
                  Garanta sua Vaga Agora
                </a>
              </Button>
            </div>

            {/* Empresas que Confiaram */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Empresas que <span className="bg-gradient-comet bg-clip-text text-transparent">Confiaram no COMET</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((num) => (
                  <div 
                    key={num}
                    className="bg-card rounded-lg border border-border p-8 flex items-center justify-center min-h-[100px] hover:shadow-card transition-shadow"
                  >
                    <span className="text-muted-foreground font-semibold">Cliente {num}</span>
                  </div>
                ))}
              </div>
            </div>
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
