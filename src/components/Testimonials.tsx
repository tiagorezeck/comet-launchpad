import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import avatar1 from '@/assets/testimonials/avatar-1.jpg';
import avatar2 from '@/assets/testimonials/avatar-2.jpg';
import amanda from '@/assets/testimonials/amanda.jpg';
const testimonials = [{
  photo: avatar1,
  quote: 'O Instituto COMET transformou completamente nossa gestão. Processos claros, time alinhado e resultados que superam nossas expectativas. A metodologia COMETAS é realmente diferenciada.',
  name: 'Guilherme Garcia',
  role: 'Sócio - Diretor Executivo',
  company: 'Sistek It Service',
  rating: 5
}, {
  photo: avatar2,
  quote: 'Depois da consultoria, conseguimos aumentar nossa produtividade em 45% e reduzir conflitos internos. O Tiago tem uma visão estratégica impressionante e foco em resultados reais.',
  name: 'Paulo Barcelos',
  role: 'Analista de TI',
  company: 'Indústria Moderna',
  rating: 5
}, {
  photo: amanda,
  quote: 'Gostaria de destacar o impacto significativo que a consultoria do Tiago teve em minha atuação profissional na área de RH. Com sua orientação especializada, pude desenvolver uma visão mais ampla e assertiva, o que resultou em uma melhoria de 87% na seleção de novos colaboradores para a empresa. Além disso, tive a oportunidade de ser escolhida por ele em um processo seletivo competitivo, onde pude demonstrar minhas habilidades e competências. O treinamento em DISC foi particularmente valioso, pois me proporcionou ferramentas eficazes para análise e resolução de problemas de forma rápida e eficiente. Agradeço a oportunidade de ter trabalhado com ele e recomendo seus serviços para qualquer profissional que busque aprimorar suas habilidades e principalmente resultados.',
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
            Resultados reais de empresas que transformaram seus resultados com o Instituto COMET
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
