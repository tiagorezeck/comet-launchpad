<?php
/**
 * Template da Página Inicial (Home)
 * 
 * @package COMET
 */

get_header();

$whatsapp = get_theme_mod('comet_whatsapp', '5524999382195');
?>

<!-- Hero Section -->
<section class="hero-section" style="position: relative; min-height: 90vh; display: flex; align-items: center; overflow: hidden; background: var(--color-background);">
    <!-- Background Image -->
    <div style="position: absolute; inset: 0; z-index: 0;">
        <?php if (has_post_thumbnail()) : ?>
            <?php the_post_thumbnail('full', array('style' => 'width: 100%; height: 100%; object-fit: cover;')); ?>
        <?php endif; ?>
        <div style="position: absolute; inset: 0; background: linear-gradient(to right, var(--color-background), rgba(13, 18, 23, 0.95), rgba(13, 18, 23, 0.7));"></div>
    </div>

    <div class="container" style="position: relative; z-index: 10;">
        <div style="max-width: 700px;">
            <!-- Badge -->
            <div style="display: inline-block; margin-bottom: 2rem;">
                <span style="padding: 0.5rem 1rem; background: rgba(255, 103, 31, 0.1); border: 1px solid rgba(255, 103, 31, 0.2); border-radius: 9999px; font-size: 0.875rem; font-weight: 500; color: var(--color-primary);">
                    ✨ Transformação Empresarial Comprovada
                </span>
            </div>

            <!-- Título -->
            <h1 style="font-size: 3rem; font-weight: 700; line-height: 1.2; margin-bottom: 1.5rem;">
                Desenvolver Pessoas{' '}
                <span class="gradient-text">Transformar Empresas</span>
            </h1>

            <!-- Descrição -->
            <p style="font-size: 1.125rem; color: var(--color-muted-foreground); line-height: 1.6; margin-bottom: 1rem; text-align: justify;">
                Consultoria estratégica, mentoria de liderança e treinamento de times de alta performance com Desenvolvimento Humano e Organizacional (DHO) para acelerar o crescimento da sua empresa.
            </p>

            <p style="font-size: 1.25rem; color: var(--color-primary); font-weight: 600; margin-bottom: 2rem; text-align: justify;">
                🎯 O parceiro estratégico que sua empresa de pequeno e médio porte precisa para alavancar resultados.
            </p>

            <!-- Stats -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; padding: 1.5rem 0; margin-bottom: 2rem;">
                <div style="text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: 700; color: var(--color-primary);">10+</div>
                    <div style="font-size: 0.875rem; color: var(--color-muted-foreground);">Anos de Experiência</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: 700; color: var(--color-primary);">25+</div>
                    <div style="font-size: 0.875rem; color: var(--color-muted-foreground);">Empresas Atendidas</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: 700; color: var(--color-primary);">+300</div>
                    <div style="font-size: 0.875rem; color: var(--color-muted-foreground);">Pessoas Transformadas</div>
                </div>
            </div>

            <!-- CTAs -->
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="https://wa.me/<?php echo esc_attr($whatsapp); ?>?text=<?php echo urlencode('Quero agendar uma reunião e ter um diagnóstico'); ?>" 
                   class="btn btn-primary" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style="font-size: 1rem;">
                    Agende uma Reunião Agora
                </a>
                
                <a href="https://wa.me/<?php echo esc_attr($whatsapp); ?>?text=<?php echo urlencode('Olá, gostaria de falar com vocês'); ?>" 
                   class="btn btn-outline" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style="font-size: 1rem;">
                    Fale no WhatsApp
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Serviços -->
<section class="section">
    <div class="container">
        <div style="text-align: center; margin-bottom: 4rem;">
            <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">
                Como Podemos <span class="gradient-text">Ajudar</span>
            </h2>
            <p style="font-size: 1.25rem; color: var(--color-muted-foreground); max-width: 800px; margin: 0 auto;">
                Soluções completas e especializada em Desenvolvimento Humano e Organizacional (DHO), para transformação da sua empresa
            </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
            <!-- Serviço 1 -->
            <div class="card">
                <div style="color: var(--color-primary); margin-bottom: 1.5rem; font-size: 3rem;">🚀</div>
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">Consultoria Empresarial</h3>
                <p style="color: var(--color-muted-foreground); margin-bottom: 1.5rem; text-align: justify;">
                    Diagnóstico completo, planejamento estratégico e implementação de processos para organizar e expandir seu negócio com segurança.
                </p>
                <a href="<?php echo home_url('/servicos'); ?>" class="btn btn-primary">Saiba Mais</a>
            </div>

            <!-- Serviço 2 -->
            <div class="card">
                <div style="color: var(--color-primary); margin-bottom: 1.5rem; font-size: 3rem;">🎯</div>
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">Mentoria Estratégica</h3>
                <p style="color: var(--color-muted-foreground); margin-bottom: 1.5rem; text-align: justify;">
                    Acompanhamento personalizado para empresários e líderes que buscam clareza, foco e resultados consistentes em suas decisões.
                </p>
                <a href="<?php echo home_url('/servicos'); ?>" class="btn btn-primary">Saiba Mais</a>
            </div>

            <!-- Serviço 3 -->
            <div class="card">
                <div style="color: var(--color-primary); margin-bottom: 1.5rem; font-size: 3rem;">👥</div>
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">Treinamento Corporativo</h3>
                <p style="color: var(--color-muted-foreground); margin-bottom: 1.5rem; text-align: justify;">
                    Desenvolvimento de times de alta performance através de capacitações técnicas e comportamentais como práticas em liderança, gestão, vendas e comportamento profissional.
                </p>
                <a href="<?php echo home_url('/servicos'); ?>" class="btn btn-primary">Saiba Mais</a>
            </div>
        </div>
    </div>
