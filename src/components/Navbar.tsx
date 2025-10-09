import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cometIcon from '/comet-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Vendas', path: '/vendas' },
    { name: 'Parceiros', path: '/parceiros' },
    { name: 'Vlog', path: '/vlog' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={cometIcon} 
              alt="Instituto COMET" 
              className="h-14 w-14 transition-transform group-hover:scale-110" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <a 
                href="https://wa.me/5524999382195?text=Quero%20agendar%20uma%20reunião%20e%20ter%20um%20diagnóstico"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende uma Reunião
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-2 animate-in slide-in-from-top">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a 
                  href="https://wa.me/5524999382195?text=Quero%20agendar%20uma%20reunião%20e%20ter%20um%20diagnóstico"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  Agende uma Reunião
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
