import ContactForm from '@/components/ContactForm';
import { Award, Target, Eye, Heart } from 'lucide-react';
import tiagoRezeck from '@/assets/tiago-rezeck.png';
import sobreHero from '@/assets/hero/sobre-hero.jpg';
const Sobre = () => {
  return <div className="min-h-screen">
      {/* Hero - Storytelling Emocional */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${sobreHero})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              A História do <span className="bg-gradient-comet bg-clip-text text-transparent">COMET</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Como um consultor transformou sua experiência em uma metodologia que acelera empresas
            </p>
          </div>
        </div>
      </section>

      {/* A Jornada - Layout Compacto e Moderno */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Foto + Apresentação em Grid Horizontal */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-glow group">
                <img src={tiagoRezeck} alt="Tiago Rezeck - Fundador Instituto COMET" className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-205" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Tiago Rezeck
                </h3>
                <p className="text-lg text-primary font-semibold">
                  Fundador • Especialista em DHO
                </p>
                <p className="text-base text-muted-foreground leading-relaxed text-justify">Com mais de 10 anos de experiência em Consultoria, Tiago Rezeck ajuda empresários a organizar e expandir seus negócios por meio da gestão estratégica e do desenvolvimento de pessoas.
Tendo um MBA em Gestão Estratégica de Negócios, Graduado em Recursos Humanos e com formações em diversas áreas como Vendas, Marketing, Financeiro, Gestão Empresarial e Liderança.
Já participou da transformação de mais de 25 empresas e mais de 300 pessoas, sempre movido pelo propósito de despertar a energia que impulsiona o sucesso.
Inspirado em transformar vidas e empresas, criou a Metodologia COMET — um ecossistema de ASTROS, onde o líder é o Sol, que irradia a luz que guia os times como uma chuva de cometas, movidos por uma motivação ardente, em constante ascensão rumo a resultados extraordinários.</p>
              </div>
            </div>

            {/* Problema, Descoberta, Resultados - Cards Horizontais Compactos */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card border-l-4 border-primary rounded-lg p-5 shadow-card hover:shadow-comet transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">O Problema</h3>
                <p className="text-sm text-muted-foreground">Atuando como consultor, logo percebi que muitas empresas com grande potencial estavam estagnadas, donos sem clareza dos problemas, líderes despreparados, times desmotivados e processos caóticos, o que tornava os resultados imprevisíveis. </p>
              </div>

              <div className="bg-card border-l-4 border-primary rounded-lg p-5 shadow-card hover:shadow-comet transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">A Descoberta</h3>
                <p className="text-sm text-muted-foreground">
                Era preciso um sistema funcional que desenvolvesse as pessoas, para que elas desenvolvessem os processos e organizassem o negócio, gerando resultados previsíveis. Por isso, nasceu a <span className="text-primary font-semibold">Metodologia COMET</span>.
                </p>
              </div>

              <div className="bg-card border-l-4 border-primary rounded-lg p-5 shadow-card hover:shadow-comet transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">Os Resultados</h3>
                <p className="text-sm text-muted-foreground">
                 Em pouco tempo de existência, já <span className="text-primary font-semibold">transformamos empresas no Rio de Janeiro e em São Paulo,</span>. Mudando mentalidades, fortalecendo líderes e treinando times de alta performance.
                </p>
              </div>
            </div>

            {/* Quote Destacada - Mais Compacta */}
            <div className="bg-gradient-hero border-l-4 border-primary rounded-xl p-6 shadow-glow">
              <p className="text-lg md:text-xl italic text-foreground mb-3 text-center">
                "Empresas se transformam quando pessoas se desenvolvem: líderes preparados e times engajados fazem processos e resultados acontecerem."
              </p>
              <p className="text-sm text-muted-foreground text-center font-semibold">
                — Tiago Rezeck
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores COMET - Movido da Home */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Os Valores <span className="bg-gradient-comet bg-clip-text text-transparent">COMET</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada letra representa um pilar da nossa metodologia
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="grid grid-cols-7 gap-3 max-w-7xl mx-auto min-w-[800px]">
              {[{
              letter: 'C',
              value: 'Colaboração',
              desc: 'Trabalhamos juntos para alcançar objetivos comuns'
            }, {
              letter: 'O',
              value: 'Organização',
              desc: 'Estruturamos processos para máxima eficiência'
            }, {
              letter: 'M',
              value: 'Melhoria Contínua',
              desc: 'Evoluímos constantemente em busca da excelência'
            }, {
              letter: 'E',
              value: 'Excelência',
              desc: 'Buscamos o mais alto padrão em tudo que fazemos'
            }, {
              letter: 'T',
              value: 'Transformação',
              desc: 'Promovemos mudanças significativas e duradouras'
            }, {
              letter: 'A',
              value: 'Autonomia',
              desc: 'Desenvolvemos a capacidade de autogestão'
            }, {
              letter: 'S',
              value: 'Sinergia',
              desc: 'Criamos força através da união de talentos'
            }].map((item, index) => <div key={index} className="bg-card rounded-lg p-4 border border-border shadow-card hover:shadow-comet transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center">
                  <div className="text-4xl font-bold bg-gradient-comet bg-clip-text text-transparent mb-2">
                    {item.letter}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.value}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.desc}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Propósito */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[{
              icon: <Target className="h-12 w-12" />,
              title: 'Missão',
              content: 'Desenvolver pessoas, organizar empresas e transformar negócios para que alcancem novos níveis de desempenho e resultados.'
            }, {
              icon: <Eye className="h-12 w-12" />,
              title: 'Visão',
              content: 'Ser reconhecido como o principal parceiro de empresários na organização, crescimento e fortalecimento de seus negócios.'
            }, {
              icon: <Heart className="h-12 w-12" />,
              title: 'Propósito',
              content: 'Ser um cometa que acelera a transformação das empresas, impulsionando pessoas, líderes e organizações rumo a novos patamares.'
            }].map((item, index) => <div key={index} className="bg-card rounded-xl p-8 border border-border shadow-card hover:shadow-comet transition-all duration-300">
                  <div className="text-primary mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.content}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Nossos Diferenciais
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
              title: 'Experiência Prática',
              desc: 'Mais de 10 anos atuando diretamente com empresários e líderes, conhecendo profundamente os desafios do dia a dia empresarial.'
            }, {
              title: 'Resultados Comprovados',
              desc: 'Portfólio com mais de 20 empresas transformadas, com resultados mensuráveis e sustentáveis.'
            }, {
              title: 'Metodologia Própria',
              desc: 'A Metodologia COMET foi desenvolvida e refinada ao longo de anos, adaptando-se às necessidades específicas de cada empresa.'
            }, {
              title: 'Proximidade com o Cliente',
              desc: 'Acompanhamento próximo e personalizado, atuando como verdadeiros parceiros na jornada de transformação.'
            }, {
              title: 'Especialização em PMEs',
              desc: 'Foco exclusivo em pequenas e médias empresas em fase de crescimento, com soluções adaptadas às suas necessidades e realidades.'
            }, {
              title: 'Aprendizado Contínuo e Inovação',
              desc: 'Nosso método está em constante evolução, incorporando novas práticas de desenvolvimento humano e tecnológico para gerar resultados reais.'
            }].map((item, index) => <div key={index} className="bg-card rounded-lg p-6 border border-border shadow-card">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.desc}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Vamos Transformar Juntos?
              </h2>
              <p className="text-lg text-muted-foreground">
                Entre em contato e conheça mais sobre como podemos ajudar sua empresa
              </p>
            </div>
            <ContactForm title="Receba mais informações" buttonText="Quero saber mais" />
          </div>
        </div>
      </section>
    </div>;
};
export default Sobre;
