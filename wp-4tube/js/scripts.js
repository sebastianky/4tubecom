// DOM Ready
$(function() {

	// SVG fallback
	// toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script#update
	if (!Modernizr.svg) {
		var imgs = document.getElementsByTagName('img');
		var dotSVG = /.*\.svg$/;
		for (var i = 0; i != imgs.length; ++i) {
			if(imgs[i].src.match(dotSVG)) {
				imgs[i].src = imgs[i].src.slice(0, -3) + "png";
			}
		}
	}

});
$(document).ready(function() {
	$('a.thumb-link').click(function(){
		id = jQuery(this).attr('rel');
		$('<div id="ajax-popup" class="modal-'+id+'"></div>').hide().appendTo('body').load('http://demo.saitobaza.ru//?p='+id).modal({opacity:80, overlayCss: {backgroundColor:"#000"}, overlayClose:true, closeClass: "modalClose"});
		return false;
	});
});