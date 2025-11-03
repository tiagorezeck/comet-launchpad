import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DiagnosticoPopupProps {
  onOpenChange?: (open: boolean) => void;
}

const desafios = [
  'Falta de dinheiro / fluxo de caixa',
  'Falta de clareza estratégica',
  'Sem metas e objetivos bem definidos',
  'Baixa produtividade operacional',
  'Baixa geração de leads',
  'Conversão comercial baixa',
  'Processos operacionais ineficientes',
  'Comportamento e engajamento da equipe (desmotivação)',
  'Contratações pouco assertivas',
  'Normas, compliance e regras internas',
  'Cultura empresarial fraca',
  'Falta de indicadores e métricas (KPIs)',
  'Atendimento ao cliente com baixa performance',
  'Marketing digital ineficaz / tráfego pago com pouco resultado',
  'Tecnologia defasada / sistemas desalinhados',
  'Retenção / rotatividade alta (turnover)',
  'Sem dados para fazer gestão',
  'Liderança despreparada e perdida',
];

export default function DiagnosticoPopup({ onOpenChange }: DiagnosticoPopupProps) {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [desafiosSelecionados, setDesafiosSelecionados] = useState<string[]>([]);
  const [outros, setOutros] = useState('');
  const [enviado, setEnviado] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Mostrar popup após 5 segundos
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    onOpenChange?.(false);
  };

  const handleDesafioToggle = (desafio: string) => {
    setDesafiosSelecionados(prev =>
      prev.includes(desafio)
        ? prev.filter(d => d !== desafio)
        : [...prev, desafio]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim() || !cargo.trim() || !whatsapp.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    if (desafiosSelecionados.length === 0 && !outros.trim()) {
      toast({
        title: "Selecione ao menos uma opção",
        description: "Por favor, marque pelo menos um desafio ou preencha o campo 'Outros'.",
        variant: "destructive",
      });
      return;
    }

    // Preparar mensagem para WhatsApp
    const desafiosTexto = [...desafiosSelecionados, outros ? `Outros: ${outros}` : '']
      .filter(Boolean)
      .map(d => `- ${d}`)
      .join('\n');

    const mensagem = `🔔 *Novo pedido de Diagnóstico — Mês da COMET*

*Nome:* ${nome}
*Cargo:* ${cargo}
*WhatsApp informado:* ${whatsapp}

*Desafios / Prioridades marcadas:*
${desafiosTexto}

(Enviado via pop-up "Mês da COMET" no site)`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://wa.me/5524999382195?text=${mensagemCodificada}`;

    // Abrir WhatsApp em nova aba
    window.open(urlWhatsApp, '_blank');

    setEnviado(true);
  };

  if (enviado) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-2xl bg-card border-2 border-primary/40 shadow-glow">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </button>

          <div className="text-center py-8 space-y-6">
            <div className="text-6xl mb-4">✅</div>
            <DialogTitle className="text-3xl font-bold text-foreground">
              Pronto! Seu pedido foi recebido.
            </DialogTitle>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Em até 48h, Tiago Rezeck entrará em contato pessoalmente via WhatsApp com seu diagnóstico gratuito.
            </p>
            <div className="pt-4">
              <p className="text-base text-muted-foreground">
                Enquanto isso, conheça nossos cases e conteúdos exclusivos aqui no site da COMET.
              </p>
            </div>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleClose}
              className="mt-4"
            >
              Conhecer mais sobre a COMET
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-2 border-primary/40 shadow-glow">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fechar</span>
        </button>

        <DialogHeader className="space-y-4 text-center pb-6">
          <div className="flex justify-center items-center gap-2 text-primary font-bold text-sm">
            <span className="text-2xl">🎂</span>
            <span>MÊS DA COMET</span>
          </div>
          
          <DialogTitle className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            🪐 Você entrou no nosso espaço — e acaba de ganhar um{' '}
            <span className="bg-gradient-comet bg-clip-text text-transparent">
              presente especial
            </span>
          </DialogTitle>

          <p className="text-xl font-semibold text-primary">
            🎁 Receba um Diagnóstico Empresarial Gratuito
          </p>

          <div className="text-base text-muted-foreground space-y-2 max-w-2xl mx-auto">
            <p>
              A COMET acredita que todo grande resultado começa com um bom diagnóstico.
            </p>
            <p>
              Descubra onde sua empresa pode evoluir e receba um presente que pode mudar seu negócio.
            </p>
            <p className="font-medium text-primary">
              Leva menos de 1 minuto para preencher.
            </p>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campos básicos */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-foreground">
                Nome completo <span className="text-primary">*</span>
              </Label>
              <Input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome completo"
                required
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cargo" className="text-foreground">
                Cargo / Função <span className="text-primary">*</span>
              </Label>
              <Input
                id="cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                placeholder="Ex: CEO, Gerente, Diretor"
                required
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-foreground">
                WhatsApp (com DDD) <span className="text-primary">*</span>
              </Label>
              <Input
                id="whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="(24) 99999-9999"
                required
                className="bg-background border-border"
              />
            </div>
          </div>

          {/* Desafios */}
          <div className="space-y-4">
            <Label className="text-lg font-semibold text-foreground">
              Quais são hoje as suas maiores dificuldades ou prioridades?
              <span className="text-sm font-normal text-muted-foreground ml-2">
                (Marque uma ou várias opções)
              </span>
            </Label>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {desafios.map((desafio) => (
                <div key={desafio} className="flex items-start space-x-2 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                  <Checkbox
                    id={desafio}
                    checked={desafiosSelecionados.includes(desafio)}
                    onCheckedChange={() => handleDesafioToggle(desafio)}
                    className="mt-0.5"
                  />
                  <label
                    htmlFor={desafio}
                    className="text-sm text-foreground leading-tight cursor-pointer"
                  >
                    {desafio}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Outros */}
          <div className="space-y-2">
            <Label htmlFor="outros" className="text-foreground">
              Outros desafios (opcional)
            </Label>
            <Textarea
              id="outros"
              value={outros}
              onChange={(e) => setOutros(e.target.value)}
              placeholder="Descreva outros desafios específicos..."
              className="bg-background border-border min-h-[80px]"
            />
          </div>

          {/* Botão de envio */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="text-lg font-bold animate-pulse hover:animate-none hover:scale-105 transition-transform"
            >
              💡 Quero meu presente da COMET
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
