var currentIndex = 0;
var items = $('.slider-container img');
var itemCount = items.length;
    
    
var showSlide = function() {
    $('.slider-container img').hide();
    var current = $('.slider-container img').eq(currentIndex);
    current.show();
}
    
$(document).ready(function() {
    showSlide();
    
    $('#next').on('click', function(event) {
        currentIndex += 1;
        if (currentIndex === itemCount) {
            currentIndex = 0;
        }
        showSlide();
    })
    
    $('#previous').on('click', function(event) {
        currentIndex -= 1;
        if (currentIndex === -1) {
            currentIndex = itemCount - 1;
        }
        showSlide();
    })
})