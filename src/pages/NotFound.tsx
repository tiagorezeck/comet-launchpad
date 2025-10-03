import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Search className="h-24 w-24 text-primary mx-auto mb-8" />
          <h1 className="text-8xl font-bold bg-gradient-comet bg-clip-text text-transparent mb-4">404</h1>
          <h2 className="text-4xl font-bold text-foreground mb-6">Página Não Encontrada</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Voltar para Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
