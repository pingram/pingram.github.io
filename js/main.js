$(document).ready(function(){

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

  $('#project-curriculet').mouseover(function () {
    $('#curriculet-details').show();
  })

  $('#project-curriculet').mouseout(function () {
    $('#curriculet-details').hide();
  })
});

// $('<img/>').attr('src', '../images/california_joshua_tree_min3.jpg').load(function() {
//    // $(this).remove(); // prevent memory leaks as @benweet suggested
//    alert('image loaded!');
//    $('body').css('background-image', 'url(http://picture.de/image.png)');
// });