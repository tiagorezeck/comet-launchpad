import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, Instagram, Youtube, Linkedin } from 'lucide-react';

const Contato = () => {
  const whatsappNumber = '5524999382195';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de falar com o Instituto COMET sobre consultoria/mentoria.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Telefone',
      content: '(24) 99938-2195',
      action: 'Ligar agora',
      link: 'tel:+5524999382195',
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'E-mail',
      content: 'contato@institutocomet.com.br',
      action: 'Enviar e-mail',
      link: 'mailto:contato@institutocomet.com.br',
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'WhatsApp',
      content: 'Atendimento rápido',
      action: 'Conversar no WhatsApp',
      link: whatsappUrl,
    },
  ];

  const socialMedia = [
    {
      icon: <Instagram className="h-6 w-6" />,
      name: 'Instagram',
      handle: '@tiagorezeckcomet',
      link: 'https://www.instagram.com/tiagorezeckcomet/',
    },
    {
      icon: <Youtube className="h-6 w-6" />,
      name: 'YouTube',
      handle: 'Instituto COMET',
      link: 'https://www.youtube.com/@institutocomet',
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: 'LinkedIn',
      handle: 'Tiago Rezeck',
      link: 'https://www.linkedin.com/in/tiagorezeck/',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Entre em <span className="bg-gradient-comet bg-clip-text text-transparent">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Estamos prontos para ajudar sua empresa a alcançar novos patamares de desempenho
            </p>
          </div>
        </div>
      </section>

      {/* Métodos de Contato */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Escolha a Melhor Forma de <span className="bg-gradient-comet bg-clip-text text-transparent">Contato</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl border border-border shadow-card hover:shadow-comet transition-all duration-300 hover:-translate-y-2 p-8 text-center"
                >
                  <div className="text-primary mb-4 flex justify-center">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {method.content}
                  </p>
                  <Button variant="comet" size="sm" className="w-full" asChild>
                    <a href={method.link} target={method.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {method.action}
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            {/* WhatsApp Direto */}
            <div className="bg-gradient-hero rounded-xl p-8 border border-primary shadow-comet text-center">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Agende uma Reunião
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Prefere falar direto conosco? Entre em contato pelo WhatsApp e agende sua reunião de diagnóstico gratuito.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/5524999382195?text=Quero%20agendar%20uma%20reunião%20e%20ter%20um%20diagnóstico" target="_blank" rel="noopener noreferrer">
                  Agendar via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Envie uma <span className="bg-gradient-comet bg-clip-text text-transparent">Mensagem</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário e nosso time retornará em até 24 horas
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Localização e Horário */}
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-8 border border-border shadow-card">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Localização
                      </h3>
                      <p className="text-muted-foreground">
                        São Paulo, SP - Brasil<br />
                        Atendimento presencial e remoto
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border shadow-card">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Horário de Atendimento
                      </h3>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábado: 9h às 13h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="bg-card rounded-xl p-8 border border-border shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Siga-nos nas Redes Sociais
                </h3>
                <p className="text-muted-foreground mb-6">
                  Acompanhe nosso conteúdo e fique por dentro de dicas, novidades e insights sobre gestão empresarial.
                </p>
                <div className="space-y-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-muted transition-all duration-300 group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {social.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Perguntas <span className="bg-gradient-comet bg-clip-text text-transparent">Frequentes</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Quanto tempo leva para ter uma primeira reunião?',
                  a: 'Normalmente respondemos em até 24 horas e podemos agendar uma reunião para a mesma semana.',
                },
                {
                  q: 'Atendem empresas de que porte?',
                  a: 'Atendemos desde pequenas empresas até médias empresas, com soluções personalizadas para cada porte.',
                },
                {
                  q: 'O atendimento é presencial ou remoto?',
                  a: 'Oferecemos ambas as modalidades. Podemos atender presencialmente em São Paulo ou remotamente em todo o Brasil.',
                },
                {
                  q: 'Qual o investimento nos serviços?',
                  a: 'O investimento varia conforme o serviço e as necessidades da empresa. Fazemos uma proposta personalizada após a primeira reunião.',
                },
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border shadow-card"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
