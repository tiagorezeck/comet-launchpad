import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Rocket, Target, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import servicosHero from '@/assets/hero/servicos-hero.jpg';
import treinamento1 from '@/assets/servicos/treinamento-1.jpg';
import mentoria1 from '@/assets/servicos/mentoria-1.jpg';
import consultoria1 from '@/assets/servicos/consultoria-1.jpg';
import reuniao1 from '@/assets/servicos/reuniao-1.jpg';
import workshop1 from '@/assets/servicos/workshop-1.jpg';
import palestra1 from '@/assets/servicos/palestra-1.jpg';
import diagnostico1 from '@/assets/servicos/diagnostico-1.jpg';
import planejamento1 from '@/assets/servicos/planejamento-1.jpg';
import acompanhamento1 from '@/assets/servicos/acompanhamento-1.jpg';

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
        'Mentoria de Gestão e Liderança',
        'Técnicas e ferramentas para gestão e performance',
        'Implementação de sistemas de gestão eficazes',
        'Treinamento técnico e comportamental do Time',
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
        'Diagnóstico de objetivos e desafios de liderança',
        'Análise de perfil comportamental por testes assessment
        'Mapeamento de competências "CHAVES"
        'Plano de evolução, visão estratégica e tática',
        'Metodologias ativas e práticas de liderança',
        'Desenvolvimento de habilidades "Vendas, Delegação, Feedback"',
        'Técnicas de comunicação e negociação,',
        'Ferramentas de gestão para alta performance',
        'Formação de Time Forte e estrutura tática',
        'Avaliação de números e previsibilidade de resultados',       
        'Definição e acompanhamento de metas',
        'Acesso direto a experiência comprovada',
      ],
      results: 'Maior clareza estratégica, decisões mais assertivas, crescimento acelerado e desenvolvimento pessoal contínuo.',
    },
    {
      icon: <Users className="h-16 w-16" />,
      title: 'Treinamentos Corporativos',
      subtitle: 'Times de alta performance',
      description: 'Desenvolvemos programas de treinamento customizados para capacitar líderes e times nas competências essenciais para alta performance. Nossos treinamentos são práticos, dinâmicos e focados em resultados reais.',
      benefits: [
        'Treinamentos in company ou online',
        'Conteúdo personalizado para sua realidade',
        'Formações técnicas e comportamentais',
        'Formação em Análise de Perfil Comportamental',
        'Formação em Comercial e Vendas',
        'Formação em Marketing Estratégico',
        'Formação em Equilíbrio Emocional',
        'Formação em Gestão Empresarial Sistêmica',
        'Formação em Liderança',
        'Palestras e Workshops dinamicos',
        'Treinamentos Personalizados',
      ],
      results: 'Times mais engajados, líderes preparados, comunicação eficaz e cultura organizacional fortalecida.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicosHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Nossos <span className="bg-gradient-comet bg-clip-text text-transparent">Serviços</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Soluções completas baseadas na Metodologia COMET, especializada em Desenvolvimento Humano e Organizacional (DHO), para transformação da sua empresa
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'Contato Inicial', desc: 'Conversamos sobre seus desafios e objetivos' },
                { step: '02', title: 'Diagnóstico', desc: 'Analisamos profundamente sua empresa' },
                { step: '03', title: 'Proposta', desc: 'Apresentamos solução personalizada' },
                { step: '04', title: 'Implementação', desc: 'Trabalhamos juntos nos resultados' },
                { step: '05', title: 'Acompanhamento', desc: 'Seguimos corrigindo, ajustando e potencializando os resultados' },
                { step: '06', title: 'Entrega', desc: 'Finalização do projeto proposto' },
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

      {/* Galeria de Serviços */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Nossos <span className="bg-gradient-comet bg-clip-text text-transparent">Serviços em Ação</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Veja alguns dos serviços que prestamos aos nossos clientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: treinamento1, title: 'Treinamento de Liderança' },
                { img: mentoria1, title: 'Mentoria Executiva' },
                { img: consultoria1, title: 'Consultoria Estratégica' },
                { img: reuniao1, title: 'Reunião de Planejamento' },
                { img: workshop1, title: 'Workshop de Processos' },
                { img: palestra1, title: 'Palestra Motivacional' },
                { img: diagnostico1, title: 'Diagnóstico Empresarial' },
                { img: planejamento1, title: 'Planejamento Estratégico' },
                { img: acompanhamento1, title: 'Acompanhamento de Resultados' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-border shadow-card bg-card transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4 bg-card/95 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-foreground text-center">
                      {item.title}
                    </h3>
                  </div>
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
                Preencha o formulário e nosso time entrará em contato para entender suas necessidades
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
