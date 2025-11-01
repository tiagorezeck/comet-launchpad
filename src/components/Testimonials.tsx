import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import guilherme from '@/assets/testimonials/guilherme.jpg';
import guto from '@/assets/testimonials/guto.jpg';
import amanda from '@/assets/testimonials/amanda.jpg';
const testimonials = [{
  photo: guilherme,
  quote: 'A consultoria chegou em um momento delicado para a Sistek, durante uma grande reformulação interna. Ajustamos processos, implantamos novos métodos organizacionais e estruturamos regras claras que trouxeram disciplina e um novo padrão de funcionamento. No início houve resistência e até algumas baixas, mas com o tempo o time compreendeu a importância das mudanças e passou a se engajar, refletindo em mais clareza, organização e resultados consistentes. Na mentoria de gestão, enfrentei meu maior desafio: deixar o papel técnico e aprender a agir como gestor. Foi um processo profundo, mudança de mentalidade, aprender a delegar, toamr decisões com mais estratégia e desenvolver minha liderança através do autoconhecimento. Sou muito grato ao Rezeck pelo impacto que esse trabalho trouxe. Recomendo a quem busca evoluir como gestor e transformar sua empresa de forma verdadeira e duradoura.',
  name: 'Guilherme Garcia',
  role: 'Sócio - Diretor Executivo',
  company: 'Sistek It Servicet',
  rating: 5
}, {
  photo: guto,
  quote: 'A consultoria foi um verdadeiro divisor de águas para a nossa farmácia. Quando o Tiago chegou, enfrentávamos desafios típicos do varejo: Sem metas claras, time desmotivado, atendimento irregular, vendas sem previsibilidade, e resultados abaixo do esperado. Com o acompanhamento próximo e o treinamento de vendas, começamos a ver uma transformação real, tanto na postura do time quanto nos resultados do negócio. As vendas cresceram de forma consistente, o atendimento se tornou mais profissional e a satisfação dos clientes aumentou. Além disso, com a orientação da consultoria, realizamos a contratação de uma colaboradora estratégica, que fortaleceu ainda mais nossa operação e ajudou a manter o ritmo de crescimento. Recomendo o trabalho do Tiago Rezeck a qualquer empresa do varejo que queira fortalecer seu time, aprimorar processos e alcançar resultados reais. Um trabalho comprometido, humano e que deixa um legado duradouro.',
  name: 'Guto',
  role: 'Gerente',
  company: 'Farmacenter',
  rating: 5
}, {
  photo: amanda,
  quote: '"Gostaria de destacar o impacto significativo que a consultoria do Rezeck teve em minha atuação profissional na área de RH. Com sua orientação especializada, pude desenvolver uma visão mais ampla e assertiva, o que resultou em uma melhoria de 87% na seleção de novos colaboradores para a empresa. Além disso, tive a oportunidade de ser escolhida por ele em um processo seletivo competitivo, onde pude demonstrar minhas habilidades e competências. O treinamento em Analista Comportamental DISC me proporcionou entender melhor o comportamento das pessoas, transformando essa compreensão em uma ferramenta prática e eficiente para analisar perfis e resolver problemas de forma ágil. Agradeço a oportunidade de ter trabalhado com ele nesse período e recomendo seus serviços para qualquer profissional que busque aprimorar suas competências e principalmente melhorar seus resultados.',
  name: 'Amanda Gomes',
  role: 'Analista de RH',
  company: 'Sistek It Service',
  rating: 5
}];
const Testimonials = () => {
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Histórias de Transformações Reais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de profissionais que transformaram sua mentalidade, competência e performance com o Instituto COMET
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>

                {/* Quote */}
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img src={testimonial.photo} alt={testimonial.name} className="h-24 w-24 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-foreground text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;
