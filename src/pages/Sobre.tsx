import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Link } from 'react-router-dom';
import { Award, Target, Eye, Heart, Lightbulb, TrendingUp } from 'lucide-react';
import teamImage from '@/assets/team-performance.jpg';

const Sobre = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Sobre o <span className="bg-gradient-comet bg-clip-text text-transparent">Instituto COMET</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Mais de 10 anos transformando empresas e desenvolvendo líderes de alta performance
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  O Instituto COMET nasceu da paixão por transformar empresas e desenvolver pessoas. Fundado por <span className="text-foreground font-semibold">Tiago Rezeck</span>, consultor com mais de uma década de experiência no desenvolvimento de líderes e na implementação de processos de gestão eficazes.
                </p>
                <p>
                  Ao longo de sua trajetória, Tiago percebeu que muitas empresas enfrentavam os mesmos desafios: falta de organização, processos ineficientes, equipes desmotivadas e resultados inconsistentes. Foi dessa percepção que nasceu a <span className="text-primary font-semibold">Metodologia COMET</span>.
                </p>
                <p>
                  Hoje, o Instituto COMET é referência em consultoria empresarial, tendo impactado mais de <span className="text-primary font-semibold">20 empresas</span>, ajudando-as a se tornarem organizações sólidas, previsíveis e de alta performance.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={teamImage} 
                  alt="Equipe de alta performance" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia COMET */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Lightbulb className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-foreground mb-4">
                A Metodologia COMET
              </h2>
              <p className="text-xl text-muted-foreground">
                Um sistema completo e comprovado para transformação empresarial
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border shadow-card space-y-6">
              <p className="text-lg text-foreground">
                A Metodologia COMET é o resultado de anos de experiência prática em consultoria empresarial, combinando as melhores práticas de gestão com uma abordagem humanizada e personalizada.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Como funciona:</h3>
                <ul className="space-y-3">
                  {[
                    'Diagnóstico completo da situação atual da empresa',
                    'Mapeamento de processos e identificação de gargalos',
                    'Desenvolvimento de plano estratégico personalizado',
                    'Implementação gradual com acompanhamento constante',
                    'Capacitação de líderes e equipes',
                    'Monitoramento de resultados e ajustes contínuos',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-1 mt-1">
                        <div className="bg-primary rounded-full w-2 h-2"></div>
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-lg text-primary font-semibold">
                  Resultados comprovados: empresas mais organizadas, equipes engajadas e crescimento sustentável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
                title: 'Valores',
                content: 'Colaboração, Organização, Melhoria Contínua, Excelência, Transformação, Autonomia e Sinergia.',
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
