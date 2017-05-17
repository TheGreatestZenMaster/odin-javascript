var currentIndex = 0;
var items = $('.slider-container img');
var itemCount = items.length;
    
    
var showSlide = function(index) {
    $('.slider-container img').hide();
    var current = $('.slider-container').find( 'img').eq(index);
    current.show();
}
    
$(document).ready(function() {
    
    for (var i = 0; i < $('.slider-container').find('img').length; i++ ) {
        var imageLi = $("<li></li>");
        var slide = "slide-" + i;
        var img = $('.slider-container').find('img').eq(i).clone();
        imageLi.attr('id', slide).append(img)
        $('ul').append(imageLi);

        //$('#nav-buttons').find('li').eq(i);
    }
    showSlide(currentIndex);
    $('#next').on('click', function(event) {

        if (currentIndex === ($('.slider-container').find('img').length - 1)) {
            currentIndex = 0;
        }
        else {
            currentIndex += 1;
        }
        showSlide(currentIndex);
    })
    
    $('#previous').on('click', function(event) {

        if (currentIndex === 0) {
            currentIndex = $('.slider-container').find('img').length - 1;
        }
        else {
            currentIndex -= 1;
        }
        showSlide(currentIndex);
    })
    
    $('li').on('click', function(event){
        var imageID = $(this).attr('id');
        currentIndex = imageID.split('-')[1];
        showSlide(currentIndex)
    })
})


