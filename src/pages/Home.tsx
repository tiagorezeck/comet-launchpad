import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import ClientCarousel from '@/components/ClientCarousel';
import Testimonials from '@/components/Testimonials';
import { Link } from 'react-router-dom';
import { Rocket, Target, Users, Calendar, MessageCircle, Clock } from 'lucide-react';
import heroBusiness from '@/assets/hero-business.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBusiness} 
            alt="Consultoria Empresarial" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  ✨ Transformação Empresarial Comprovada
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Transforme Sua Empresa em uma{' '}
                  <span className="bg-gradient-comet bg-clip-text text-transparent">
                    Máquina de Resultados
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Consultoria estratégica em Desenvolvimento Humano e Organizacional 
                  para empresas que querem crescer de forma sustentável
                </p>

                <p className="text-base text-primary font-semibold">
                  🎯 Especialistas em empresas de pequeno e médio porte em fase de crescimento
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="text-base"
                  asChild
                >
                  <a 
                    href="https://wa.me/5524999382195?text=Quero%20agendar%20uma%20reunião%20e%20ter%20um%20diagnóstico"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agende uma Reunião Agora
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-base border-primary/20 hover:border-primary"
                  asChild
                >
                  <a 
                    href="https://wa.me/5524999382195?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fale Conosco
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Side - Image space (already covered by background) */}
            <div className="hidden lg:block"></div>
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

          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Empresas Que Transformamos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça algumas das empresas que alcançaram resultados extraordinários 
              com a metodologia COMET
            </p>
          </div>

          <ClientCarousel />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

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
