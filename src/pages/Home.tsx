import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import ClientCarousel from '@/components/ClientCarousel';
import Testimonials from '@/components/Testimonials';
import { Link } from 'react-router-dom';
import { Rocket, Target, Users, Calendar, MessageCircle, Clock } from 'lucide-react';
import heroBusiness from '@/assets/hero-business.jpg';
const Home = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroBusiness} alt="Consultoria Empresarial" className="w-full h-full object-cover" />
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
                <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:text-5xl">
                  Desenvolver Pessoas{' '}
                  <span className="bg-gradient-comet bg-clip-text text-transparent">
                    Transformar Empresas
                  </span>
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed md:text-base">Consultoria estratégica, mentoria de liderança e treinamento de times de alta performance com Desenvolvimento Humano e Organizacional (DHO) para acelerar o crescimento da sua empresa.</p>

                <p className="text-base text-primary font-semibold">🎯 O parceiro estratégico que sua empresa de pequeno e médio porte precisa para alavancar resultados.</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-base" asChild>
                  <a href="https://wa.me/5524999382195?text=Quero%20agendar%20uma%20reunião%20e%20ter%20um%20diagnóstico" target="_blank" rel="noopener noreferrer">
                    Agende uma Reunião Agora
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="text-base border-primary/20 hover:border-primary" asChild>
                  <a href="https://wa.me/5524999382195?text=Olá,%20gostaria%20de%20falar%20com%20vocês" target="_blank" rel="noopener noreferrer">
                    Fale no WhatsApp
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
            {[{
            icon: <Rocket className="h-12 w-12" />,
            title: 'Consultoria Empresarial',
            desc: 'Diagnóstico completo e personalizado de todas as áreas da empresa, seguido de um plano estratégico que desenvolve pessoas para implementarem processos assertivos e expandir seu negócio com segurança.',
            link: '/servicos'
          }, {
            icon: <Target className="h-12 w-12" />,
            title: 'Mentoria Estratégica',
            desc: 'Acompanhamento estratégico e personalizado para empresários e líderes que buscam clareza, foco e resultados consistentes, utilizando ferramentas e técnicas aplicadas pelos maiores líderes e empresas de alta performance do mercado.',
            link: '/servicos'
          }, {
            icon: <Users className="h-12 w-12" />,
            title: 'Treinamento Corporativo',
            desc: 'Desenvolvimento de times de alta performance por meio de treinamentos corporativos práticos e personalizados, focados em liderança, gestão, vendas, performance e perfil comportamental, unindo técnica e comportamento para gerar resultados reais.',
            link: '/servicos'
          }].map((service, index) => <div key={index} className="bg-card rounded-xl p-8 border border-border shadow-card hover:shadow-comet transition-all duration-300 hover:-translate-y-2 group">
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
              </div>)}
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
                <a href="https://wa.me/5524999382195?text=Quero%20garantir%20minha%20vaga%20para%20consultoria" target="_blank" rel="noopener noreferrer">
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

      {/* CTA Destacado WhatsApp */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-hero rounded-2xl p-10 border-2 border-primary/40 shadow-glow text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Pronto para <span className="bg-gradient-comet bg-clip-text text-transparent">Decolar?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Agende uma reunião gratuita e descubra como a Metodologia COMET pode transformar sua empresa
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button variant="hero" size="lg" asChild>
                    <a href="https://wa.me/5524999382195?text=Quero%20agendar%20uma%20reunião%20e%20ter%20um%20diagnóstico" target="_blank" rel="noopener noreferrer">
                      Agende uma Reunião
                    </a>
                  </Button>
                  
                  <Button variant="hero" size="lg" className="animate-pulse hover:animate-none" asChild>
                    <a href="https://wa.me/5524999382195?text=Olá,%20gostaria%20de%20falar%20com%20vocês" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Fale no WhatsApp
                    </a>
                  </Button>
                </div>
                
                <div className="flex justify-center">
                  <div className="animate-bounce">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
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
                Entre em <span className="bg-gradient-comet bg-clip-text text-transparent">Contato</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário e nosso time entrará em contato
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>;
};
export default Home;
