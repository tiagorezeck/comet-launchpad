import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Handshake, Cog, Users, Target, CheckCircle2, Plus } from 'lucide-react';

const Parceiros = () => {
  const partners = [
    {
      name: 'Automac',
      description: 'Parceria estratégica em sistemas de automação empresarial e BPO financeiro.',
      specialty: 'Automação e Processos Financeiros',
      benefits: [
        'Sistemas integrados de gestão',
        'Automação de processos financeiros',
        'BPO (Business Process Outsourcing)',
        'Redução de custos operacionais',
      ],
      icon: <Cog className="h-16 w-16" />,
    },
    {
      name: 'A Três - COMET + Jess Knoll',
      description: 'Projeto exclusivo focado em Desenvolvimento Humano Organizacional (DHO), combinando a expertise da COMET em gestão com a experiência de Jess Knoll em comportamento organizacional.',
      specialty: 'Desenvolvimento Humano Organizacional',
      benefits: [
        'Engajamento e motivação de equipes',
        'Desenvolvimento de liderança humanizada',
        'Fortalecimento da cultura organizacional',
        'Programas de bem-estar corporativo',
      ],
      icon: <Users className="h-16 w-16" />,
      highlight: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Handshake className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Nossos <span className="bg-gradient-comet bg-clip-text text-transparent">Parceiros</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Juntos, oferecemos soluções completas para transformar sua empresa
            </p>
          </div>
        </div>
      </section>

      {/* Parceiros Atuais */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Parcerias <span className="bg-gradient-comet bg-clip-text text-transparent">Estratégicas</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Colaborações que ampliam nosso impacto e oferecem valor adicional aos nossos clientes
              </p>
            </div>

            <div className="space-y-8">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className={`bg-card rounded-xl border ${partner.highlight ? 'border-2 border-primary shadow-comet' : 'border-border shadow-card'} overflow-hidden hover:shadow-glow transition-all duration-300`}
                >
                  <div className="p-8 md:p-10">
                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Icon & Title */}
                      <div className="md:col-span-1">
                        <div className="text-primary mb-6">
                          {partner.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">
                          {partner.name}
                        </h3>
                        {partner.highlight && (
                          <div className="inline-block bg-gradient-comet text-white text-xs font-bold px-3 py-1 rounded-full mt-2">
                            Parceria Exclusiva
                          </div>
                        )}
                        <div className="mt-4">
                          <div className="text-sm font-semibold text-primary">
                            {partner.specialty}
                          </div>
                        </div>
                      </div>

                      {/* Description & Benefits */}
                      <div className="md:col-span-2 space-y-6">
                        <p className="text-lg text-muted-foreground">
                          {partner.description}
                        </p>

                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-4">
                            Benefícios da Parceria:
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {partner.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <Button variant="comet" asChild>
                            <a href="#contact-form">
                              Descubra como esta parceria pode ajudar sua empresa
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A Três - Destaque Especial */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 border border-primary shadow-glow">
              <div className="text-center mb-8">
                <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Conheça o Projeto <span className="bg-gradient-comet bg-clip-text text-transparent">A Três</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  COMET + Jess Knoll: A união perfeita entre gestão estratégica e desenvolvimento humano
                </p>
              </div>

              <div className="space-y-6 text-center">
                <p className="text-lg text-foreground">
                  O projeto <span className="font-semibold text-primary">A Três</span> é uma iniciativa inovadora que combina:
                </p>

                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Expertise da COMET
                    </h3>
                    <p className="text-muted-foreground">
                      Estruturação de processos, gestão estratégica e organização empresarial
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Visão de Jess Knoll
                    </h3>
                    <p className="text-muted-foreground">
                      Desenvolvimento humano, comportamento organizacional e cultura empresarial
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button variant="hero" size="xl" asChild>
                    <a href="#contact-form">
                      Descubra como a Três pode transformar sua empresa
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Futuros Parceiros */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Plus className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Espaço para Novas <span className="bg-gradient-comet bg-clip-text text-transparent">Parcerias</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Estamos sempre abertos a estabelecer novas parcerias estratégicas que agreguem valor aos nossos clientes e fortaleçam nosso ecossistema de soluções empresariais.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3, 4, 5].map((num) => (
                <div 
                  key={num}
                  className="bg-muted/30 rounded-lg border-2 border-dashed border-border p-8 flex items-center justify-center min-h-[120px]"
                >
                  <span className="text-muted-foreground font-medium">
                    Parceiro em breve
                  </span>
                </div>
              ))}
            </div>

            <p className="text-lg text-foreground mb-6">
              Sua empresa pode ser nossa próxima parceira?
            </p>
            <Button variant="comet" size="lg" asChild>
              <a href="#contact-form">
                Quero ser parceiro do Instituto COMET
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contact-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Entre em <span className="bg-gradient-comet bg-clip-text text-transparent">Contato</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Quer saber mais sobre nossas parcerias ou se tornar um parceiro? Fale conosco!
              </p>
            </div>
            <ContactForm 
              title="Fale sobre parcerias"
              buttonText="Enviar mensagem"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parceiros;
