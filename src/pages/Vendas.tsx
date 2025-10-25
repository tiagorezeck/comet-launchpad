import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { GraduationCap, Video, Users, Wrench, ShoppingCart, FileText } from 'lucide-react';
import vendasHero from '@/assets/hero/vendas-hero.jpg';
const Vendas = () => {
  const products = [{
    icon: <Video className="h-12 w-12" />,
    category: 'Mentoria Online',
    title: 'Mentoria Individual de Gestão e Liderança',
    description: 'Acompanhamento personalizado para empresários e líderes que desejam desenvolver uma gestão sólida, estratégica e humana. Voltada para quem busca clareza, foco e resultados consistentes, a mentoria trabalha autoconhecimento, liderança de times, gestão de processos e desenvolvimento de competências essenciais para alcançar alta performance.',
    benefits: ['Encontros individuais e personalizados', 'Diagnóstico do perfil comportamental', 'Ferramentas práticas de liderança e gestão', 'Plano de ação estratégico com metas claras', 'Suporte e acompanhamento entre as sessões'],
    price: 'Sob consulta'
  }, {
    icon: <GraduationCap className="h-12 w-12" />,
    category: 'Cursos Online',
    title: 'Aulas por Vídeo conferência',
    description: 'Cursos entregues totalmente online, ao vivo, por videoconferência com professores experientes. Permitem interação em tempo real, esclarecimento de dúvidas, aplicação prática e aprendizado imediato, garantindo engajamento e resultados para cada participante.',
    benefits: ['Formando um Time Forte (contratação de talentos)', 'Análise de Perfil Comportamental (ferramentas Assessment)', 'Comunicação Assertiva (impacto e influência)', 'Equilíbrio Emocional', 'Vendas e Negociação', 'Liderança Transformadora'],
    price: 'Sob consulta'
  }, {
    icon: <Users className="h-12 w-12" />,
    category: 'Treinamentos In Company',
    title: 'Formação de Times de Alta Performance',
    description: 'Programa presencial customizado para capacitar seu time, alinhado à cultura da empresa e às necessidades da equipe. Desenvolve habilidades técnicas e comportamentais, melhora produtividade, engajamento e colaboração, e gera resultados concretos para o negócio.',
    benefits: ['Levantamento de Necessidade de Treinamento (LNT)', 'Treinamentos comportamentais: equilíbrio emocional, motivação, alta produtividade', 'Treinamentos técnicos: vendas, negociação, formação de times, análise de perfil', 'Facilitadores experientes', 'Metodologias ativas', 'Acompanhamento pós-treinamento'],
    price: 'Sob consulta'
  }, {
    icon: <Wrench className="h-12 w-12" />,
    category: 'Kit Palestrante / Treinador',
    title: 'Templantes e Palestras',
    description: 'Pacote completo com materiais profissionais para quem deseja ministrar palestras, treinamentos e workshops com impacto e autoridade. Recursos visuais e práticos prontos para uso e personalização, economizando tempo e elevando a qualidade das suas apresentações.',
    benefits: ['Mais de 150 palestras prontas para adaptação', 'Slides animados de alto impacto', 'Mockups profissionais', 'Mais de 1000 templates editáveis', 'Infográficos para apresentações', 'Modelos de roteiros e planos de aula', 'Templates de divulgação e marketing', 'Checklists e materiais de apoio', 'Guias de estrutura de palestras', 'Recursos prontos para personalização e uso imediato'],
    price: 'Sob consulta'
  }, {
    icon: <Wrench className="h-12 w-12" />,
    category: 'Ferramentas de Gestão',
    title: 'Kit Completo de Templates',
    description: 'Modelos e ferramentas prontas para facilitar a gestão da sua empresa. Materiais práticos e editáveis que otimizam processos, aumentam o controle das operações e trazem mais clareza na tomada de decisão, economizando tempo e melhorando resultados.',
    benefits: ['Templates Editáveis', 'Modelos de Documentos', 'Planilhas de Vendas', 'Planilhas Financeiras', 'Planilhas de RH', 'Controle de Estoque', 'Planilhas de KPIs', 'Indicadores de Desempenho', 'Normas e Procedimentos Operacionais', 'Outros milhares de modelos'],
    price: 'Sob consulta'
  }, {
    icon: <Wrench className="h-12 w-12" />,
    category: 'Ferramentas de Análise de Perfil',
    title: 'Pessoal e Profissional',
    description: 'Ferramentas exclusivas para mapear perfis, competências e emoções com precisão. Nossos testes oferecem análises detalhadas que ajudam líderes e equipes a compreenderem seus comportamentos, aprimorarem relacionamentos e potencializarem resultados individuais e coletivos.',
    benefits: ['Teste DISC com análise detalhada', 'Teste de Perfil Mental', 'Teste de Quociente de Positividade (QP)', 'Teste de Sabotadores', 'Teste de Inteligência Emocional', 'Teste de Competências Profissionais', 'Relatórios completos e personalizados', 'Interpretação com especialista', 'Feedback individual', 'Plano de desenvolvimento pessoal'],
    price: 'Sob consulta'
  }];
  return <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${vendasHero})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
              {products.map((product, index) => <div key={index} className="bg-card rounded-xl border border-border shadow-card hover:shadow-comet transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
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
                    <p className="text-muted-foreground mb-6 text-justify text-sm">
                      {product.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-6 flex-1">
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        O que você recebe:
                      </h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, idx) => <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                              <div className="bg-primary rounded-full w-1.5 h-1.5"></div>
                            </div>
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>)}
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
                </div>)}
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
              {[{
              title: 'Pacote Ferramentas',
              description: 'Ideal para empresários que estão estruturando sua gestão e querem aplicar soluções práticas, modelos prontos e ferramentas que otimizam tempo e aumentam a eficiência do negócio.',
              includes: ['Ferramentas de Gestão', 'Kit Palestrante & Treinador', 'Ferramentas de Análise de Perfil Comportamental'],
              highlight: 'Economia de 33%'
            }, {
              title: 'Pacote Treinamento',
              description: 'Desenvolva seu time com três treinamentos personalizados, focados em desempenho, engajamento e resultados, aplicáveis diretamente na rotina da operação.',
              includes: ['3 Treinamentos In Company à sua escolha', 'Conteúdo adaptado à realidade da empresa', 'Metodologias ativas e práticas', 'Acompanhamento pós-treinamento'],
              highlight: 'Economia de 40%'
            }].map((pack, index) => <div key={index} className="bg-card rounded-xl border-2 border-primary shadow-comet p-8">
                  <div className="mb-6">
                    <div className="inline-block bg-gradient-comet text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                      {pack.highlight}
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {pack.title}
                    </h3>
                    <p className="text-muted-foreground text-justify text-sm">
                      {pack.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      O que inclui:
                    </h4>
                    <ul className="space-y-2">
                      {pack.includes.map((item, idx) => <li key={idx} className="flex items-start gap-2">
                          <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>)}
                    </ul>
                  </div>

                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href="#contact-form">
                      Solicitar Proposta
                    </a>
                  </Button>
                </div>)}
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
                Preencha o formulário e nosso time enviará detalhes completos sobre preços e condições
              </p>
            </div>
            <ContactForm title="Quero saber mais sobre produtos e cursos" buttonText="Enviar solicitação" />
          </div>
        </div>
      </section>
    </div>;
};
export default Vendas;
