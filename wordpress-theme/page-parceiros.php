<?php
/**
 * Template Name: Parceiros
 * Template para a página de Parceiros
 * 
 * @package COMET
 */

get_header();

$whatsapp = get_theme_mod('comet_whatsapp', '5524999382195');

// Array de parceiros
$parceiros = array(
    array(
        'name' => 'Automac',
        'logo' => get_template_directory_uri() . '/assets/partners/automac.png',
        'specialty' => 'Automação e Sistemas de Gestão',
        'description' => 'Especializada em soluções de automação e sistemas integrados de gestão empresarial para empresas dos setores de food e varejo, oferecendo tecnologias e ferramentas que otimizam vendas, processos e eficiência operacional.',
        'website' => 'https://automacdigitron.com.br/'
    ),
    array(
        'name' => 'Jess Knoll',
        'logo' => get_template_directory_uri() . '/assets/partners/jess.png',
        'specialty' => 'Desenvolvimento Humano',
        'description' => 'Especialista em comportamento humano, desenvolvimento pessoal e profissional, atuando com mapeamento de perfil comportamental e testes psicométricos para apoiar organizações e equipes a alcançarem melhores resultados.',
        'website' => 'https://jessknoll.com.br/'
    ),
    array(
        'name' => 'Farmer',
        'logo' => get_template_directory_uri() . '/assets/partners/farmer.png',
        'specialty' => 'Marketing Digital',
        'description' => 'Agência especializada em marketing digital, tráfego pago e estratégias de crescimento online, ajudando empresas a aumentarem visibilidade, atrair mais leads qualificados e potencializar os resultados de vendas.',
        'website' => 'https://farmermkt.com.br/'
    )
);
?>

<!-- Hero Section -->
<section class="hero-section" style="background: var(--gradient-space); padding: 5rem 0 3rem; text-align: center; border-bottom: 1px solid var(--color-border);">
    <div class="container">
        <div style="max-width: 800px; margin: 0 auto;">
            <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem;">
                Nossos <span class="gradient-text">Parceiros</span>
            </h1>
            <p style="font-size: 1.25rem; color: var(--color-muted-foreground); line-height: 1.6;">
                Trabalhamos com parceiros estratégicos que compartilham nossa visão de excelência e transformação empresarial
            </p>
        </div>
    </div>
</section>

<!-- Parceiros Principais -->
<section class="section">
    <div class="container">
        <div style="text-align: center; margin-bottom: 4rem;">
            <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">
                Parceiros <span class="gradient-text">Estratégicos</span>
            </h2>
            <p style="font-size: 1.125rem; color: var(--color-muted-foreground); max-width: 700px; margin: 0 auto;">
                Conheça os especialistas que colaboram conosco para entregar soluções completas
            </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
            <?php foreach ($parceiros as $parceiro) : ?>
                <div class="partner-card">
                    <img src="<?php echo esc_url($parceiro['logo']); ?>" 
                         alt="<?php echo esc_attr($parceiro['name']); ?>" 
                         class="partner-logo"
                         style="max-height: 120px; width: auto; margin: 0 auto 1.5rem; display: block;">
                    
                    <div style="display: inline-block; background: rgba(255, 103, 31, 0.1); border-radius: 9999px; padding: 0.5rem 1rem; margin-bottom: 1rem;">
                        <span style="color: var(--color-primary); font-size: 0.875rem; font-weight: 600;">
                            <?php echo esc_html($parceiro['specialty']); ?>
                        </span>
                    </div>
                    
                    <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--color-foreground);">
                        <?php echo esc_html($parceiro['name']); ?>
                    </h3>
                    
                    <p style="color: var(--color-muted-foreground); text-align: justify; line-height: 1.6; margin-bottom: 1.5rem;">
                        <?php echo esc_html($parceiro['description']); ?>
                    </p>
                    
                    <a href="<?php echo esc_url($parceiro['website']); ?>" 
                       class="btn btn-primary partner-btn" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style="display: inline-block; margin-top: 1rem;">
                        Conheça nosso parceiro
                    </a>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Projeto TRÊS -->
