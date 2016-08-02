$(document).ready(function() {
 	var imageId = 'wadouri:http://rufusmbugua.com:8043/instances/c57826c4-96564973-aaa011e3-59707ad7-23fcd28e/file';
	var element = document.getElementById('dicomImage')
	cornerstone.enable(element)
	cornerstone.loadImage(imageId).then(function(image) {
       cornerstone.displayImage(element, image)
       cornerstoneTools.zoom.activate(element, 5);
		cornerstoneTools.length.activate(element, 1);
    });

    // Zoom
    function activate(that){
    	$('.btn').removeClass('active');
    	$(that).addClass('active');
    }
    $('.btn.zoom').on('click touchstart', function() {
    	activate(this);
        cornerstoneTools.zoomTouchDrag.activate(element);
    });

    $('.btn.length').on('click touchstart', function() {
    	activate(this);
        cornerstoneTools.length.activate(element, 1);
    });
});