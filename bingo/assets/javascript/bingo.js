var range = 40;
var rangeABCs = false;
var lowercase = false;
var currentNumber = 0;
var numbersInPlay = [0];
var previousNumber = 0;
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
                'W', 'X', 'Y', 'Z'];
                
var lettersInPlay = [''];

var reset = function() {
  range = 40;
  rangeABCs = false;
  lowercase = false;
  currentNumber = 0;
  numbersInPlay = [0];
  previousNumber = 0;
  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
                'W', 'X', 'Y', 'Z'];
                
  lettersInPlay = [''];
  
  $('#display-wrapper').hide();
  $('#bingo-wrapper').hide();
  $('#game-setup').show();
  $('#output-in-words').html("");
  $('#bingo-wrapper li').removeClass('inPlay');
}

var generateRandom = function() {
  var number = 0;
  if (numbersInPlay.length === range + 1) {
    // Do nothing
  }
  else {
    while (numbersInPlay.includes(number)) {
      number = Math.floor(Math.random() * range) + 1;
    };
    numbersInPlay.push(number)
    return number;
  }
};

var numberToLetter = function(number) {
  return letters[(number-1).toString()];
}


var numberToString = function(number) {
  var numberString = "";
  if (number <= 10) {
		switch((number).toString()) {
      case '1':
        numberString = "one";
        break;
      case '2':
        numberString = 'two';
        break;
      case '3':
        numberString = 'three';
        break;
      case '4':
        numberString = 'four';
        break;
      case '5':
        numberString = 'five';
        break;
      case '6':
        numberString = 'six';
        break;
      case '7':
        numberString = 'seven';
        break;
      case '8':
        numberString = 'eight';
        break;
      case '9':
        numberString = 'nine';
        break;
      case '10':
        numberString = 'ten';
        break;
      }
  }
  else {
    switch(Math.floor(number / 10).toString()) {
      case '1':
        switch(number.toString()) {
        	case '11':
          	return 'eleven';
          case '12':
          	return 'twelve';
          case '13':
          	return 'thirteen';
          case '14':
          	return 'fourteen';
          case '15':
          	return 'fifteen';
          case '16':
          	return 'sixteen';
          case '17':
          	return 'seventeen';
          case '18':
          	return 'eighteen';
          case '19':
          	return 'nineteen';
        }
        break;
      case '2':
        numberString += 'twenty';
        break;
      case '3':
        numberString += 'thirty';
        break;
      case '4':
        numberString += 'forty';
        break;
      case '5':
        numberString += 'fifty';
        break;
      case '6':
        numberString += 'sixty';
        break;
      case '7':
        numberString += 'seventy';
        break;
      case '8':
        numberString += 'eighty';
        break;
      case '9':
        numberString += 'ninety';
        break;
  	}
    switch((number % 10).toString()) {
      case '1':
        numberString += "-one";
        break;
      case '2':
        numberString += '-two';
        break;
      case '3':
        numberString += '-three';
        break;
      case '4':
        numberString += '-four';
        break;
      case '5':
        numberString += '-five';
        break;
      case '6':
        numberString += '-six';
        break;
      case '7':
        numberString += '-seven';
        break;
      case '8':
        numberString += '-eight';
        break;
      case '9':
        numberString += '-nine';
        break;
    }
  }
  return numberString;
};

$(function() { 
  reset();
  $('.start').on('click', function(event) {
    var valueRange = $(this).attr('id');
    switch(valueRange) {
      case 'game-40':
        range = 40;
        $('#bingo-40').show();
        $('#bingo-abcs').hide();
        $('#bingo-60').hide();
        $('#bingo-ABCs').hide();
        break;
      case 'game-60':
        range = 60;
        $('#bingo-60').show();
        $('#bingo-abcs').hide();
        $('#bingo-40').hide();
        $('#bingo-ABCs').hide();
        break;
      case 'game-ABCs':
        range = 26;
        $('#bingo-ABCs').show();
        $('#bingo-abcs').hide();
        $('#bingo-60').hide();
        $('#bingo-40').hide();
        rangeABCs = true;
        break;
      case 'game-abcs':
        range = 26;        
        $('#bingo-ABCs').hide();
        $('#bingo-abcs').show();
        $('#bingo-60').hide();
        $('#bingo-40').hide();
        rangeABCs = true;
        lowercase = true;
        break;
      default:
        range = 0;
    }
    $('#game-setup').hide();
    $('#bingo-wrapper').show();
  });
  $('#next').on('click', function(event) {
    if (!$('.bingo'+previousNumber).hasClass("inPlay")) {
      $('.bingo'+previousNumber).addClass("inPlay");
    };
    currentNumber = generateRandom();
    var numberInWords = numberToString(currentNumber);
    $('#output-in-words').html(numberInWords);
    previousNumber = currentNumber;
  });
  
  $('#output-as-number-button').on('click', function(event) {
    $('#bingo-wrapper').toggle();
    $('#display-wrapper').toggle();
    if (rangeABCs) {
      if (lowercase) {
        $('#numberDisplay').html(numberToLetter(currentNumber).toLowerCase());
      }
      else{
        $('#numberDisplay').html(numberToLetter(currentNumber));
      }
    }
    else {
      $('#numberDisplay').html(currentNumber);
    }
    if (!$('.bingo'+currentNumber).hasClass("inPlay")) {
      $('.bingo'+currentNumber).addClass("inPlay");
    }
    $('#output-in-words').html("");
  });
  
  $('#reset').on('click', function(event) {
    if (confirm("Did you really want to reset?")) {
        reset(); 
    }
  });
});