<?php
/**
 * Template de Página
 * 
 * @package COMET
 */

get_header();
?>

<div class="container" style="padding: 4rem 1rem;">
    <?php while (have_posts()) : the_post(); ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            
            <header class="entry-header" style="text-align: center; margin-bottom: 3rem;">
                <h1 class="entry-title gradient-text" style="font-size: 3rem;">
                    <?php the_title(); ?>
                </h1>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-thumbnail" style="margin-top: 2rem; border-radius: 1rem; overflow: hidden; max-width: 1000px; margin-left: auto; margin-right: auto;">
                        <?php the_post_thumbnail('large', array('style' => 'width: 100%; height: auto;')); ?>
                    </div>
                <?php endif; ?>
            </header>

            <div class="entry-content" style="max-width: 800px; margin: 0 auto; color: var(--color-foreground); font-size: 1.125rem; line-height: 1.8;">
                <?php
                the_content();

                wp_link_pages(array(
                    'before' => '<div class="page-links">' . __('Páginas:', 'comet'),
                    'after'  => '</div>',
                ));
                ?>
            </div>

            <?php if (get_edit_post_link()) : ?>
                <footer class="entry-footer" style="margin-top: 3rem; text-align: center;">
                    <?php
                    edit_post_link(
                        sprintf(
                            wp_kses(__('Editar <span class="screen-reader-text">%s</span>', 'comet'), array('span' => array('class' => array()))),
                            get_the_title()
                        ),
                        '<span class="edit-link">',
                        '</span>'
                    );
                    ?>
                </footer>
            <?php endif; ?>
        </article>

        <?php
        // Se os comentários estiverem abertos ou houver pelo menos um comentário
        if (comments_open() || get_comments_number()) :
            comments_template();
        endif;
        ?>

    <?php endwhile; ?>
</div>

<style>
.entry-content h2,
.entry-content h3,
.entry-content h4 {
    color: var(--color-foreground);
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.entry-content h2 {
    font-size: 2rem;
}

.entry-content h3 {
    font-size: 1.5rem;
}

.entry-content p {
    margin-bottom: 1.5rem;
    text-align: justify;
}

.entry-content a {
    color: var(--color-primary);
    text-decoration: underline;
}

.entry-content a:hover {
    text-decoration: none;
}

.entry-content ul,
.entry-content ol {
    margin-left: 2rem;
    margin-bottom: 1.5rem;
}

.entry-content img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 2rem 0;
}

.entry-content blockquote {
    border-left: 4px solid var(--color-primary);
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: var(--color-muted-foreground);
}
</style>

<?php
get_footer();