</section>

<!-- CTA Vagas Limitadas -->
<section class="section section-muted">
    <div class="container">
        <div style="max-width: 900px; margin: 0 auto;">
            <div style="background: var(--gradient-hero); border-radius: 1rem; padding: 3rem; border: 2px solid var(--color-primary); box-shadow: var(--shadow-glow); text-align: center;">
                <div style="display: inline-block; background: rgba(255, 103, 31, 0.1); border-radius: 9999px; padding: 0.5rem 1.5rem; margin-bottom: 1.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-weight: 700;">
                        <span>⏰</span>
                        <span>VAGAS LIMITADAS</span>
                    </div>
                </div>
                
                <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">
                    Apenas <span class="gradient-text">5 vagas disponíveis</span> para o Ano de 2025
                </h2>
                
                <p style="font-size: 1.25rem; color: var(--color-muted-foreground); margin-bottom: 2rem; max-width: 700px; margin-left: auto; margin-right: auto;">
                    Nosso modelo de consultoria é baseado em atendimento personalizado e resultados garantidos. Por isso, limitamos o número de clientes ativos.
                </p>
                
                <a href="https://wa.me/<?php echo esc_attr($whatsapp); ?>?text=<?php echo urlencode('Quero garantir minha vaga para consultoria'); ?>" 
                   class="btn btn-primary" 
                   style="font-size: 1.125rem; padding: 1rem 2.5rem;"
                   target="_blank" 
                   rel="noopener noreferrer">
                    📅 Garanta sua Vaga Agora
                </a>
            </div>
        </div>
    </div>
</section>

<!-- CTA Final WhatsApp -->
<section class="section" style="background: linear-gradient(to bottom right, rgba(255, 103, 31, 0.1), var(--color-background), rgba(255, 103, 31, 0.05));">
    <div class="container">
        <div style="max-width: 800px; margin: 0 auto;">
            <div style="background: var(--gradient-hero); border-radius: 1.5rem; padding: 3rem; border: 2px solid rgba(255, 103, 31, 0.4); box-shadow: var(--shadow-glow); text-align: center; position: relative; overflow: hidden;">
                <!-- Efeitos de fundo -->
                <div style="position: absolute; top: 0; right: 0; width: 8rem; height: 8rem; background: rgba(255, 103, 31, 0.1); border-radius: 9999px; filter: blur(60px);"></div>
                <div style="position: absolute; bottom: 0; left: 0; width: 8rem; height: 8rem; background: rgba(255, 103, 31, 0.1); border-radius: 9999px; filter: blur(60px);"></div>
                
                <div style="position: relative; z-index: 10;">
                    <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">
                        Pronto para <span class="gradient-text">Decolar?</span>
                    </h2>
                    
                    <p style="font-size: 1.25rem; color: var(--color-muted-foreground); margin-bottom: 2rem;">
                        Agende uma reunião gratuita e descubra como a Metodologia COMET pode transformar sua empresa
                    </p>
                    
                    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
                        <a href="https://wa.me/<?php echo esc_attr($whatsapp); ?>?text=<?php echo urlencode('Quero agendar uma reunião e ter um diagnóstico'); ?>" 
                           class="btn btn-primary" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           style="font-size: 1rem;">
                            Agende uma Reunião
                        </a>
                        
                        <a href="https://wa.me/<?php echo esc_attr($whatsapp); ?>?text=<?php echo urlencode('Olá, gostaria de falar com vocês'); ?>" 
                           class="btn btn-primary" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           style="font-size: 1rem; animation: pulse 2s infinite;">
                            💬 Fale no WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.8;
    }
}

@media (max-width: 768px) {
    .hero-section h1 {
        font-size: 2rem !important;
    }
    
    .hero-section .stats {
        grid-template-columns: 1fr !important;
    }
}
</style>

<?php
get_footer();
