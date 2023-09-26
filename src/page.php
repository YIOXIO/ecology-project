<ul class="news-o__list">
    <li class="news-o__card">
        <a class="news-o__link" href="<?php echo get_permalink(); ?>">
            <?php 
            $image = get_field('news_image');
            if (!empty($image)) : ?>
                <img class="news-o__image" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
            <?php endif; ?> 
            <p class="news-o__date"><?php the_field('news_date'); ?></p>
            <p class="news-o__subtitle">
                <?php 
                $str = get_post_meta($post->ID, 'news_title', true); 
                if ($str !== '') {
                    the_field('news_title');
                } else {
                    the_title();
                }
                ?>
            </p>
        </a>
    </li>
</ul>

