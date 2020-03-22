jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#top', offset: 400});
   
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -80, 'axis':'y', easing:'easeOutQuad'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('show')){
			$('.navbar-collapse').removeClass('show');
		}
		
	});
	
    /* ======= Flexslider ======= */
    $('.flexslider').flexslider({
        animation: "fade",
        touch: true,
        directionNav: false
    }); 
    
    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */
    
    $('#testimonials .quote-box').matchHeight(); 

});