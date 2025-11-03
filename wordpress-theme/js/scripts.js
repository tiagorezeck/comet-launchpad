/**
 * Scripts principais do tema COMET
 */

(function($) {
    'use strict';

    // Smooth scroll para links internos
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
            }
        }
    });

    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Mobile menu toggle
    $('#mobile-menu-toggle').click(function() {
        $('#mobile-menu').slideToggle(300);
        $(this).toggleClass('active');
    });

    // Fechar menu mobile ao clicar em um link
    $('#mobile-menu a').click(function() {
        $('#mobile-menu').slideUp(300);
        $('#mobile-menu-toggle').removeClass('active');
    });

    // Lazy loading para imagens
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Animação de fade-in nos cards ao aparecer na tela
    if ('IntersectionObserver' in window) {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s ease-out';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                    
                    cardObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.card').forEach(card => {
            cardObserver.observe(card);
        });
    }

    // Botão "Voltar ao topo"
    const backToTop = $('<button>', {
        id: 'back-to-top',
        html: '↑',
        css: {
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            background: 'var(--gradient-comet)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            opacity: '0',
            visibility: 'hidden',
            transition: 'all 0.3s',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            zIndex: '999',
            boxShadow: 'var(--shadow-comet)'
        }
    }).appendTo('body');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            backToTop.css({
                opacity: '1',
                visibility: 'visible'
            });
        } else {
            backToTop.css({
                opacity: '0',
                visibility: 'hidden'
            });
        }
    });

    backToTop.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

})(jQuery);
