<div class="modal  player_modal in" id="player_modal" style="display: block;"><div class="modal-dialog container"><div class="modal-content">

<?php if (have_posts()): while (have_posts()) : the_post(); ?>

	<div class="modal-header" id="quickview-header">
		<button type="button" id="close-quickview" class="close modalClose" data-dismiss="modal" aria-hidden="true">×</button>

		<h1 class="modal-title"><?php the_title(); ?></h1>
		<div class="notifications" id="action_messages_modal"></div>
	</div><!-- modal-header -->

	<div class="modal-body">
		<div class="content videopage">
			<div class="box videoplayer">
				<div class="container">
					<div class="row">
						<div class="col-xs-12" id="quickview-content">
							<div class="player-col videopage">
								<div class="player">
									<div id="video-multiple" class="player">
										
										<!-- object remove -->
										
									</div>
								</div>
							<div class="actions">

								<button id="rateUpquickview" class="btn btn-simple btn-large btn-like rateButtons" data-type="v" data-direction="up" data-id="304293" data-href="http://www.4tube.com/video-action/304293/rate/up" title="I like this">

								<i class="icon icon-thumbsup"></i>Like</button>

								<button id="rateDownquickview" class="btn btn-simple btn-large btn-dislike rateButtons" data-type="v" data-direction="down" data-id="304293" data-href="http://www.4tube.com/video-action/304293/rate/down" title="I dislike this">

								<i class="icon icon-thumbsdown"></i>

								</button>

								<span class="votes"><span id="ratingquickview">91</span>% via <span id="totalVotes">12</span> votes</span><span class="none" id="ratingPositive">11</span>

								<span class="pull-right">

								</span>
							</div>
						</div>
					<div class="playerside-col banner-frame">
						<!-- iframe -->
					</div>
				</div>
			</div>
		</div>
	</div><!-- videoplayer -->
</div>
</div>

<?php endwhile; else: ?>

	<div class="modal-header" id="quickview-header">
		<button type="button" id="close-quickview" class="close modalClose" data-dismiss="modal" aria-hidden="true">×</button>

		<h1 class="modal-title">ERROR 404</h1>
		<div class="notifications" id="action_messages_modal"></div>
	</div><!-- modal-header -->

<?php endif; ?>	

</div></div></div>

