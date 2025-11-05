import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Video, TrendingUp, Users, Target, Lightbulb, Youtube, Instagram, X } from 'lucide-react';
import { useState } from 'react';
import vlogHero from '@/assets/hero/vlog-hero.jpg';
import mandela from '@/assets/hero/mandela.png';
import sinergia from '@/assets/hero/sinergia.png';

const Vlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);

  const categories = ['Todos', 'Liderança', 'Gestão', 'Alta Performance', 'Processos', 'Cultura'];

  const videos = [
    {
      id: 1,
      videoId: 'r2OufFGKCfI',
      youtubeUrl: 'https://www.youtube.com/watch?v=r2OufFGKCfI',
      title: 'Exemplo de liderança (Mandela)',
      category: 'Liderança',
      description:
        'Aprenda com Nelson Mandela os princípios fundamentais de liderança inspiradora que transformam equipes e organizações.',
      thumbnail: mandela,
      icon: <Users className="h-6 w-6" />,
    },
    {
      id: 2,
      videoId: 'ounvyEof0hU',
      youtubeUrl: 'https://www.youtube.com/watch?v=ounvyEof0hU',
      title: 'Disciplina (Bernardinho)',
      category: 'Liderança',
      description:
        'Disciplina: insights práticos sobre consistência e construção de resultados a partir da rotina e do treino disciplinado.',
      thumbnail: 'https://img.youtube.com/vi/ounvyEof0hU/maxresdefault.jpg',
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      id: 3,
      videoId: 'dujBDi10ZNk',
      youtubeUrl: 'https://www.youtube.com/watch?v=dujBDi10ZNk',
      title: 'Sinergia - como unir forças no time',
      category: 'Cultura',
      description:
        'Como criar sinergia efetiva entre equipes e alcançar resultados que vão além da soma individual dos esforços.',
      thumbnail: sinergia,
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      id: 4,
      videoId: 'qUeYnJlUFJw',
      youtubeUrl: 'https://www.youtube.com/watch?v=qUeYnJlUFJw',
      title: 'Cultura',
      category: 'Cultura Organizacional',
      description: 'Entenda os tipos de cultura organizacional e como elas impactam o desempenho e engajamento dos colaboradores.',
      thumbnail: 'https://img.youtube.com/vi/qUeYnJlUFJw/maxresdefault.jpg',
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      id: 5,
      videoId: 'mcQYKxmR1DE',
      youtubeUrl: 'https://www.youtube.com/watch?v=mcQYKxmR1DE',
      title: 'Erros na gestão',
      category: 'Gestão',
      description: 'Identifique e corrija os erros mais comuns na gestão empresarial que impedem o crescimento sustentável.',
      thumbnail: 'https://img.youtube.com/vi/mcQYKxmR1DE/maxresdefault.jpg',
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      id: 6,
      videoId: 'ejO_TBUWnPE',
      youtubeUrl: 'https://www.youtube.com/watch?v=ejO_TBUWnPE',
      title: 'KPIs',
      category: 'Alta Performance',
      description: 'Aprenda a definir e usar indicadores-chave de performance para monitorar resultados e tomar decisões estratégicas.',
      thumbnail: 'https://img.youtube.com/vi/ejO_TBUWnPE/maxresdefault.jpg',
      icon: <Target className="h-6 w-6" />,
    },
  ];

  const filteredVideos = selectedCategory === 'Todos' 
    ? videos 
    : videos.filter(v => v.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${vlogHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Video className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Vlog <span className="bg-gradient-comet bg-clip-text text-transparent">COMET</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Aulas e dicas práticas sobre liderança, gestão e alta performance
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <Button variant="comet" size="lg" asChild>
                <a 
                  href="https://www.youtube.com/@institutocomet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Youtube className="h-5 w-5" />
                  Inscreva-se no YouTube
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://www.instagram.com/tiagorezeckcomet/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  Siga no Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-comet text-white shadow-comet'
                      : 'bg-card text-foreground hover:bg-muted border border-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vídeos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <div 
                  key={video.id}
                  className="bg-card rounded-xl border border-border shadow-card hover:shadow-comet transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                >
                  {/* Thumbnail */}
                  <div 
                    className="relative aspect-video overflow-hidden bg-muted cursor-pointer"
                    onClick={() => setOpenVideoId(video.videoId)}
                  >
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <div className="bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {video.category}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-primary flex-shrink-0 mt-1">
                        {video.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {video.description}
                    </p>

                    <div className="flex flex-col gap-2">
                      <Button 
                        variant="comet" 
                        size="sm" 
                        className="w-full"
                        onClick={() => setOpenVideoId(video.videoId)}
                      >
                        Assistir Vídeo
                      </Button>
                      
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a 
                          href={video.youtubeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Youtube className="h-4 w-4" />
                          Assistir no YouTube
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">
                  Nenhum vídeo encontrado nesta categoria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Transforme Conhecimento em <span className="bg-gradient-comet bg-clip-text text-transparent">Resultados</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Gostou do conteúdo? Imagine o impacto que essas estratégias podem ter quando aplicadas de forma estruturada na sua empresa.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact-form">
                Quero implementar essas estratégias na minha empresa
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter & Contact */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Receba Novos <span className="bg-gradient-comet bg-clip-text text-transparent">Conteúdos</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Cadastre-se para receber notificações sobre novos vídeos e conteúdos exclusivos
              </p>
            </div>
            <ContactForm 
              title="Cadastre-se para receber atualizações"
              buttonText="Quero receber conteúdos"
              compact={true}
            />
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={!!openVideoId} onOpenChange={() => setOpenVideoId(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-[80vh] p-0">
          <div className="w-full h-full">
            {openVideoId && (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${openVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Vlog;
