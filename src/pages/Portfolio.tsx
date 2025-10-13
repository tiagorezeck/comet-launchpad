import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Building2, TrendingUp, Users2, Target, CheckCircle2 } from 'lucide-react';
import portfolioHero from '@/assets/hero/portfolio-hero.jpg';
const Portfolio = () => {
  const cases = [{
    company: 'Sistek It Service - Setor de TI',
    challenge: 'Crise financeira, sem estrutura organizacional adequada, alta rotatividade de colaboradores e processos internos desorganizados.',
    solution: 'Implementação da Metodologia COMET com foco em estruturação de processos comerciais, financeiros, marketinge e RH, desenvolvimento de liderança e criação de cultura organizacional.',
    results: ['Redução de 45% na rotatividade', '80% de Contratações Assertivas ', 'Aumento de 80% na conversão de vendas', 'Implementação de  processos documentados', 'Desenvolvimento de liderança e mudança de cargos'],
    icon: <Building2 className="h-12 w-12" />
  }, {
    company: 'Indústria Metalúrgica - 50 Funcionários',
    challenge: 'Baixa produtividade, desperdício de materiais, comunicação ineficaz entre setores e falta de indicadores de desempenho.',
    solution: 'Consultoria completa com mapeamento de processos produtivos, implementação de KPIs, treinamento de líderes e criação de rotinas de gestão.',
    results: ['Aumento de 35% na produtividade', 'Redução de 28% no desperdício de materiais', 'Implementação de dashboard de indicadores', 'Comunicação fluida entre todos os setores'],
    icon: <TrendingUp className="h-12 w-12" />
  }, {
    company: 'Rede de Varejo - 3 Lojas',
    challenge: 'Expansão sem planejamento, dificuldade em padronizar operações, conflitos na gestão familiar e resultados financeiros inconsistentes.',
    solution: 'Mentoria estratégica para os sócios, desenvolvimento de governança familiar, padronização de processos e implantação de controles financeiros.',
    results: ['Abertura de mais 2 lojas com planejamento estruturado', 'Lucratividade aumentou 50% em 12 meses', 'Processos padronizados nas 5 unidades', 'Governança familiar estabelecida com clareza'],
    icon: <Users2 className="h-12 w-12" />
  }];
  const additionalServices = ['Diagnóstico organizacional completo', 'Planejamento estratégico anual', 'Desenvolvimento de líderes', 'Estruturação de processos comerciais', 'Implementação de gestão por indicadores', 'Cultura organizacional e engajamento', 'Governança corporativa e familiar', 'Sucessão empresarial'];
  return <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${portfolioHero})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Nosso <span className="bg-gradient-comet bg-clip-text text-transparent">Portfólio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Cases reais de transformação empresarial através da Metodologia COMET
            </p>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              O Que a Metodologia COMET Faz
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Metodologia COMET transforma empresas desorganizadas em organizações de alta performance. 
              Através de diagnóstico preciso, planejamento estratégico e implementação acompanhada, 
              desenvolvemos pessoas, estruturamos processos e geramos resultados consistentes e sustentáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Cases de <span className="bg-gradient-comet bg-clip-text text-transparent">Sucesso</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Conheça algumas das transformações que realizamos
              </p>
            </div>

            <div className="space-y-12">
              {cases.map((caseItem, index) => <div key={index} className="bg-card rounded-xl border border-border shadow-card overflow-hidden hover:shadow-comet transition-all duration-300">
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="text-primary flex-shrink-0">
                        {caseItem.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {caseItem.company}
                        </h3>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Desafio */}
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-3">
                          Desafio
                        </h4>
                        <p className="text-muted-foreground">
                          {caseItem.challenge}
                        </p>
                      </div>

                      {/* Solução */}
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-3">
                          Solução COMET
                        </h4>
                        <p className="text-muted-foreground">
                          {caseItem.solution}
                        </p>
                      </div>

                      {/* Resultados */}
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-3">
                          Resultados
                        </h4>
                        <ul className="space-y-2">
                          {caseItem.results.map((result, idx) => <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground">{result}</span>
                            </li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Adicionais */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Outros Serviços da <span className="bg-gradient-comet bg-clip-text text-transparent">Metodologia COMET</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Soluções completas para todas as necessidades da sua empresa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {additionalServices.map((service, index) => <div key={index} className="bg-card rounded-lg p-4 border border-border shadow-card hover:shadow-comet transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{service}</span>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6 md:text-5xl">
              Transformaremos sua empresa no nosso <span className="bg-gradient-comet bg-clip-text text-transparent">Próximo Case de Sucesso!</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Entre em contato e descubra como a Metodologia COMET pode transformar sua empresa
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact-form">
                Quero transformar minha empresa
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm title="Solicite uma proposta personalizada" subtitle="Conte-nos sobre sua empresa e vamos criar uma solução sob medida" />
          </div>
        </div>
      </section>
    </div>;
};
export default Portfolio;
