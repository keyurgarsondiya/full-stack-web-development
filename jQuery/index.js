// alert('Working');
// $('document').ready(function () {
//   $('h1').css('color', 'green');
//   console.log($('h1').css('color'));
// });

$('h1').addClass('big-title margin-50');

// $('button').click(function () {
//   $('h1').css('color', 'purple');
// });

$('input').keypress(function (event) {
  $('h1').text(event.key);
});

// console.log($('h1').hasClass('margin-50'));
