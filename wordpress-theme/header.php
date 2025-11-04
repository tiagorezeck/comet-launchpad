<?php
/**
 * Template Header
 * 
 * @package COMET
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- Favicon -->
    <?php if (has_site_icon()) : ?>
        <link rel="icon" type="image/png" sizes="32x32" href="<?php echo esc_url(get_site_icon_url(32)); ?>" />
        <link rel="icon" type="image/png" sizes="192x192" href="<?php echo esc_url(get_site_icon_url(192)); ?>" />
        <link rel="apple-touch-icon" sizes="180x180" href="<?php echo esc_url(get_site_icon_url(180)); ?>" />
    <?php endif; ?>
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <!-- Navegação -->
    <nav class="navbar" style="position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(13, 18, 23, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid var(--color-border);">
        <div class="container" style="display: flex; align-items: center; justify-content: space-between; height: 80px; padding: 0 1rem;">
            
            <!-- Logo -->
            <div class="navbar-brand">
                <?php 
                if (has_custom_logo()) {
                    the_custom_logo();
                } else {
                    ?>
                    <a href="<?php echo esc_url(home_url('/')); ?>" style="font-size: 1.5rem; font-weight: 700; color: var(--color-foreground);">
                        <?php bloginfo('name'); ?>
                    </a>
                    <?php
                }
                ?>
            </div>

            <!-- Menu Desktop -->
            <div class="navbar-menu desktop-menu" style="display: none;">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'nav-list',
                    'fallback_cb'    => false,
                ));
                ?>
            </div>

            <!-- CTA Button Desktop -->
            <div class="navbar-cta desktop-cta" style="display: none;">
                <?php 
                $whatsapp = get_theme_mod('comet_whatsapp', '5524999382195');
                $message = urlencode('Quero agendar uma reunião e ter um diagnóstico');
                ?>
                <a href="https://wa.me/<?php echo esc_attr($whatsapp); ?>?text=<?php echo $message; ?>" 
                   class="btn btn-primary" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    Agende uma Reunião
                </a>
            </div>

            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" 
                    id="mobile-menu-toggle" 
                    style="display: block; background: none; border: none; color: var(--color-foreground); cursor: pointer; padding: 0.5rem;">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobile-menu" style="display: none; background: var(--color-background); padding: 1rem;">
            <div class="container">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'mobile-nav-list',
                    'fallback_cb'    => false,
                ));
                ?>
                <div style="margin-top: 1rem;">
                    <a href="https://wa.me/<?php echo esc_attr($whatsapp); ?>?text=<?php echo $message; ?>" 
                       class="btn btn-primary" 
                       style="display: block; text-align: center;"
                       target="_blank" 
                       rel="noopener noreferrer">
                        Agende uma Reunião
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Espaçamento para navbar fixa -->
    <div style="height: 80px;"></div>

    <!-- Conteúdo Principal -->
    <main id="main" class="site-main">

<style>
/* Estilos do Menu */
.nav-list,
.mobile-nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 0.25rem;
}

.mobile-nav-list {
    flex-direction: column;
    gap: 0.5rem;
}

.nav-list a,
.mobile-nav-list a {
    display: block;
    padding: 0.5rem 1rem;
    color: var(--color-foreground);
    font-weight: 500;
    font-size: 0.875rem;
    border-radius: 0.375rem;
    transition: var(--transition-smooth);
}

.nav-list a:hover,
.mobile-nav-list a:hover {
    background: var(--color-muted);
    color: var(--color-primary);
}

.current-menu-item a {
    background: rgba(255, 103, 31, 0.1);
    color: var(--color-primary);
}

/* Responsive */
@media (min-width: 1024px) {
    .desktop-menu,
    .desktop-cta {
        display: block !important;
    }
    
    .mobile-menu-toggle {
        display: none !important;
    }
}

@media (max-width: 1023px) {
    .mobile-menu.active {
        display: block !important;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
});
</script>
