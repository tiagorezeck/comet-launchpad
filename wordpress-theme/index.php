<?php
/**
 * Template Principal (Index)
 * 
 * @package COMET
 */

get_header();
?>

<div class="container" style="padding: 4rem 1rem;">
    <?php if (have_posts()) : ?>
        
        <header class="page-header" style="margin-bottom: 3rem; text-align: center;">
            <h1 class="page-title gradient-text">
                <?php
                if (is_home() && !is_front_page()) {
                    single_post_title();
                } elseif (is_archive()) {
                    the_archive_title();
                } elseif (is_search()) {
                    printf(__('Resultados da busca por: %s', 'comet'), '<span>' . get_search_query() . '</span>');
                } else {
                    _e('Blog', 'comet');
                }
                ?>
            </h1>
            <?php
            if (is_archive()) {
                the_archive_description('<div class="archive-description" style="color: var(--color-muted-foreground); max-width: 800px; margin: 1rem auto;">', '</div>');
            }
            ?>
        </header>

        <div class="posts-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem;">
            <?php
            while (have_posts()) :
                the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('card'); ?> style="display: flex; flex-direction: column;">
                    
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="post-thumbnail" style="margin-bottom: 1.5rem; overflow: hidden; border-radius: 0.5rem;">
                            <a href="<?php the_permalink(); ?>">
                                <?php the_post_thumbnail('medium', array('style' => 'width: 100%; height: auto; transition: transform 0.3s;')); ?>
                            </a>
                        </div>
                    <?php endif; ?>

                    <div class="post-content" style="flex: 1;">
                        <header class="entry-header" style="margin-bottom: 1rem;">
                            <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">
                                <a href="<?php the_permalink(); ?>" style="color: var(--color-foreground);">
                                    <?php the_title(); ?>
                                </a>
                            </h2>
                            
                            <div class="entry-meta" style="color: var(--color-muted-foreground); font-size: 0.875rem;">
                                <time datetime="<?php echo get_the_date('c'); ?>">
                                    <?php echo get_the_date(); ?>
                                </time>
                                <?php if (get_the_category()) : ?>
                                    <span> • </span>
                                    <span><?php the_category(', '); ?></span>
                                <?php endif; ?>
                            </div>
                        </header>

                        <div class="entry-summary" style="color: var(--color-muted-foreground); margin-bottom: 1rem;">
                            <?php the_excerpt(); ?>
                        </div>

                        <a href="<?php the_permalink(); ?>" class="btn btn-outline" style="margin-top: auto;">
                            Ler Mais
                        </a>
                    </div>
                </article>
                <?php
            endwhile;
            ?>
        </div>

        <!-- Paginação -->
        <div class="pagination" style="margin-top: 3rem; text-align: center;">
            <?php
            the_posts_pagination(array(
                'mid_size'  => 2,
                'prev_text' => __('&laquo; Anterior', 'comet'),
                'next_text' => __('Próximo &raquo;', 'comet'),
            ));
            ?>
        </div>

    <?php else : ?>

        <div class="no-posts" style="text-align: center; padding: 4rem 0;">
            <h2 class="gradient-text"><?php _e('Nenhum conteúdo encontrado', 'comet'); ?></h2>
            <p style="color: var(--color-muted-foreground); margin-top: 1rem;">
                <?php _e('Desculpe, não conseguimos encontrar o que você está procurando.', 'comet'); ?>
            </p>
        </div>

    <?php endif; ?>
</div>

<style>
.post-thumbnail a:hover img {
    transform: scale(1.05);
}

.pagination .nav-links {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
}

.pagination .page-numbers {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--color-card);
    color: var(--color-foreground);
    border: 1px solid var(--color-border);
    border-radius: 0.375rem;
    transition: var(--transition-smooth);
}

.pagination .page-numbers:hover,
.pagination .page-numbers.current {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
}
</style>

<?php
get_footer();
