import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Handshake, CheckCircle2, Sparkles } from 'lucide-react';
import parceirosHero from '@/assets/hero/parceiros-hero.jpg';
import automacLogo from '@/assets/partners/automac1.png';
import jessLogo from '@/assets/partners/jk1.png';
import farmerLogo from '@/assets/partners/farmer.png';
import tresLogo from '@/assets/partners/tres.png';
import bragaLogo from '@/assets/partners/braga.png';
const Parceiros = () => {
  const partners = [{
    logo: automacLogo,
    name: 'Automac',
    description: 'Especializada em soluções de automação e sistemas integrados de gestão empresarial para empresas dos setores de food e varejo, oferecendo tecnologias e ferramentas que otimizam vendas, processos e eficiência operacional.',
    specialty: 'Automação e Sistemas de Gestão',
    website: 'https://automacdigitron.com.br/'
  }, {
    logo: jessLogo,
    name: 'Jess Knoll',
    description: 'Especialista em comportamento humano, desenvolvimento pessoal e profissional, atuando com mapeamento de perfil comportamental e testes psicométricos para apoiar organizações e equipes a alcançarem melhores resultados.',
    specialty: 'Desenvolvimento Humano',
    website: 'https://jessknoll.com.br/'
  }, {
    logo: farmerLogo,
    name: 'Farmer',
    description: 'Agência especializada em marketing digital, tráfego pago e estratégias de crescimento online, ajudando empresas a aumentarem visibilidade, atrair mais leads qualificados, aumentando as oportunidades e potencializando os resultados de vendas.',
    specialty: 'Marketing Digital',
    website: 'https://farmermkt.com.br/'
  }, {
    logo: bragaLogo,
    name: 'Braga da Silva Advogados',
    description: 'Escritório especializado em Direito Corporativo, Tributário, Fusões e Aquisições, com sócios reconhecidos internacionalmente. Atua em empresas nacionais e estrangeiras, oferecendo consultoria estratégica, planejamento tributário e estruturações dos mais diversos negócios.',
    specialty: 'Direito Corporativo e Tributário',
    website: 'https://www.linkedin.com/in/luiz-roberto-braga-da-silva-a8480a24/'
  }];
  return <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${parceirosHero})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
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

            <div className="grid md:grid-cols-2 gap-8">
              {partners.map((partner, index) => <div key={index} className="bg-card rounded-xl border border-border shadow-card overflow-hidden hover:shadow-comet transition-all duration-300 hover:-translate-y-1">
                  <div className="p-8">
                    {/* Logo */}
                    <div className="h-36 flex items-center justify-center bg-background/50 rounded-lg p-6 mb-6">
                      <img src={partner.logo} alt={partner.name} className="max-h-32 max-w-full object-contain" />
                    </div>

                    {/* Info */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground text-center">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-primary font-semibold text-center">
                        {partner.specialty}
                      </p>
                      <p className="text-muted-foreground text-justify text-sm font-light">
                        {partner.description}
                      </p>
                      <div className="mt-6 text-center">
                        <Button variant="comet" asChild className="w-full">
                          <a href={partner.website} target="_blank" rel="noopener noreferrer">
                            Conheça nosso parceiro
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Projeto TRÊS - Destaque Especial */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 border-2 border-primary shadow-glow">
              <div className="text-center mb-8">
                <div className="h-32 flex items-center justify-center mb-6">
                  <img src={tresLogo} alt="Projeto TRÊS" className="max-h-28 max-w-full object-contain" />
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Conheça o projeto <span className="bg-gradient-comet bg-clip-text text-transparent">TRÊS</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  A união perfeita entre gestão estratégica organizacional e desenvolvimento humano
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-foreground text-center">
                  O projeto <span className="font-bold text-primary">TRÊS</span> é uma iniciativa inovadora, desenvolvido em parceria, a três mãos, que promove uma transformação empresarial sistêmica, com foco no desenvolvimento de pessoas, donos, líderes e equipes, onde todas as áreas da empresa são desenvolvidas e alinhadas para gerar resultados mais previsíveis e consistentes.
                </p>

                <div className="pt-6 text-center">
                  <Button variant="hero" size="lg" asChild>
                    <a href="#contact-form">Descubra como o projeto TRÊS pode transformar sua empresa</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Torne-se Parceiro */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 via-background to-primary/5 rounded-2xl p-10 border border-primary/30 shadow-glow text-center">
              <Sparkles className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Torne-se um <span className="bg-gradient-comet bg-clip-text text-transparent">Parceiro COMET</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Faça parte da nossa rede de parceiros e amplie seus resultados com a COMET
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Se sua empresa atua com desenvolvimento humano, tecnologia, educação ou soluções corporativas, queremos conhecer você.
              </p>
              <Button variant="hero" size="lg" className="animate-pulse hover:animate-none" asChild>
                <a href="https://wa.me/5524999382195?text=Gostaria%20de%20ser%20parceiro%20do%20Instituto%20COMET" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mx-auto w-fit">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Torne-se um Parceiro COMET
                </a>
              </Button>
            </div>
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
            <ContactForm title="Fale sobre parcerias" buttonText="Enviar mensagem" />
          </div>
        </div>
      </section>
    </div>;
};
export default Parceiros;
