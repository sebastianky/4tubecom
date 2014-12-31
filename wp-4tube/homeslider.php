<div class="box">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 feature-slider">
                                <a class="arrow-left icon icon-navigate-left" href="#" style="font-style: italic"></a><a class="arrow-right icon icon-navigate-right" href="#" style="font-style: italic"></a>
                                <div id="swiper-container">
                                    <div class="swiper-wrapper" style="width: 7980px; height: 399px; transform: translate3d(-1140px, 0px, 0px); -webkit-transform: translate3d(-1140px, 0px, 0px); transition: 0s; -webkit-transition: 0s;">
                                        <div class="swiper-slide swiper-slide-duplicate" style="width: 1140px; height: 399px;">
                                            <div class="grid">
                                                <div class="colspan3 pull-left">
                                                    <div class="grid-col1 highlight-video nothover">
                                                        <?php get_template_part('videobigtumba'); ?>
                                                    </div>
                                                </div>

                                                <div class="colspan2 pull-right">
                                                    <div class="grid-col2">
                                                        <?php query_posts("showposts=4&cat=1"); ?>
                                                        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                                                            <?php get_template_part('videotumba'); ?>
                                                        <?php endwhile; endif; ?>
                                                        <?php wp_reset_query(); ?>
                                                        
                                                    </div>
                                                </div><!-- colspan2 pull-right -->
                                            </div>
                                        </div>

                                        <div class="swiper-slide swiper-slide-visible swiper-slide-active" style="width: 1140px; height: 399px;">
                                            <div class="grid">
                                                <div class="colspan3 pull-left">
                                                    <div class="grid-col1 highlight-video nothover">
                                                        <?php get_template_part('videobigtumba'); ?>
                                                    </div>
                                                </div>
                                                <div class="colspan2 pull-right">
                                                    <div class="grid-col2">
                                                        <?php query_posts("showposts=4&cat=1"); ?>
                                                        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                                                            <?php get_template_part('videotumba'); ?>
                                                        <?php endwhile; endif; ?>
                                                        <?php wp_reset_query(); ?>
                                                        
                                                    </div>
                                                </div><!-- colspan2 pull-right -->
                                            </div>
                                        </div>

                                        <div class="swiper-slide" style="width: 1140px; height: 399px;">
                                            <div class="grid">
                                                <div class="colspan3 pull-left">
                                                    <div class="grid-col1 highlight-video nothover">
                                                        <?php get_template_part('videobigtumba'); ?>
                                                    </div>
                                                </div>

                                                <div class="colspan2 pull-right">
                                                    <div class="grid-col2">
                                                        <?php query_posts("showposts=4&cat=1"); ?>
                                                        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                                                            <?php get_template_part('videotumba'); ?>
                                                        <?php endwhile; endif; ?>
                                                        <?php wp_reset_query(); ?>
                                                        
                                                    </div>
                                                </div><!-- colspan2 pull-right -->
                                            </div>
                                        </div><!-- swiper-slide -->

                                        <div class="swiper-slide" style="width: 1140px; height: 399px;">
                                            <div class="grid">
                                                <div class="colspan3 pull-left">
                                                    <div class="grid-col1 highlight-video nothover">
                                                        <?php get_template_part('videobigtumba'); ?>
                                                    </div>
                                                </div>

                                                <div class="colspan2 pull-right">
                                                    <div class="grid-col2">
                                                        <?php query_posts("showposts=4&cat=1"); ?>
                                                        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                                                            <?php get_template_part('videotumba'); ?>
                                                        <?php endwhile; endif; ?>
                                                        <?php wp_reset_query(); ?>
                                                        
                                                    </div>
                                                </div><!-- colspan2 pull-right -->
                                            </div>
                                        </div>

                                        <div class="swiper-slide" style="width: 1140px; height: 399px;">
                                            <div class="grid">
                                                <div class="colspan3 pull-left">
                                                    <div class="grid-col1 highlight-video nothover">
                                                        <?php get_template_part('videobigtumba'); ?>
                                                    </div>
                                                </div>

                                                <div class="colspan2 pull-right">
                                                    <div class="grid-col2">
                                                        <?php query_posts("showposts=4&cat=1"); ?>
                                                        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                                                            <?php get_template_part('videotumba'); ?>
                                                        <?php endwhile; endif; ?>
                                                        <?php wp_reset_query(); ?>
                                                        
                                                    </div>
                                                </div><!-- colspan2 pull-right -->
                                            </div>
                                        </div><!-- swiper-slide -->

                                    </div>
                                </div>
                                <!-- @end swiper-container -->

                                <div class="swiper-pagination">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>