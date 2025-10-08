import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  compact?: boolean;
}

const ContactForm = ({ 
  title = "Dê o primeiro passo para transformar sua empresa", 
  subtitle = "Preencha o formulário e nosso time entrará em contato",
  buttonText = "Quero conversar com a COMET",
  compact = false
}: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Limpar formulário
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={`bg-card rounded-lg border border-border shadow-card ${compact ? 'p-6' : 'p-8'}`}>
      <div className="mb-6">
        <h3 className={`font-bold text-foreground mb-2 ${compact ? 'text-xl' : 'text-2xl'}`}>
          {title}
        </h3>
        {!compact && (
          <p className="text-muted-foreground text-sm">
            {subtitle}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Nome Completo *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Seu nome"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email">E-mail *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="seu@email.com"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone">WhatsApp *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(11) 99999-9999"
            className="mt-1"
          />
        </div>

        {!compact && (
          <div>
            <Label htmlFor="message">Conte-nos sobre sua empresa ou desafio</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva brevemente seu negócio e o que você busca..."
              rows={4}
              className="mt-1"
            />
          </div>
        )}

        <Button type="submit" variant="hero" size="lg" className="w-full">
          <Send className="mr-2 h-4 w-4" />
          {buttonText}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
