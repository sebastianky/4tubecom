<div class="col thumb_video" data-idmodal="<?php the_ID(); ?>">
    <a class="thumb-link" href="<?php the_permalink(); ?>">
                                            
        <div class="thumb">
            <?php if ( has_post_thumbnail()) : wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 250,250 ), false, '' ); else: ?>
                <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
            <?php endif; ?>
        </div>

        <?php $images = get_field('gallery');
            if( $images ): ?>
            <ul class="mini-slide minislide-10">   
            <?php foreach( $images as $image ): ?>
                <li data-src="<?php echo $image[sizes][thumbnail]; ?>"></li>
            <?php endforeach; ?>
            <li data-src="<?php if ( has_post_thumbnail()) : the_post_thumbnail('medium'); else:  echo catchFirstImage(); endif; ?>"></li>
            </ul>
            <div class="title-overlay"></div>
        <?php endif; ?>
    </a><!-- thumb-link -->
                                            
    <ul class="thumb-info_top">
    
        <?php  $posts = get_field('actress'); if( $posts ): ?>
            <?php foreach( $posts as $p ): // variable must NOT be called $post (IMPORTANT) ?>
            <li class="master-pornstar">
                <a href="<?php echo get_permalink( $p->ID ); ?>"><?php echo get_the_title( $p->ID ); ?></a>
            </li>
            <?php endforeach; ?>
        <?php endif; ?>

        <li>HD</li>

        <?php if(get_field('timing')) { echo '<li class="duration-top">' . get_field('timing') . '</li>'; } ?>
    </ul>

    <div class="bottom">
        <div class="thumb-info">
            <ul>
                <li>
                    <i class="icon icon-eye"></i></li>
                <li>
                    <i class="icon icon-up"></i>
                </li>
            </ul>
        </div>

        <p class="thumb-title">
            <?php the_title(); ?>
        </p>
    </div>
</div>
