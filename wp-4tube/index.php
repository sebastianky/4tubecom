<?php get_header(); ?>

            <div class="content">
                <?php get_template_part('homeslider'); ?>

                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 list_page none logged_in_menu">
                            <div class="section-title mt2">
                                <h1 class="pull-left">
                                    New Videos From Your Subscriptions
                                </h1>
                                <a class="your-subscriptions btn btn-simple pull-right" href="">See all videos</a>
                            </div>

                            <div class="grid mb1">
                                <div class="grid-col5 clear text-center subscriptions-content">
                                    <p>
                                        Add subscriptions to get started!
                                    </p>

                                    <p>
                                        Subscribe to the feeds and this area will show you their latest videos
                                    </p>
                                    <a class="suggested-subscriptions btn btn-simple" href="">View Suggested Subscriptions</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 list_page">
                            <div class="section-title mt2">
                                <h1 class="pull-left">
                                    Most Recent Free Porn Videos
                                </h1>
                                <a class="btn btn-simple pull-right" href="http://www.4tube.com/videos">See all videos</a>
                            </div>

                            <div class="grid mb1">
                                <div class="colspan3 pull-left">
                                    <div class="grid-col3">

                                        <?php query_posts("showposts=6&cat=9"); ?>
                                        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                                            <?php get_template_part('videotumba'); ?>
                                        <?php endwhile; endif; ?>
                                        <?php wp_reset_query(); ?>

                                    </div>
                                </div><!-- colspan3 pull-left -->

                                <div class="colspan2 pull-right">
                                    <div class="banner-grid">
                                        <div class="banner-frame">
                                            <div class="ad_container ad_listings banner banner_lg none">
                                                <!-- insert code -->
                                            </div>
                                            <!-- /.ad_container ad_listings banner banner_lg none -->
                                        </div>
                                    </div>
                                </div>

                                <div class="grid-col5 clear">

                
                                        <?php query_posts("showposts=20&cat=1"); ?>
                                        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                                            <?php get_template_part('videotumba'); ?>
                                        <?php endwhile; endif; ?>
                                        <?php wp_reset_query(); ?>
    
                                </div><!-- grid-col5 clear -->

                                <ul class="pagination">
                                    <li>
                                        <a class="btn btn-simple btn-inactive" data-page="0" href="http://www.4tube.com/#" id="previous" >Previous</a>
                                    </li>

                                    <li class="active">
                                        <a class="btn btn-round" data-page="1" href="http://www.4tube.com/videos">1</a>
                                    </li>

                                    <li class="">
                                        <a class="btn btn-round" data-page="2" href="http://www.4tube.com/videos?p=2">2</a>
                                    </li>

                                    <li class="">
                                        <a class="btn btn-round" data-page="3" href="http://www.4tube.com/videos?p=3">3</a>
                                    </li>

                                    <li class="">
                                        <a class="btn btn-round" data-page="4" href="http://www.4tube.com/videos?p=4">4</a>
                                    </li>

                                    <li class="">
                                        <a class="btn btn-round" data-page="5" href="http://www.4tube.com/videos?p=5">5</a>
                                    </li>

                                    <li>
                                        <a class="btn btn-simple" data-page="2" href="http://www.4tube.com/videos?p=2" id="next" >Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
    <?php get_footer(); ?>