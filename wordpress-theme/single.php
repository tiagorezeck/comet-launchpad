<?php
/**
 * Template de Post Individual
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
                
                <div class="entry-meta" style="color: var(--color-muted-foreground); margin-top: 1rem; font-size: 1rem;">
                    <time datetime="<?php echo get_the_date('c'); ?>">
                        <?php echo get_the_date(); ?>
                    </time>
                    
                    <?php if (get_the_category()) : ?>
                        <span style="margin: 0 0.5rem;">•</span>
                        <span><?php the_category(', '); ?></span>
                    <?php endif; ?>
                    
                    <span style="margin: 0 0.5rem;">•</span>
                    <span><?php echo get_the_author(); ?></span>
                </div>
                
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

            <?php if (has_tag()) : ?>
                <footer class="entry-footer" style="max-width: 800px; margin: 3rem auto 0; padding-top: 2rem; border-top: 1px solid var(--color-border);">
                    <div class="tags" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <strong style="color: var(--color-foreground);"><?php _e('Tags:', 'comet'); ?></strong>
                        <?php
                        $tags = get_the_tags();
                        if ($tags) {
                            foreach ($tags as $tag) {
                                echo '<a href="' . get_tag_link($tag->term_id) . '" class="tag" style="padding: 0.25rem 0.75rem; background: var(--color-muted); color: var(--color-foreground); border-radius: 1rem; font-size: 0.875rem; transition: var(--transition-smooth);">' . $tag->name . '</a>';
                            }
                        }
                        ?>
                    </div>
                </footer>
            <?php endif; ?>
        </article>

        <!-- Navegação entre posts -->
        <nav class="post-navigation" style="max-width: 800px; margin: 3rem auto; display: flex; justify-content: space-between; gap: 2rem;">
            <div class="nav-previous" style="flex: 1;">
                <?php
                $prev_post = get_previous_post();
                if ($prev_post) :
                    ?>
                    <a href="<?php echo get_permalink($prev_post->ID); ?>" class="card" style="display: block; text-decoration: none;">
                        <div style="color: var(--color-muted-foreground); font-size: 0.875rem; margin-bottom: 0.5rem;">
                            ← Post Anterior
                        </div>
                        <div style="color: var(--color-foreground); font-weight: 600;">
                            <?php echo get_the_title($prev_post->ID); ?>
                        </div>
                    </a>
                <?php endif; ?>
            </div>
            
            <div class="nav-next" style="flex: 1;">
                <?php
                $next_post = get_next_post();
                if ($next_post) :
                    ?>
                    <a href="<?php echo get_permalink($next_post->ID); ?>" class="card" style="display: block; text-decoration: none; text-align: right;">
                        <div style="color: var(--color-muted-foreground); font-size: 0.875rem; margin-bottom: 0.5rem;">
                            Próximo Post →
                        </div>
                        <div style="color: var(--color-foreground); font-weight: 600;">
                            <?php echo get_the_title($next_post->ID); ?>
                        </div>
                    </a>
                <?php endif; ?>
            </div>
        </nav>

        <?php
        // Comentários
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

.tag:hover {
    background: var(--color-primary) !important;
}
</style>

<?php
get_footer();
