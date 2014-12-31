<?php
/*
Template Name: Ajax Handler
*/
?>
<?php
	$post = get_post($_GET['id']);
?>
<?php if ($post) : ?>
	<?php setup_postdata($post); ?>
	<div class="whatever">
		<h2 class="entry-title"><?php the_title() ?></h2>
		<div class="entry-content">
			<?php the_content(); ?>
		</div>
	</div>
<?php endif; ?>