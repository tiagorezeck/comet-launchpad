import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Link } from 'react-router-dom';
import { Award, Target, Eye, Heart, Lightbulb, TrendingUp } from 'lucide-react';
import tiagoRezeck from '@/assets/tiago-rezeck.png';

const Sobre = () => {
  return (
    <div className="min-h-screen">
      {/* Hero - Storytelling Emocional */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
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

      {/* A Jornada - Simples e Impactante */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Foto + História */}
            <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
              <div className="lg:col-span-2">
                  <div className="sticky top-8">
                    <div className="rounded-2xl overflow-hidden shadow-glow mb-6">
                      <img 
                        src={tiagoRezeck} 
                        alt="Tiago Rezeck - Fundador Instituto COMET" 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground">Tiago Rezeck</h3>
                    <p className="text-muted-foreground">Fundador • Mais de 10 anos transformando empresas</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 space-y-8">
                {/* História em 3 blocos emocionais */}
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6 space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">O Problema</h3>
                    <p className="text-lg text-muted-foreground">
                      Empresas com potencial enorme, mas presas. Processos caóticos, times desmotivados, resultados imprevisíveis. O mesmo padrão se repetia em dezenas de negócios.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6 space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">A Descoberta</h3>
                    <p className="text-lg text-muted-foreground">
                      Não bastava dar conselhos. Era preciso um sistema que organizasse, desenvolvesse pessoas (DHO) e criasse resultados sustentáveis. Nasceu a <span className="text-primary font-semibold">Metodologia COMET</span>.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6 space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">Os Resultados</h3>
                    <p className="text-lg text-muted-foreground">
                      Mais de <span className="text-primary font-semibold">20 empresas transformadas</span>. Líderes que antes estavam perdidos hoje comandam times de alta performance. Negócios que eram imprevisíveis agora crescem de forma sólida e sustentável.
                    </p>
                  </div>
                </div>

                {/* Quote Destacada */}
                <div className="bg-card border-l-4 border-primary rounded-lg p-8 shadow-card">
                  <p className="text-xl italic text-foreground mb-4">
                    "Não existe empresa forte sem pessoas fortes. E não existe transformação real sem organização e processos claros."
                  </p>
                  <p className="text-sm text-muted-foreground">— Tiago Rezeck</p>
                </div>
              </div>
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

            <div className="grid md:grid-cols-2 gap-6">
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