<section class="section section-muted">
    <div class="container">
        <div style="max-width: 900px; margin: 0 auto;">
            <div style="background: var(--gradient-hero); border-radius: 1.5rem; padding: 3rem; border: 2px solid var(--color-primary); box-shadow: var(--shadow-glow); text-align: center;">
                <div style="display: inline-block; background: rgba(255, 103, 31, 0.1); border-radius: 9999px; padding: 0.5rem 1.5rem; margin-bottom: 1.5rem;">
                    <span style="color: var(--color-primary); font-weight: 700; font-size: 0.875rem;">✨ PROJETO ESPECIAL</span>
                </div>
                
                <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">
                    Projeto <span class="gradient-text">TRÊS</span>
                </h2>
                
                <p style="font-size: 1.125rem; color: var(--color-muted-foreground); margin-bottom: 1.5rem; line-height: 1.6; text-align: justify;">
                    Uma iniciativa exclusiva que reúne consultoria estratégica (COMET), desenvolvimento comportamental (Jess Knoll) e marketing digital (Farmer) em uma solução integrada para transformação completa de empresas.
                </p>
                
                <div style="display: inline-block; background: var(--color-card); border-radius: 1rem; padding: 1.5rem; margin: 1rem 0;">
                    <p style="font-size: 1.25rem; font-weight: 600; color: var(--color-primary); margin: 0;">
                        🚀 Estratégia + Pessoas + Visibilidade = Crescimento Exponencial
                    </p>
                </div>
                
                <p style="font-size: 1rem; color: var(--color-muted-foreground); margin-bottom: 2rem; text-align: justify;">
                    O Projeto TRÊS foi desenvolvido para empresas que desejam uma transformação completa, unindo gestão estratégica, desenvolvimento de equipes e presença digital de alto impacto.
                </p>
                
                <a href="https://wa.me/<?php echo esc_attr($whatsapp); ?>?text=<?php echo urlencode('Quero conhecer o Projeto TRÊS'); ?>" 
                   class="btn btn-primary" 
                   style="font-size: 1.125rem; padding: 1rem 2.5rem;"
                   target="_blank" 
                   rel="noopener noreferrer">
                    💬 Saiba Mais sobre o Projeto TRÊS
                </a>
            </div>
        </div>
    </div>
</section>

<!-- CTA Seja Parceiro -->
<section class="section">
    <div class="container">
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">
                Quer ser <span class="gradient-text">Parceiro COMET</span>?
            </h2>
            
            <p style="font-size: 1.125rem; color: var(--color-muted-foreground); margin-bottom: 2rem; line-height: 1.6;">
                Estamos sempre abertos a novas parcerias estratégicas com profissionais e empresas que compartilham nossos valores de excelência e transformação.
            </p>
            
            <a href="https://wa.me/<?php echo esc_attr($whatsapp); ?>?text=<?php echo urlencode('Tenho interesse em ser parceiro COMET'); ?>" 
               class="btn btn-primary" 
               style="font-size: 1.125rem; padding: 1rem 2.5rem;"
               target="_blank" 
               rel="noopener noreferrer">
                📞 Entre em Contato
            </a>
        </div>
    </div>
</section>

<!-- Formulário de Contato -->
<section class="section section-muted">
    <div class="container">
        <div style="max-width: 700px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 2rem;">
                <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1rem;">
                    Fale <span class="gradient-text">Conosco</span>
                </h2>
                <p style="color: var(--color-muted-foreground);">
                    Preencha o formulário e nossa equipe entrará em contato
                </p>
            </div>
            
            <div style="background: var(--color-card); border-radius: 1rem; padding: 2rem; border: 1px solid var(--color-border);">
                <?php echo do_shortcode('[comet_contact_form]'); ?>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();
