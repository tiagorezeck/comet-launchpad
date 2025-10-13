import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from 'lucide-react';
import cometIcon from '/comet-logo.png';
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={cometIcon} alt="Instituto COMET Logo" className="h-20 w-auto transition-transform hover:scale-110" />
            </Link>
            <p className="text-muted-foreground mb-4 text-justify text-sm">
              Especialistas em Desenvolvimento Humano e Organizacional, 
              focados em transformar empresas em fase de crescimento.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/tiagorezeckcomet/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@institutocomet" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/tiagorezeck/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portfólio
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Consultoria Empresarial</li>
              <li className="text-sm text-muted-foreground">Mentoria Estratégica</li>
              <li className="text-sm text-muted-foreground">Treinamentos Corporativos</li>
              <li className="text-sm text-muted-foreground">Cursos Online</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span>contato@institutocomet.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span>(24) 99938-2195</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span>Rio de Janeiro - RJ - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Instituto COMET. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;