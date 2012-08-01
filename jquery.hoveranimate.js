/**
 * Version: 1.0.0
 * Date: 01.08.2012
 *
 * ChangeLog:
 * 1.0 (25 Jul 2012) - First release
 */
$.fn.HoverAnimate = function(settings){
	var configuration = {
		MinusClassName: 'VoteDown'
	};
	var settings = $.extend({ }, configuration, settings);
	var $btn = $(this);
	var inc = '+1';
	if ($btn.hasClass(settings.MinusClassName)) inc = '-1';
	var topAnim = (inc < 0 ? "+=20px" : "-=30px");
	var CssClass = (inc < 0 ? "Minus" : "Plus");
	var animate = '<div class="Animate"><span class="'+CssClass+'">'+inc+'</span></div>';
	var $animate = $btn.after(animate).next();
	
	inc = parseInt(inc);
	offset = $btn.offset();
	$animate
		.css('top', offset.top)
		.css('left', offset.left)
		.animate({ top: topAnim, fontSize: "+=4px", left: "-=2px"}, "slow")
		.fadeOut("slow", function() { $animate.remove(); });
	
	return this;
}