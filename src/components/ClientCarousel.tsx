import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const clients = [
  {
    logo: '/src/assets/clients/client-1.png',
    name: 'TechSolutions Brasil',
    sector: 'Tecnologia da Informação',
    description: 'Reestruturação organizacional completa resultou em times alinhados e processos otimizados.',
    metric: '45% ↑ produtividade',
  },
  {
    logo: '/src/assets/clients/client-2.png',
    name: 'Indústria Moderna Ltda',
    sector: 'Manufatura e Indústria',
    description: 'Implementação de metodologia COMET transformou a cultura organizacional e engajamento.',
    metric: '60% ↑ engajamento',
  },
  {
    logo: '/src/assets/clients/client-3.png',
    name: 'Comércio Vanguarda',
    sector: 'Varejo e E-commerce',
    description: 'Treinamento corporativo elevou as competências do time de vendas e liderança.',
    metric: '35% ↑ vendas',
  },
  {
    logo: '/src/assets/clients/client-4.png',
    name: 'Serviços Premium',
    sector: 'Consultoria e Serviços',
    description: 'Mentoria estratégica focada em crescimento sustentável e expansão de mercado.',
    metric: '50% ↑ receita',
  },
  {
    logo: '/src/assets/clients/client-5.png',
    name: 'Saúde Integrada',
    sector: 'Saúde e Bem-estar',
    description: 'Desenvolvimento de lideranças e processos de gestão para escala operacional.',
    metric: '40% ↑ eficiência',
  },
];

const ClientCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
    },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {clients.map((client, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="space-y-4">
                  {/* Logo */}
                  <div className="h-20 flex items-center justify-center bg-background/50 rounded-lg p-4">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  {/* Company Info */}
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {client.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {client.sector}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {client.description}
                  </p>

                  {/* Metric */}
                  <div className="flex items-center gap-2 text-primary pt-2 border-t border-border">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-semibold text-sm">
                      {client.metric}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-2 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ClientCarousel;
