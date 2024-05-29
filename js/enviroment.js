$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        controlArrows: true,
        navigation: true,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
        
	});
 
	//methods
	$.fn.fullpage.setAllowScrolling(true);
});	