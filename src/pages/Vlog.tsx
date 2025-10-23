import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { Video, Play, TrendingUp, Users, Target, Lightbulb, Youtube, Instagram } from 'lucide-react';
import { useState } from 'react';
import vlogHero from '@/assets/hero/vlog-hero.jpg';

const Vlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Liderança', 'Gestão', 'Alta Performance', 'Processos', 'Cultura'];

  const videos = [
    {
      id: 1,
      title: 'Como Desenvolver Líderes de Alta Performance',
      category: 'Liderança',
      description: 'Descubra as 5 competências essenciais que todo líder precisa dominar para alcançar resultados extraordinários.',
      thumbnail: 'https://www.youtube.com/watch?v=sWp7FYbCnjo&t=25s,
      duration: '12:34',
      views: '2.5K',
      icon: <Users className="h-6 w-6" />,
    },
    {
      id: 2,
      title: 'Mapeamento de Processos: Por Onde Começar',
      category: 'Processos',
      description: 'Um guia prático para iniciar o mapeamento de processos na sua empresa e ganhar eficiência operacional.',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      duration: '15:20',
      views: '3.1K',
      icon: <Target className="h-6 w-6" />,
    },
    {
      id: 3,
      title: '3 Erros Fatais na Gestão de Empresas',
      category: 'Gestão',
      description: 'Evite os erros mais comuns que impedem empresas de crescer e descubra como superá-los.',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      duration: '10:45',
      views: '4.2K',
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      id: 4,
      title: 'Como Criar uma Cultura de Alta Performance',
      category: 'Cultura',
      description: 'Estratégias comprovadas para transformar a cultura da sua empresa e engajar times.',
      thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
      duration: '18:15',
      views: '3.8K',
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      id: 5,
      title: 'Indicadores de Performance: O Que Medir',
      category: 'Alta Performance',
      description: 'Aprenda quais KPIs são essenciais para monitorar a saúde do seu negócio e tomar decisões estratégicas.',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      duration: '14:30',
      views: '2.9K',
      icon: <Target className="h-6 w-6" />,
    },
    {
      id: 6,
      title: 'Liderança Situacional: Adaptando seu Estilo',
      category: 'Liderança',
      description: 'Como adaptar seu estilo de liderança para diferentes situações e colaboradores.',
      thumbnail: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800',
      duration: '16:00',
      views: '3.5K',
      icon: <Users className="h-6 w-6" />,
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
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary rounded-full p-4 group-hover:scale-110 transition-transform shadow-glow">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded">
                      {video.duration}
                    </div>

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

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{video.views} visualizações</span>
                    </div>

                    <Button variant="comet" size="sm" className="w-full" asChild>
                      <a href="#contact-form">
                        Gostou? Vamos aplicar no seu negócio
                      </a>
                    </Button>
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
    </div>
  );
};

export default Vlog;
