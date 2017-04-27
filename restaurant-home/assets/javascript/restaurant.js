var homeMessage = '<p>Welcome to the home Pageaaaa!</p>';
var menuMessage = '<p>Here is our menu!</p>aaa';
var mapMessage = '<p>Check out howto get to us!</p>';
var contactMessage = '<p>Check out how to contact us!</p>';


var appendPage = function(page) {
  $('section').hide();
  $(`#${page}-content`).toggle()
}

$(function() {  
  $('section').hide();
  $('#home-content').toggle();
  $('.nav-tab').on('click', function(event) {
    appendPage($(this).attr('id'));
  });
});