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
const desafios = ['Falta de dinheiro / fluxo de caixa', 'Falta de clareza estratégica', 'Sem metas e objetivos bem definidos', 'Baixa produtividade operacional', 'Baixa geração de leads', 'Conversão comercial baixa', 'Processos operacionais ineficientes', 'Comportamento e engajamento da equipe (desmotivação)', 'Contratações pouco assertivas', 'Normas, compliance e regras internas', 'Cultura empresarial fraca', 'Falta de indicadores e métricas (KPIs)', 'Atendimento ao cliente com baixa performance', 'Marketing digital ineficaz / tráfego pago com pouco resultado', 'Tecnologia defasada / sistemas desalinhados', 'Retenção / rotatividade alta (turnover)', 'Sem dados para fazer gestão', 'Liderança despreparada e perdida'];
export default function DiagnosticoPopup({
  onOpenChange
}: DiagnosticoPopupProps) {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [desafiosSelecionados, setDesafiosSelecionados] = useState<string[]>([]);
  const [outros, setOutros] = useState('');
  const [enviado, setEnviado] = useState(false);
  const {
    toast
  } = useToast();
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
    setDesafiosSelecionados(prev => prev.includes(desafio) ? prev.filter(d => d !== desafio) : [...prev, desafio]);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !cargo.trim() || !whatsapp.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    if (desafiosSelecionados.length === 0 && !outros.trim()) {
      toast({
        title: "Selecione ao menos uma opção",
        description: "Por favor, marque pelo menos um desafio ou preencha o campo 'Outros'.",
        variant: "destructive"
      });
      return;
    }

    // Preparar mensagem para WhatsApp
    const desafiosTexto = [...desafiosSelecionados, outros ? `Outros: ${outros}` : ''].filter(Boolean).map(d => `- ${d}`).join('\n');
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
    return <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-2xl bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 border border-primary/30 shadow-[0_0_80px_rgba(139,92,246,0.4)]">
          {/* Starfield background effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-1 h-1 bg-white rounded-full top-[15%] left-[25%] animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white rounded-full top-[35%] left-[75%] animate-pulse" style={{
            animationDelay: '0.5s'
          }}></div>
            <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[65%] left-[20%] animate-pulse" style={{
            animationDelay: '1s'
          }}></div>
            <div className="absolute w-1 h-1 bg-primary/60 rounded-full top-[50%] left-[85%] animate-pulse blur-sm" style={{
            animationDelay: '0.8s'
          }}></div>
          </div>

          <button onClick={handleClose} className="absolute right-3 top-3 rounded-full p-1.5 bg-white/10 backdrop-blur-sm opacity-70 hover:opacity-100 hover:bg-white/20 transition-all z-50 border border-white/20">
            <X className="h-4 w-4 text-white" />
            <span className="sr-only">Fechar</span>
          </button>

          <div className="text-center py-8 space-y-5 relative">
            <div className="text-6xl mb-2">✅</div>
            <DialogTitle className="text-3xl font-bold text-white">
              Pronto! Seu pedido foi recebido.
            </DialogTitle>
            <p className="text-base text-gray-300 max-w-xl mx-auto">
              Em até 48h, Tiago Rezeck entrará em contato pessoalmente via WhatsApp com seu diagnóstico gratuito.
            </p>
            <div className="pt-2">
              <p className="text-sm text-gray-400">
                Enquanto isso, conheça nossos cases e conteúdos exclusivos aqui no site da COMET.
              </p>
            </div>
            <Button variant="hero" size="lg" onClick={handleClose} className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all border-0">
              Conhecer mais sobre a COMET
            </Button>
          </div>
        </DialogContent>
      </Dialog>;
  }
  return <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 border border-primary/30 shadow-[0_0_80px_rgba(139,92,246,0.3)]">
        {/* Starfield background effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[20%] animate-pulse"></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[30%] left-[80%] animate-pulse" style={{
          animationDelay: '0.5s'
        }}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[60%] left-[15%] animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[80%] left-[70%] animate-pulse" style={{
          animationDelay: '1.5s'
        }}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[20%] left-[50%] animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute w-1 h-1 bg-primary/60 rounded-full top-[40%] left-[90%] animate-pulse blur-sm" style={{
          animationDelay: '0.3s'
        }}></div>
          <div className="absolute w-1 h-1 bg-primary/60 rounded-full top-[70%] left-[30%] animate-pulse blur-sm" style={{
          animationDelay: '1.2s'
        }}></div>
        </div>

        <button onClick={handleClose} className="absolute right-3 top-3 rounded-full p-1.5 bg-white/10 backdrop-blur-sm opacity-70 hover:opacity-100 hover:bg-white/20 transition-all z-50 border border-white/20">
          <X className="h-4 w-4 text-white" />
          <span className="sr-only">Fechar</span>
        </button>

        <div className="relative overflow-y-auto max-h-[90vh] px-6 py-4 space-y-4">
          <DialogHeader className="space-y-2 text-center">
            <div className="flex justify-center items-center gap-2 font-bold text-xs">
              <span className="text-xl">🎂</span>
              <span className="text-primary">MÊS DA COMET</span>
            </div>
            
            <DialogTitle className="text-2xl md:text-3xl font-bold text-white leading-tight">
              🪐 Você entrou no nosso espaço — ganhe um{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                presente especial
              </span>
            </DialogTitle>

            <p className="text-base font-semibold text-primary text-center">
              🎁 Diagnóstico Empresarial Gratuito
            </p>

            <div className="text-sm text-gray-300 space-y-1 max-w-2xl mx-auto">
              <p className="text-justify">
                Todo grande resultado começa com um bom diagnóstico. Descubra onde sua empresa pode evoluir.
              </p>
              <p className="font-medium text-primary text-xs">
                ⏱️ Menos de 1 minuto
              </p>
            </div>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Campos básicos */}
            <div className="grid md:grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="nome" className="text-white text-sm">
                  Nome completo <span className="text-primary">*</span>
                </Label>
                <Input id="nome" value={nome} onChange={e => setNome(e.target.value)} placeholder="Seu nome" required className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/30 h-9" />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="cargo" className="text-white text-sm">
                  Cargo <span className="text-primary">*</span>
                </Label>
                <Input id="cargo" value={cargo} onChange={e => setCargo(e.target.value)} placeholder="Ex: CEO, Gerente" required className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/30 h-9" />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="whatsapp" className="text-white text-sm">
                  WhatsApp <span className="text-primary">*</span>
                </Label>
                <Input id="whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="(24) 99999-9999" required className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/30 h-9" />
              </div>
            </div>

            {/* Desafios */}
            <div className="space-y-2.5">
              <Label className="text-base font-semibold text-white">
                Maiores dificuldades ou prioridades?
                <span className="text-xs font-normal text-gray-400 ml-2">
                  (marque quantas quiser)
                </span>
              </Label>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                {desafios.map(desafio => <div key={desafio} className="flex items-start space-x-2 p-2 rounded-md bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all backdrop-blur-sm">
                    <Checkbox id={desafio} checked={desafiosSelecionados.includes(desafio)} onCheckedChange={() => handleDesafioToggle(desafio)} className="mt-0.5 border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                    <label htmlFor={desafio} className="text-xs text-gray-200 leading-tight cursor-pointer">
                      {desafio}
                    </label>
                  </div>)}
              </div>
            </div>

            {/* Outros */}
            <div className="space-y-1.5">
              <Label htmlFor="outros" className="text-white text-sm">
                Outros desafios (opcional)
              </Label>
              <Textarea id="outros" value={outros} onChange={e => setOutros(e.target.value)} placeholder="Descreva outros desafios..." className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/30 min-h-[60px] resize-none" />
            </div>

            {/* Botão de envio */}
            <div className="flex justify-center pt-2">
              <Button type="submit" variant="hero" size="lg" className="text-base font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all border-0">
                💡 Quero meu presente da COMET
              </Button>
            </div>
          </form>
        </div>

        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(139, 92, 246, 0.5);
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(139, 92, 246, 0.7);
          }
        `}</style>
      </DialogContent>
    </Dialog>;
}