$(document).ready(function(){

  $('.window').windows({
      snapping: true,
      snapSpeed: 500,
      snapInterval: 1100, // originally 1100
      onScroll: function(scrollPos){
          // scrollPos:Number
      },
      onSnapComplete: function($el){
          // after window ($el) snaps into place
      },
      onWindowEnter: function($el){
          // when new window ($el) enters viewport
      }
  })

  // $('img').adipoli({
  //   'startEffect' : 'grayscale',
  //   'hoverEffect' : 'popout'
  // });
  
  $('#project-phlickr').mouseover(function () {
    $('#phlickr-details').show();
  })

  $('#project-phlickr').mouseout(function () {
    $('#phlickr-details').hide();
  })

  $('#project-trellino').mouseover(function () {
    $('#trellino-details').show();
  })

  $('#project-trellino').mouseout(function () {
    $('#trellino-details').hide();
  })

  $('#project-asteroids').mouseover(function () {
    $('#asteroids-details').show();
  })

  $('#project-asteroids').mouseout(function () {
    $('#asteroids-details').hide();
  })
});

