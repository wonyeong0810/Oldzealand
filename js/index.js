const img = ["../img/DMZ1.png","../img/DMZ2.jpg"]
let i = 0
document.getElementById('goLeft').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    i = (i - 1 + img.length) % img.length;
    imageContainer.style.backgroundImage = `url(${img[i]})`;

});
document.getElementById('goRight').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    i = (i + 1) % img.length;
    imageContainer.style.backgroundImage = `url(${img[i]})`;

});

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});
 
	//methods
	$.fn.fullpage.setAllowScrolling(false);
});
