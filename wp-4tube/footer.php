  <!-- start footer  -->
                        <div class="col-xs-12 friends mt2">
                            <div class="section-title">
                                <h2 class="pull-left">
                                    4tube Friends
                                </h2>
                            </div>

                            <div class="grid mb1">
                                <div class="grid-col5">
                                	<?php query_posts("showposts=5&cat=1"); ?>
                                		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                                			<?php get_template_part('videotumba'); ?>
                            			<?php endwhile; endif; ?>
                            		<?php wp_reset_query(); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer">
                <div class="footer-banners">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <ul>
                                    <li>
                                        <div class="ad_container ad_footer none">
                                            <!-- insert code -->



                                        </div>
                                        <!-- /.ad_container ad_footer none -->
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="footer-lists">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="links">
                                    <p class="text-center">
                                        © 2014 DreamStar-Cash S.L. 4Tube is owned and operated by DreamStar-Cash S.L. All media is copyright of it's respective owners
                                    </p>

                                    <?php wpeFootNav(); ?>

                                    <p class="text-center">
                                        <a href="#"><img alt="RTA logo" height="31" src="<?php echo get_template_directory_uri(); ?>/img/88x31_RTA_b.gif" style="border:0;" width="88"></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script src="<?php echo get_template_directory_uri(); ?>/js/919d074.js" type="text/javascript"></script> 
        <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.simplemodal.1.4.4.min.js" type="text/javascript"></script>
        <!--[if lte IE 9]>
            <script type="text/javascript" src="http://cdn1.l3.ui.4tube.com/0842ab312b/js/d836e1f.js"></script>
        <![endif]-->
		<?php wp_footer(); ?>
		
    </body>
</html>