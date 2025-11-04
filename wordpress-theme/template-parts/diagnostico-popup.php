<?php
/**
 * Template Part: Popup de Diagnóstico Gratuito
 * 
 * @package COMET
 */

$whatsapp = get_theme_mod('comet_whatsapp', '5524999382195');
?>

<!-- Popup de Diagnóstico -->
<div id="diagnostico-popup" class="diagnostico-popup">
    <div class="diagnostico-popup-content">
        <button class="diagnostico-popup-close" id="popup-close" aria-label="Fechar">&times;</button>
        
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="display: inline-block; background: rgba(255, 103, 31, 0.1); border-radius: 9999px; padding: 0.5rem 1.5rem; margin-bottom: 1rem;">
                <span style="color: var(--color-primary); font-weight: 700; font-size: 0.875rem;">🎯 OFERTA EXCLUSIVA</span>
            </div>
            
            <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1rem;">
                Diagnóstico <span class="gradient-text">Gratuito</span>
            </h2>
            
            <p style="color: var(--color-muted-foreground); font-size: 1rem; line-height: 1.6;">
                Descubra os pontos críticos do seu negócio e receba um plano personalizado para acelerar seus resultados
            </p>
        </div>

        <form id="diagnostico-form" style="margin-bottom: 1rem;">
            <div class="diagnostico-form-group">
                <label for="popup-name">Nome Completo *</label>
                <input type="text" id="popup-name" name="name" required placeholder="Seu nome completo">
            </div>

            <div class="diagnostico-form-group">
                <label for="popup-email">E-mail *</label>
                <input type="email" id="popup-email" name="email" required placeholder="seu@email.com">
            </div>

            <div class="diagnostico-form-group">
                <label for="popup-phone">WhatsApp *</label>
                <input type="tel" id="popup-phone" name="phone" required placeholder="(00) 00000-0000">
            </div>

            <div class="diagnostico-form-group">
                <label for="popup-company">Empresa</label>
                <input type="text" id="popup-company" name="company" placeholder="Nome da sua empresa">
            </div>

            <div class="diagnostico-form-group">
                <label for="popup-interest">Área de Interesse *</label>
                <select id="popup-interest" name="interest" required>
                    <option value="">Selecione uma opção</option>
                    <option value="consultoria">Consultoria Empresarial</option>
                    <option value="mentoria">Mentoria Estratégica</option>
                    <option value="treinamento">Treinamento Corporativo</option>
                    <option value="projeto-tres">Projeto TRÊS</option>
                    <option value="outro">Outro</option>
                </select>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; font-size: 1rem; padding: 1rem;">
                📅 Solicitar Diagnóstico Gratuito
            </button>
        </form>

        <p style="text-align: center; font-size: 0.875rem; color: var(--color-muted-foreground); margin-top: 1rem;">
            🔒 Seus dados estão seguros conosco
        </p>
    </div>
</div>

<script>
(function() {
    const popup = document.getElementById('diagnostico-popup');
    const closeBtn = document.getElementById('popup-close');
    const form = document.getElementById('diagnostico-form');
    
    // Verificar se o popup já foi mostrado nesta sessão
    const popupShown = sessionStorage.getItem('diagnosticoPopupShown');
    
    // Mostrar popup após 5 segundos apenas na home
    if (!popupShown && document.body.classList.contains('home')) {
        setTimeout(function() {
            if (popup) {
                popup.classList.add('active');
                sessionStorage.setItem('diagnosticoPopupShown', 'true');
            }
        }, 5000);
    }
    
    // Fechar popup
    if (closeBtn && popup) {
        closeBtn.addEventListener('click', function() {
            popup.classList.remove('active');
        });
        
        // Fechar ao clicar fora do conteúdo
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                popup.classList.remove('active');
            }
        });
    }
    
    // Submissão do formulário
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('popup-name').value;
            const email = document.getElementById('popup-email').value;
            const phone = document.getElementById('popup-phone').value;
            const company = document.getElementById('popup-company').value;
            const interest = document.getElementById('popup-interest').value;
            
            // Montar mensagem para WhatsApp
            let message = `🎯 *Solicitação de Diagnóstico Gratuito*\n\n`;
            message += `*Nome:* ${name}\n`;
            message += `*E-mail:* ${email}\n`;
            message += `*WhatsApp:* ${phone}\n`;
            if (company) message += `*Empresa:* ${company}\n`;
            message += `*Interesse:* ${interest}\n\n`;
            message += `Gostaria de agendar meu diagnóstico gratuito!`;
            
            const whatsappUrl = `https://wa.me/<?php echo esc_js($whatsapp); ?>?text=${encodeURIComponent(message)}`;
            
            // Abrir WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Fechar popup
            popup.classList.remove('active');
            
            // Reset form
            form.reset();
        });
    }
    
    // Fechar com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup && popup.classList.contains('active')) {
            popup.classList.remove('active');
        }
    });
})();
</script>

<style>
/* Estilos adicionais específicos do popup (sobrescrever se necessário) */
.diagnostico-popup {
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.diagnostico-popup-content {
    animation: slideUp 0.3s ease;
}

@keyframes slideUp {
    from {
        transform: translateY(30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
