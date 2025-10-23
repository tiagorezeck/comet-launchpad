import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Rocket, Target, Users, CheckCircle2, ArrowRight, Heart, Cog, Brain, Map, GraduationCap, Zap, Trophy } from 'lucide-react';
import servicosHero from '@/assets/hero/servicos-hero.jpg';
import Consultoria from '@/assets/servicos/Consultoria.png';
import Mentoriae from '@/assets/servicos/Mentoriae.png';
import Treinamentos from '@/assets/servicos/Treinamentos.png';
import Palestra from '@/assets/servicos/Palestra.png';
import Treinamento from '@/assets/servicos/Treinamento.png';
import Testes from '@/assets/servicos/Testes.png';
import Mentoriai from '@/assets/servicos/Mentoriai.png';
import Curso from '@/assets/servicos/Curso.png';
import Diagnostico from '@/assets/servicos/Diagnostico.png';
const Servicos = () => {
  const services = [{
    icon: <Rocket className="h-16 w-16" />,
    title: 'Consultoria Empresarial',
    subtitle: 'Organize e expanda seu negócio com segurança',
    description: 'Nossa Consultoria Empresarial COMET tira você do operacional exaustivo e resolve os problemas que travam seu crescimento: perda de vendas, clientes sumindo, falta de controle financeiro e não ver o dinheiro no fim do mês. Atuamos lado a lado para estruturar processos, otimizar recursos, desenvolver líderes e times de alta performance, e criar um caminho estratégico, tático e operacional que transforma sua empresa e acelera resultados sustentáveis.',
    benefits: ['Diagnóstico completo da situação atual da empresa', 'Planejamento estratégico personalizado', 'Mapeamento e otimização de processos comerciais', 'Mapeamento e otimização de processos de marketing', 'Mapeamento e otimização de processos de RH', 'Mapeamento e otimização de processos financeiros', 'Mapeamento e otimização de processos logísticos', 'Mentoria de Gestão e Liderança para altos cargos', 'Técnicas e ferramentas para gestão e alta performance', 'Implementação de sistemas de gestão eficazes', 'Treinamento técnico e comportamental do time', 'Acompanhamento e suporte contínuo', 'Resultados mensuráveis e sustentáveis'],
    results: 'Empresa organizada e estruturada, com planejamento estratégico, processos claros e previsíveis, cultura e clima organizacional positivos, ambiente de trabalho saudável, time forte e de alta performance, liderança preparada e competente, decisões mais assertivas, custos reduzidos, recursos otimizados e lucro crescente.'
  }, {
    icon: <Target className="h-16 w-16" />,
    title: 'Mentoria Estratégica',
    subtitle: 'Clareza, foco e decisões assertivas',
    description: 'A Mentoria Estratégica COMET desenvolve líderes de alta performance, ampliando autoconhecimento, comunicação, negociação, delegação de tarefas e a capacidade de formar, desenvolver, inspirar e engajar seu Time. O programa oferece ferramentas práticas que transformam você em um líder de autoridade e resultados. Do diagnóstico ao resultado, garante evolução real e sustentável.',
    benefits: ['Sessões individuais ou em grupo', 'Diagnóstico de competências de gestão e liderança', 'Análise de perfil comportamental assessment', 'Mapeamento de competências "CHAVES"', 'Plano de evolução, visão estratégica e tática', 'Metodologias ativas e práticas de liderança', 'Desenvolvimento de habilidades de gestão e liderança', 'Técnicas de comunicação e negociação,', 'Ferramentas de gestão para alta performance', 'Formação de Time Forte e estrutura tática', 'Avaliação de números e previsibilidade de resultados', 'Definição e acompanhamento de metas', 'Acesso direto a experiência comprovada'],
    results: 'Tornar-se um líder de verdade, com autoridade e presença para conduzir equipes. Desenvolver habilidades em comunicação, negociação e gestão de pessoas com excelência. Tomar decisões estratégicas com clareza, acelerando resultados e crescimento pessoal'
  }, {
    icon: <Users className="h-16 w-16" />,
    title: 'Treinamentos Corporativos',
    subtitle: 'Times de alta performance',
    description: 'Desenvolvemos programas de treinamento customizados para capacitar líderes e times nas competências essenciais para alta performance. Nossos treinamentos são práticos, dinâmicos e focados em resultados reais.',
    benefits: ['Treinamentos in company ou online', 'Conteúdo personalizado para sua realidade', 'Formações técnicas e comportamentais', 'Formação em Análise de Perfil Comportamental', 'Formação em Comercial e Vendas', 'Formação em Marketing Estratégico', 'Formação em Equilíbrio Emocional', 'Formação em Gestão Empresarial Sistêmica', 'Formação em Liderança', 'Palestras e Workshops dinamicos', 'Treinamentos Personalizados'],
    results: 'Times mais engajados, líderes preparados, comunicação eficaz e cultura organizacional fortalecida.'
  }];
  return <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${servicosHero})`
      }}>
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

      {/* Metodologia COMETAS */}
      <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.08),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="mb-6">
                <h2 className="text-6xl md:text-7xl font-black tracking-wider mb-4">
                  <span className="bg-gradient-comet bg-clip-text text-transparent drop-shadow-lg text-5xl">METODOLOGIA COMET</span>
                </h2>
                <div className="h-1 w-32 mx-auto bg-gradient-comet rounded-full shadow-glow"></div>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">Como acelerar seu crescimento na velocidade dos cometas</p>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
                A energia que move pessoas, transforma empresas e gera resultados extraordinários.
              </p>
            </div>

            {/* Pilares Grid */}
            <div className="grid md:grid-cols-1 lg:grid-cols-7 gap-1 mb-5">
              {[{
              letter: 'C',
              icon: <Heart className="h-6 w-6" />,
              title: 'Cultura Organizacional Forte',
              description: 'Construímos valores sólidos que promovem engajamento, confiança e pertencimento.'
            }, {
              letter: 'O',
              icon: <Cog className="h-6 w-6" />,
              title: 'Organização e Processos Inteligentes',
              description: 'Estruturamos fluxos claros e eficientes para tornar a empresa mais produtiva.'
            }, {
              letter: 'M',
              icon: <Brain className="h-6 w-6" />,
              title: 'Mentalidade Vencedora e Liderança',
              description: 'Formamos líderes preparados, decisores e que inspiram confiança através do exemplo.'
            }, {
              letter: 'E',
              icon: <Map className="h-6 w-6" />,
              title: 'Estratégia, Planejamento e Gestão',
              description: 'Definimos caminhos claros, unindo visão estratégica e indicadores para resultados concretos.'
            }, {
              letter: 'T',
              icon: <GraduationCap className="h-6 w-6" />,
              title: 'Treinamento e Evolução Contínua',
              description: 'Desenvolvemos pessoas com competências técnicas e comportamentais que transformam a empresa.'
            }, {
              letter: 'A',
              icon: <Zap className="h-6 w-6" />,
              title: 'Autonomia e Ações de Alta Performance',
              description: 'Promovemos autonomia para que times encontre soluções, tomem decisões assertivas e execute com excelência.'
            }, {
              letter: 'S',
              icon: <Trophy className="h-6 w-6" />,
              title: 'Sucesso e Resultados Sustentaveis',
              description: 'Transformamos empresas através dos talentos, promovendo estabilidade, crescimento e resultados extraordinários.'
            }].map((pilar, index) => <div key={index} className="group bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  {/* Letter Badge */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-comet flex items-center justify-center shadow-comet group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl font-black text-white">
                        {pilar.letter}
                      </span>
                    </div>
                    <div className="text-primary group-hover:text-accent transition-colors duration-300">
                      {pilar.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-foreground mb-3 group-hover:text-primary transition-colors duration-300 text-base font-bold text-center">
                    {pilar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm text-center">
                    {pilar.description}
                  </p>
                </div>)}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact-form">
                  Quero transformar minha empresa agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      {services.map((service, index) => <section key={index} className={`py-20 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}>
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
                  <p className="text-lg text-muted-foreground text-justify">
                    {service.description}
                  </p>
                  
                  <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      Resultados Esperados
                    </h3>
                    <p className="text-muted-foreground text-justify">
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
                    {service.benefits.map((benefit, idx) => <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>)}

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
              {[{
              step: '01',
              title: 'Contato Inicial',
              desc: 'Conversamos sobre seus desafios e objetivos'
            }, {
              step: '02',
              title: 'Diagnóstico',
              desc: 'Analisamos profundamente sua empresa'
            }, {
              step: '03',
              title: 'Proposta',
              desc: 'Apresentamos solução personalizada'
            }, {
              step: '04',
              title: 'Implementação',
              desc: 'Trabalhamos juntos nos resultados'
            }, {
              step: '05',
              title: 'Acompanhamento',
              desc: 'Seguimos corrigindo, ajustando e potencializando os resultados'
            }, {
              step: '06',
              title: 'Entrega',
              desc: 'Finalização do projeto proposto'
            }].map((item, index) => <div key={index} className="bg-card rounded-lg p-6 border border-border shadow-card text-center">
                  <div className="text-5xl font-bold bg-gradient-comet bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-base">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>)}
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
              {[{
              img: Consultoria,
              title: 'Consultoria Empresarial'
            }, {
              img: Mentoriae,
              title: 'Mentoria Executiva'
            }, {
              img: Treinamentos,
              title: 'Treinamento Corporativo'
            }, {
              img: Palestra,
              title: 'Palestra Time Forte'
            }, {
              img: Treinamento,
              title: 'Treinamento Comportamental'
            }, {
              img: Testes,
              title: 'Teste de Perfil Comportamental'
            }, {
              img: Mentoriai,
              title: 'Mentoria Individual'
            }, {
              img: Curso,
              title: 'Curso de Formação'
            }, {
              img: Diagnóstico,
              title: 'Acompanhamento de Resultados'
            }].map((item, index) => <div key={index} className="group relative overflow-hidden rounded-xl border border-border shadow-card bg-card transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
                </div>)}
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
    </div>;
};
export default Servicos;
