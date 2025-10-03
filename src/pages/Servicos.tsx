import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Rocket, Target, Users, CheckCircle2, ArrowRight } from 'lucide-react';

const Servicos = () => {
  const services = [
    {
      icon: <Rocket className="h-16 w-16" />,
      title: 'Consultoria Empresarial',
      subtitle: 'Organize e expanda seu negócio com segurança',
      description: 'Nossa consultoria empresarial é um processo completo de diagnóstico, planejamento e implementação de melhorias estratégicas. Trabalhamos lado a lado com você para estruturar processos, otimizar recursos e criar um caminho claro para o crescimento sustentável.',
      benefits: [
        'Diagnóstico completo da situação atual da empresa',
        'Planejamento estratégico personalizado',
        'Mapeamento e otimização de processos',
        'Implementação de sistemas de gestão eficazes',
        'Acompanhamento e suporte contínuo',
        'Resultados mensuráveis e sustentáveis',
      ],
      results: 'Empresas mais organizadas, processos claros e previsíveis, redução de custos e aumento de lucratividade.',
    },
    {
      icon: <Target className="h-16 w-16" />,
      title: 'Mentoria Estratégica',
      subtitle: 'Clareza, foco e decisões assertivas',
      description: 'A mentoria estratégica é um acompanhamento personalizado para empresários e líderes que buscam orientação especializada para tomar decisões mais acertadas, superar desafios e acelerar o crescimento do negócio.',
      benefits: [
        'Sessões individuais ou em grupo',
        'Análise aprofundada de desafios específicos',
        'Orientação estratégica para tomada de decisão',
        'Desenvolvimento de visão de longo prazo',
        'Accountability e acompanhamento de metas',
        'Acesso direto a experiência comprovada',
      ],
      results: 'Maior clareza estratégica, decisões mais assertivas, crescimento acelerado e desenvolvimento pessoal contínuo.',
    },
    {
      icon: <Users className="h-16 w-16" />,
      title: 'Treinamentos Corporativos',
      subtitle: 'Equipes de alta performance',
      description: 'Desenvolvemos programas de treinamento customizados para capacitar líderes e equipes nas competências essenciais para alta performance. Nossos treinamentos são práticos, dinâmicos e focados em resultados reais.',
      benefits: [
        'Treinamentos in company ou online',
        'Conteúdo personalizado para sua realidade',
        'Metodologias ativas e práticas',
        'Desenvolvimento de liderança',
        'Gestão de processos e pessoas',
        'Cultura de melhoria contínua',
      ],
      results: 'Equipes mais engajadas, líderes preparados, comunicação eficaz e cultura organizacional fortalecida.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Nossos <span className="bg-gradient-comet bg-clip-text text-transparent">Serviços</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Soluções completas baseadas na Metodologia COMET para transformar sua empresa
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      {services.map((service, index) => (
        <section 
          key={index} 
          className={`py-20 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Icon & Title */}
                <div className="space-y-6">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-2">
                      {service.title}
                    </h2>
                    <p className="text-xl text-primary font-semibold">
                      {service.subtitle}
                    </p>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      Resultados Esperados
                    </h3>
                    <p className="text-muted-foreground">
                      {service.results}
                    </p>
                  </div>

                  <Button variant="hero" size="lg" asChild>
                    <a href="#contact-form">
                      Quero saber mais sobre este serviço
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                {/* Benefits */}
                <div className="bg-card border border-border rounded-xl p-8 shadow-card">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    O que inclui:
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Como Funciona */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Como Funciona a <span className="bg-gradient-comet bg-clip-text text-transparent">Parceria</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Um processo estruturado para garantir os melhores resultados
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Contato Inicial', desc: 'Conversamos sobre seus desafios e objetivos' },
                { step: '02', title: 'Diagnóstico', desc: 'Analisamos profundamente sua empresa' },
                { step: '03', title: 'Proposta', desc: 'Apresentamos solução personalizada' },
                { step: '04', title: 'Implementação', desc: 'Trabalhamos juntos nos resultados' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border shadow-card text-center"
                >
                  <div className="text-5xl font-bold bg-gradient-comet bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Pronto para <span className="bg-gradient-comet bg-clip-text text-transparent">Começar</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário e nossa equipe entrará em contato para entender suas necessidades
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
