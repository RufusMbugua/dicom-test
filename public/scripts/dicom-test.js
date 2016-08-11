$(document).ready(function() {
  var imageId = 'wadouri:http://rufusmbugua.com:8043/instances/c57826c4-96564973-aaa011e3-59707ad7-23fcd28e/file';
  var element = document.getElementById('dicomImage')
  cornerstone.enable(element)
  cornerstone.loadImage(imageId).then(function(image) {
    cornerstone.displayImage(element, image);
    // image enable the dicomImage element
    cornerstone.enable(element);
    // Enable mouse and touch input
    cornerstoneTools.mouseInput.enable(element);
    cornerstoneTools.touchInput.enable(element);
  });

  // Zoom
  function activate(that){

    $('.btn').removeClass('active');
    $(that).addClass('active');
    cornerstoneTools.zoomTouchDrag.disable(element);
    cornerstoneTools.rotate.disable(element, 1);
    cornerstoneTools.rotateTouchDrag.disable(element);
    cornerstoneTools.zoom.disable(element, 4);
    cornerstoneTools.length.disable(element, 1);
  }

  $('a#zoom').on('click touchstart', function() {
    activate(this);
    cornerstoneTools.zoomTouchDrag.activate(element);
    cornerstoneTools.zoom.activate(element, 4);
  });

  $('a#rotate').on('click touchstart', function() {
    activate(this);
    // Enable all tools we want to use with this element
    cornerstoneTools.rotate.activate(element, 1);
    cornerstoneTools.rotateTouchDrag.activate(element);
  });


  $('a#length').on('click touchstart', function() {
    activate(this);
    cornerstoneTools.length.activate(element, 1);
  });
});
