<?php
/**
 * Instituto COMET Theme Functions
 * 
 * @package COMET
 */

// Evita acesso direto
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function comet_theme_setup() {
    // Suporte a título dinâmico
    add_theme_support('title-tag');
    
    // Suporte a imagens destacadas
    add_theme_support('post-thumbnails');
    
    // Suporte a HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Suporte a logo personalizado
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Suporte a ícone do site (favicon)
    add_theme_support('custom-header');
    
    // Registrar menus
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'comet'),
        'footer'  => __('Menu Rodapé', 'comet'),
    ));
}
add_action('after_setup_theme', 'comet_theme_setup');

/**
 * Enfileirar Scripts e Estilos
 */
function comet_enqueue_scripts() {
    // CSS principal
    wp_enqueue_style('comet-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Google Fonts (opcional)
    wp_enqueue_style('comet-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap', array(), null);
    
    // JavaScript principal
    wp_enqueue_script('comet-scripts', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '1.0.0', true);
    
    // Adiciona variáveis PHP para JavaScript
    wp_localize_script('comet-scripts', 'cometData', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('comet-nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'comet_enqueue_scripts');

/**
 * Registrar Áreas de Widget
 */
function comet_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar Principal', 'comet'),
        'id'            => 'sidebar-1',
        'description'   => __('Widgets para a sidebar principal', 'comet'),
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Rodapé - Coluna 1', 'comet'),
        'id'            => 'footer-1',
        'description'   => __('Widgets para a primeira coluna do rodapé', 'comet'),
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
    
    register_sidebar(array(
        'name'          => __('Rodapé - Coluna 2', 'comet'),
        'id'            => 'footer-2',
        'description'   => __('Widgets para a segunda coluna do rodapé', 'comet'),
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
    
    register_sidebar(array(
        'name'          => __('Rodapé - Coluna 3', 'comet'),
        'id'            => 'footer-3',
        'description'   => __('Widgets para a terceira coluna do rodapé', 'comet'),
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'comet_widgets_init');

/**
 * Limitar excerpt
 */
function comet_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'comet_excerpt_length');

/**
 * Mudar "Read More" do excerpt
 */
function comet_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'comet_excerpt_more');

/**
 * Adicionar classe ao body
 */
function comet_body_classes($classes) {
    if (!is_singular()) {
        $classes[] = 'archive-page';
    }
    
    if (is_front_page()) {
        $classes[] = 'home-page';
    }
    
    return $classes;
}
add_filter('body_class', 'comet_body_classes');

/**
 * Custom Post Type - Serviços (exemplo)
 */
function comet_register_servicos_post_type() {
    $labels = array(
        'name'               => 'Serviços',
        'singular_name'      => 'Serviço',
        'menu_name'          => 'Serviços',
        'add_new'            => 'Adicionar Novo',
        'add_new_item'       => 'Adicionar Novo Serviço',
        'edit_item'          => 'Editar Serviço',
        'new_item'           => 'Novo Serviço',
        'view_item'          => 'Ver Serviço',
        'search_items'       => 'Buscar Serviços',
        'not_found'          => 'Nenhum serviço encontrado',
        'not_found_in_trash' => 'Nenhum serviço na lixeira',
    );
    
    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true,
        'menu_icon'           => 'dashicons-portfolio',
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite'             => array('slug' => 'servicos'),
    );
    
    register_post_type('servico', $args);
}
add_action('init', 'comet_register_servicos_post_type');

/**
 * Custom Post Type - Depoimentos
 */
function comet_register_depoimentos_post_type() {
    $labels = array(
        'name'               => 'Depoimentos',
        'singular_name'      => 'Depoimento',
        'menu_name'          => 'Depoimentos',
        'add_new'            => 'Adicionar Novo',
        'add_new_item'       => 'Adicionar Novo Depoimento',
        'edit_item'          => 'Editar Depoimento',
    );
    
    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => false,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true,
        'menu_icon'           => 'dashicons-star-filled',
        'supports'            => array('title', 'editor', 'thumbnail'),
    );
    
    register_post_type('depoimento', $args);
}
add_action('init', 'comet_register_depoimentos_post_type');

/**
 * Adicionar opções do tema (ACF ou Customizer)
 */
function comet_customize_register($wp_customize) {
    // Seção de contato
    $wp_customize->add_section('comet_contact', array(
        'title'    => __('Informações de Contato', 'comet'),
        'priority' => 30,
    ));
    
    // WhatsApp
    $wp_customize->add_setting('comet_whatsapp', array(
        'default'           => '5524999382195',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('comet_whatsapp', array(
        'label'    => __('Número do WhatsApp', 'comet'),
        'section'  => 'comet_contact',
        'type'     => 'text',
    ));
    
    // Email
    $wp_customize->add_setting('comet_email', array(
        'default'           => 'contato@institutocomet.com.br',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('comet_email', array(
        'label'    => __('Email de Contato', 'comet'),
        'section'  => 'comet_contact',
        'type'     => 'email',
    ));
    
    // Telefone
    $wp_customize->add_setting('comet_phone', array(
        'default'           => '(24) 99938-2195',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('comet_phone', array(
        'label'    => __('Telefone', 'comet'),
        'section'  => 'comet_contact',
        'type'     => 'text',
    ));
    
    // Redes Sociais
    $wp_customize->add_section('comet_social', array(
        'title'    => __('Redes Sociais', 'comet'),
        'priority' => 31,
    ));
    
    $wp_customize->add_setting('comet_instagram', array(
        'default'           => 'https://www.instagram.com/tiagorezeckcomet/',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('comet_instagram', array(
        'label'    => __('Instagram URL', 'comet'),
        'section'  => 'comet_social',
        'type'     => 'url',
    ));
    
    $wp_customize->add_setting('comet_youtube', array(
        'default'           => 'https://www.youtube.com/@institutocomet',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('comet_youtube', array(
        'label'    => __('YouTube URL', 'comet'),
        'section'  => 'comet_social',
        'type'     => 'url',
    ));
    
    $wp_customize->add_setting('comet_linkedin', array(
        'default'           => 'https://www.linkedin.com/in/tiagorezeck/',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('comet_linkedin', array(
        'label'    => __('LinkedIn URL', 'comet'),
        'section'  => 'comet_social',
        'type'     => 'url',
    ));
}
add_action('customize_register', 'comet_customize_register');

/**
 * Shortcode para botão WhatsApp
 */
function comet_whatsapp_button($atts) {
    $atts = shortcode_atts(array(
        'text' => 'Fale no WhatsApp',
        'message' => 'Olá, gostaria de mais informações',
    ), $atts);
    
    $whatsapp = get_theme_mod('comet_whatsapp', '5524999382195');
    $message = urlencode($atts['message']);
    $url = "https://wa.me/{$whatsapp}?text={$message}";
    
    return '<a href="' . esc_url($url) . '" class="btn btn-primary" target="_blank" rel="noopener noreferrer">' . esc_html($atts['text']) . '</a>';
}
add_shortcode('whatsapp', 'comet_whatsapp_button');

/**
 * Shortcode para formulário de contato (usar Contact Form 7)
 * [comet_contact_form]
 */
function comet_contact_form_shortcode() {
    if (function_exists('wpcf7_contact_form')) {
        return do_shortcode('[contact-form-7 id="1"]');
    }
    return '<p>Por favor, instale o plugin Contact Form 7.</p>';
}
add_shortcode('comet_contact_form', 'comet_contact_form_shortcode');
