var homeMessage = '<p>Welcome to the home Pageaaaa!</p>';
var menuMessage = '<p>Here is our menu!</p>aaa';
var mapMessage = '<p>Check out howto get to us!</p>';
var contactMessage = '<p>Check out how to contact us!</p>';

var appendPage = function(message) {
  $('#main').empty();
  $('#main').append(
      $('<div>').attr('class', 'message').append(
        $('<p>').append(message))
  );
};

var appendMenu = function() {
  $('.wrapper').empty();
  $('.wrapper').attr('id', 'menubody');
}

var appendHome = function() {
  $('.wrapper').empty();
  $('.wrapper').attr('id', '');
}
$(function() {  
  $('.nav-tab').on('click', function(event) {
    if ($(this).attr('id') === 'home') {
      appendHome();
      appendPage(homeMessage);
      $('#main').removeClass();
      $('#main').addClass('home');
      $('.output').html('You Clicked Home');
    }
    else if ($(this).attr('id') === 'menu') {
      appendMenu();
      $('#main').removeClass();
      $('body').addClass('menu');
      $('.output').html('You Clicked Menu');
    }
    else if ($(this).attr('id') === 'map') {
      appendPage(mapMessage);
      $('#main').removeClass();
      $('#main').addClass('map');
      $('.output').html('You Clicked Map');
    }
    else if ($(this).attr('id') === 'contact') {
      appendPage(contactMessage);
      $('#main').removeClass();
      $('#main').addClass('contact');
      $('.output').html('You Clicked Contact');
    }
  });
});