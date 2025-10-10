import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import sistekLogo from '@/assets/clients/client-1.png';
import refrimanosLogo from '@/assets/clients/client-2.png';
import farmacenterLogo from '@/assets/clients/client-3.png';
import beijaflorLogo from '@/assets/clients/client-4.png';

const clients = [
  {
    logo: sistekLogo,
    name: 'Sistek SP',
    sector: 'Tecnologia',
    description: 'Reestruturação organizacional completa com implementação de processos e desenvolvimento de liderança.',
    metric: 'Transformação completa',
  },
  {
    logo: refrimanosLogo,
    name: 'Refrimanos',
    sector: 'Refrigeração Industrial',
    description: 'Otimização de processos produtivos e estruturação de gestão estratégica para alta performance.',
    metric: 'Alta performance',
  },
  {
    logo: farmacenterLogo,
    name: 'Farmacenter',
    sector: 'Farmacêutico',
    description: 'Desenvolvimento de cultura organizacional e implementação de sistemas de gestão eficazes.',
    metric: 'Crescimento sustentável',
  },
  {
    logo: beijaflorLogo,
    name: 'Beija-Flor Agropecuária',
    sector: 'Agropecuário',
    description: 'Estruturação de processos e desenvolvimento de equipes de alta performance no campo.',
    metric: 'Eficiência operacional',
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
