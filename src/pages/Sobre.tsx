import ContactForm from '@/components/ContactForm';
import { Award, Target, Eye, Heart } from 'lucide-react';
import tiagoRezeck from '@/assets/tiago-rezeck.png';
import sobreHero from '@/assets/hero/sobre-hero.jpg';

const Sobre = () => {
  return (
    <div className="min-h-screen">
      {/* Hero - Storytelling Emocional */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sobreHero})` }}
        >
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
                <img 
                  src={tiagoRezeck} 
                  alt="Tiago Rezeck - Fundador Instituto COMET" 
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Tiago Rezeck
                </h3>
                <p className="text-lg text-primary font-semibold">
                  Fundador • Especialista em DHO
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Com mais de 10 anos de experiência, ajuda empresários a organizar e expandir seus negócios por meio da gestão estratégica e do desenvolvimento de pessoas.Criador da Metodologia COMET, já transformou mais de 25 empresas e 250 pessoas, levando líderes e times à alta performance.
                </p>
              </div>
            </div>

            {/* Problema, Descoberta, Resultados - Cards Horizontais Compactos */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card border-l-4 border-primary rounded-lg p-5 shadow-card hover:shadow-comet transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">O Problema</h3>
                <p className="text-sm text-muted-foreground">
                  Empresas com potencial enorme, mas presas. Processos caóticos, times desmotivados, resultados imprevisíveis.
                </p>
              </div>

              <div className="bg-card border-l-4 border-primary rounded-lg p-5 shadow-card hover:shadow-comet transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">A Descoberta</h3>
                <p className="text-sm text-muted-foreground">
                  Era preciso um sistema que organizasse, desenvolvesse pessoas (DHO) e criasse resultados sustentáveis. Nasceu a <span className="text-primary font-semibold">Metodologia COMET</span>.
                </p>
              </div>

              <div className="bg-card border-l-4 border-primary rounded-lg p-5 shadow-card hover:shadow-comet transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">Os Resultados</h3>
                <p className="text-sm text-muted-foreground">
                  Mais de <span className="text-primary font-semibold">100 empresas transformadas</span>. Líderes que comandam times de alta performance.
                </p>
              </div>
            </div>

            {/* Quote Destacada - Mais Compacta */}
            <div className="bg-gradient-hero border-l-4 border-primary rounded-xl p-6 shadow-glow">
              <p className="text-lg md:text-xl italic text-foreground mb-3 text-center">
                "Não existe empresa forte sem pessoas fortes. E não existe transformação real sem organização e processos claros."
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
              {[
                { letter: 'C', value: 'Colaboração', desc: 'Trabalhamos juntos para alcançar objetivos comuns' },
                { letter: 'O', value: 'Organização', desc: 'Estruturamos processos para máxima eficiência' },
                { letter: 'M', value: 'Melhoria Contínua', desc: 'Evoluímos constantemente em busca da excelência' },
                { letter: 'E', value: 'Excelência', desc: 'Buscamos o mais alto padrão em tudo que fazemos' },
                { letter: 'T', value: 'Transformação', desc: 'Promovemos mudanças significativas e duradouras' },
                { letter: 'A', value: 'Autonomia', desc: 'Desenvolvemos a capacidade de autogestão' },
                { letter: 'S', value: 'Sinergia', desc: 'Criamos força através da união de talentos' },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-lg p-4 border border-border shadow-card hover:shadow-comet transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
                >
                  <div className="text-4xl font-bold bg-gradient-comet bg-clip-text text-transparent mb-2">
                    {item.letter}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.value}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Propósito */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="h-12 w-12" />,
                  title: 'Missão',
                  content: 'Desenvolver pessoas, organizar empresas e transformar negócios para que alcancem novos níveis de desempenho e resultados.',
                },
                {
                  icon: <Eye className="h-12 w-12" />,
                  title: 'Visão',
                  content: 'Ser reconhecido como o principal parceiro de empresários na organização, crescimento e fortalecimento de seus negócios.',
                },
                {
                  icon: <Heart className="h-12 w-12" />,
                  title: 'Propósito',
                  content: 'Ser um cometa que acelera a transformação das empresas, impulsionando pessoas, líderes e organizações rumo a novos patamares.',
                },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border shadow-card hover:shadow-comet transition-all duration-300"
                >
                  <div className="text-primary mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.content}
                  </p>
                </div>
              ))}
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
              {[
                {
                  title: 'Experiência Prática',
                  desc: 'Mais de 10 anos atuando diretamente com empresários e líderes, conhecendo profundamente os desafios do dia a dia empresarial.',
                },
                {
                  title: 'Resultados Comprovados',
                  desc: 'Portfólio com mais de 20 empresas transformadas, com resultados mensuráveis e sustentáveis.',
                },
                {
                  title: 'Metodologia Própria',
                  desc: 'A Metodologia COMET foi desenvolvida e refinada ao longo de anos, adaptando-se às necessidades específicas de cada empresa.',
                },
                {
                  title: 'Proximidade com o Cliente',
                  desc: 'Acompanhamento próximo e personalizado, atuando como verdadeiros parceiros na jornada de transformação.',
                },
                {
                  title: 'Especialização em PMEs',
                  desc: 'Foco exclusivo em pequenas e médias empresas em fase de crescimento, com soluções adaptadas às suas necessidades e realidades.',
                },
                {
                  title: 'Aprendizado Contínuo e Inovação',
                  desc: 'Nosso método está em constante evolução, incorporando novas práticas de desenvolvimento humano e tecnológico para gerar resultados reais.',
                },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border shadow-card"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
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
            <ContactForm 
              title="Receba mais informações"
              buttonText="Quero saber mais"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
