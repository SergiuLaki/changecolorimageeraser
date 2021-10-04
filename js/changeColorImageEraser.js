(function() {
     // Get all existing set of images for eraser
     let images = $('.image');
     // Get all color picker buttons
     let colorPicker = $('.colorPicker__item');
 
     // Clear eraser button
     let resetEraserButton = $('.resetEraser');
 
     // After all content is loaded, call eraser
     $(window).on('load', callEraser);
 
     // Transform last image from array into erasable canvas
     function callEraser() {
         // Renew images array
         images = $('.image');
         // Initialize eraser
         $(images[images.length - 1]).eraser();
 
         // Add to initialized canvas data-count
         // console.log($(images[images.length - 1]));
         $(images[images.length - 1]).attr('data-count', '5')
     }
     function resetEraser() {
         images = $('.image');
         $(images[images.length - 1]).eraser('reset');
     }
 
     // On color pick click, change image to second place
     colorPicker.on('click', colorPickerCall);
 
     // Change image to second place, change styles for color Picker (test)
     function colorPickerCall() {
         images = $('.image');
         
         // colorPicker change styles for active
         colorPicker.removeClass('active');
         $(this).addClass('active');
         images.parent().find(`.image[data-count=${$(this).attr('data-count')}]`).insertAfter(images[images.length - 2]);
 
     }
 
     // Clear eraser on click
     resetEraserButton.on('click', resetEraser);
})()
   


