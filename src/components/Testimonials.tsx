import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import avatar1 from '@/assets/testimonials/avatar-1.jpg';
import avatar2 from '@/assets/testimonials/avatar-2.jpg';
import avatar3 from '@/assets/testimonials/avatar-3.jpg';

const testimonials = [
  {
    photo: avatar1,
    quote: 'O Instituto COMET transformou completamente nossa gestão. Processos claros, time alinhado e resultados que superam nossas expectativas. A metodologia COMETAS é realmente diferenciada.',
    name: 'Carlos Eduardo Santos',
    role: 'CEO',
    company: 'TechSolutions Brasil',
    rating: 5,
  },
  {
    photo: avatar2,
    quote: 'Depois da consultoria, conseguimos aumentar nossa produtividade em 45% e reduzir conflitos internos. O Tiago tem uma visão estratégica impressionante e foco em resultados reais.',
    name: 'Mariana Costa',
    role: 'Diretora de RH',
    company: 'Indústria Moderna',
    rating: 5,
  },
  {
    photo: avatar3,
    quote: 'Investimento que se paga rapidamente. Em 3 meses já sentimos mudanças significativas na cultura da empresa e no engajamento do time. Recomendo fortemente!',
    name: 'Roberto Almeida',
    role: 'Fundador',
    company: 'Comércio Vanguarda',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de empresas que transformaram sua gestão com o Instituto COMET
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
