// Wansi Liang

$(document).ready(function() {

  function run(interval) {

    // Defines an array of images to be put on the header
    var imgs = [
      "url('./img/field-and-tractors.jpg')",
      "url('./img/meadow.jpg')",
      "url('./img/bee-collecting-pollen.jpg')"
    ];

    var index = 0;
    function func() {

      $("#hero-container").css("background-image", imgs[index]);  // Image rotation
      $('.overlay').delay(100).fadeOut(2000); 
      $('.overlay').delay(6000).fadeIn(2000);

      index++;
      if (index == 3) {
        index = 0;  // Repeat the animation
      }
    }

    $('.overlay').hide().delay(8000).fadeIn(2000); // Initial animation on overlay window


    var swap = window.setInterval(func, interval);
  }

  run(10000); // animate with an interval of 10s.

});
