import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { GraduationCap, Video, Users, Wrench, ShoppingCart, FileText } from 'lucide-react';

const Vendas = () => {
  const products = [
    {
      icon: <GraduationCap className="h-12 w-12" />,
      category: 'Cursos Online',
      title: 'Liderança de Alta Performance',
      description: 'Curso completo para desenvolver habilidades essenciais de liderança, gestão de equipes e tomada de decisão estratégica.',
      benefits: [
        'Conteúdo 100% online',
        'Certificado de conclusão',
        'Acesso vitalício',
        'Material complementar',
      ],
      price: 'Sob consulta',
    },
    {
      icon: <Video className="h-12 w-12" />,
      category: 'Cursos Online',
      title: 'Gestão de Processos na Prática',
      description: 'Aprenda a mapear, documentar e otimizar processos empresariais para aumentar a eficiência e reduzir custos.',
      benefits: [
        'Metodologias práticas',
        'Cases reais',
        'Templates prontos',
        'Suporte por 90 dias',
      ],
      price: 'Sob consulta',
    },
    {
      icon: <Users className="h-12 w-12" />,
      category: 'Treinamentos In Company',
      title: 'Desenvolvimento de Líderes',
      description: 'Programa presencial customizado para desenvolver líderes dentro da sua empresa, adaptado à sua cultura e necessidades.',
      benefits: [
        'Conteúdo personalizado',
        'Facilitadores experientes',
        'Metodologias ativas',
        'Acompanhamento pós-treinamento',
      ],
      price: 'Sob consulta',
    },
    {
      icon: <Users className="h-12 w-12" />,
      category: 'Treinamentos Online',
      title: 'Equipes de Alta Performance',
      description: 'Treinamento online ao vivo para capacitar equipes em colaboração, comunicação eficaz e cultura de resultados.',
      benefits: [
        'Formato online ao vivo',
        'Interação em tempo real',
        'Gravações disponíveis',
        'Material de apoio',
      ],
      price: 'Sob consulta',
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      category: 'Ferramentas de Gestão',
      title: 'Kit Completo de Templates',
      description: 'Conjunto de planilhas, templates e ferramentas prontas para implementar gestão profissional na sua empresa.',
      benefits: [
        'Templates editáveis',
        'Planilhas de KPIs',
        'Modelos de documentos',
        'Guia de implementação',
      ],
      price: 'Sob consulta',
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      category: 'Ferramentas de Gestão',
      title: 'Dashboard de Indicadores',
      description: 'Sistema completo para monitoramento de indicadores-chave de desempenho da sua empresa em tempo real.',
      benefits: [
        'Dashboards personalizáveis',
        'Integração com dados',
        'Relatórios automáticos',
        'Suporte técnico',
      ],
      price: 'Sob consulta',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ShoppingCart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Produtos e <span className="bg-gradient-comet bg-clip-text text-transparent">Soluções</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Cursos, treinamentos e ferramentas para impulsionar seu desenvolvimento e o da sua empresa
            </p>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl border border-border shadow-card hover:shadow-comet transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
                >
                  {/* Header */}
                  <div className="bg-muted/30 p-6 border-b border-border">
                    <div className="text-primary mb-4">
                      {product.icon}
                    </div>
                    <div className="text-sm font-semibold text-primary mb-2">
                      {product.category}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {product.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-6">
                      {product.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-6 flex-1">
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        O que você recebe:
                      </h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                              <div className="bg-primary rounded-full w-1.5 h-1.5"></div>
                            </div>
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & CTA */}
                    <div className="space-y-4 border-t border-border pt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {product.price}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="hero" size="sm" asChild>
                          <a href="#contact-form">
                            Adquirir
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href="#contact-form">
                            Mais Info
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pacotes Especiais */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Pacotes <span className="bg-gradient-comet bg-clip-text text-transparent">Especiais</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Combine produtos e economize com nossos pacotes personalizados
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Pacote Starter',
                  description: 'Ideal para empresários que estão começando a estruturar sua gestão',
                  includes: ['2 Cursos Online', 'Kit de Templates', 'Suporte por 30 dias'],
                  highlight: 'Economia de 25%',
                },
                {
                  title: 'Pacote Business',
                  description: 'Solução completa para empresas em crescimento',
                  includes: ['Todos os Cursos Online', 'Treinamento In Company', 'Ferramentas Completas', 'Consultoria 3 meses'],
                  highlight: 'Economia de 40%',
                },
              ].map((pack, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl border-2 border-primary shadow-comet p-8"
                >
                  <div className="mb-6">
                    <div className="inline-block bg-gradient-comet text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                      {pack.highlight}
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {pack.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {pack.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      O que inclui:
                    </h4>
                    <ul className="space-y-2">
                      {pack.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href="#contact-form">
                      Solicitar Proposta
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Solicite <span className="bg-gradient-comet bg-clip-text text-transparent">Informações</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário e nossa equipe enviará detalhes completos sobre preços e condições
              </p>
            </div>
            <ContactForm 
              title="Quero saber mais sobre produtos e cursos"
              buttonText="Enviar solicitação"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vendas;
