$(function() {

    var add = function(num1, num2) {
    	return num1 + num2;
    };
    
    var multiply = function(num1, num2) {
    	return num1 * num2;
    };
    
    var divide = function(num1, num2) {
    	return num1 / num2;
    };
    
    var subtract = function(num1, num2) {
    	return num1 - num2;
    };
    var calculate = function(inner, outer, operator) {
    	switch(operator) {
      	case '+':
        	return add(inner, outer);
        case '-':
        	return subtract(inner, outer);
        case 'x':
        	return multiply(inner, outer);
        case '/':
        	return divide(inner, outer);
      }
    }
    var screen = "";
    var inner = 0
    var operator = "none"
    var outer = "0"
    
    
    $('.button')
    	.click(function() {
      	if ($(this).html() === "C") {
          	screen = "";
            inner = 0;
            operator = "none";
            outer = "0";
            $('#screen').html( 0 );
        }
      	else if ( isNaN($(this).html()) ){
        	if ( $(this).html() === "=") {
          	outer = Number(outer);
          	$('#screen').html(calculate(inner, outer, operator));
          }
          else {
          	operator = $(this).html();
          	inner = Number(screen);
            screen = screen.concat($(this).html());
          	$('#screen').html( screen );
          }
        } 
        else {
        	screen = screen.concat($(this).html());
        	$('#screen').html( screen );
          if (operator != "none" ) {
          	outer = outer.concat($(this).html());
          }
        }
     })
});