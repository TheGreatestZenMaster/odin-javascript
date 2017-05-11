/* use_strict */
const food = {
    position: 0
};
const board = [];
const snake = {
    position: [741],
    length: 1,
    direction: "d"
};

for (var i=1; i <= 1600; i++) {
    board[board.length] = i;
}

var generateFood = function() {
    var x = Math.floor(Math.random() * 1600 + 1);
    food.position = x;
    $('#' + x).addClass('food');
};


var makeBoard = function() {
    $('.wrapper').html('');
    for (let i=0; i < board.length; i++) {
        var block = $("<div class='gameblock'></div>");
        block.attr('id', i); 
        if (board[i] === snake.position) {
            block.addClass('snake'); 
            $('.wrapper').append(block);
        }
        else if (board[i]=== food.position) {
            block.addClass('food'); 
            $('.wrapper').append(block);
        }
        else {
            $('.wrapper').append(block);
        }
    }
    $('.wrapper').append('<div class="clear"></div>');
};


var move = function() {
    var snakeHead = snake.position[snake.position.length -1];
    var nextPosition = 0;
    var snakeTail = snake.position[0];
    if (snake.direction === "d") {
        nextPosition = snakeHead + 1;
    }
    else if (snake.direction === "a") {
        nextPosition = snakeHead - 1;
    }
    else if (snake.direction === "w") {
        nextPosition = snakeHead - 40;
    }
    else if (snake.direction === "s"){
        nextPosition = snakeHead + 40;
    }
    snake.position.push(nextPosition);
    $('#' + nextPosition).addClass('snake');
    if (nextPosition === food.position) {
        $('#' + food.position).removeClass('food');
        generateFood();
    }
    else {
        $('#' + snakeTail).removeClass('snake');
        snake.position.shift();
    }


    //if (snake.position[0] >= 41 || snake.position[0] <= 0 || snake.position[1] <= 0 || snake.position[1] >= 41){
    //    $('.wrapper').html('');
    //    $('.wrapper').append('<div class="gameover">GAME OVER</div>');
    //}
    //else {
    //     render();  
    //}da
};

$(document).ready(function (){
    makeBoard();
    generateFood();
    $(this).keypress( function(event) {
        var keyPressed = String.fromCharCode(event.keyCode);
        if (keyPressed === "w" || keyPressed === "a" || keyPressed === "s" || keyPressed === "d" ) {
            snake.direction = keyPressed;
        }
    });
    var moveInterval = setInterval(move, 100);
});

//  $('.gameover').on('click', function(event) {
//        snake.position = [20,20];
//        snake.direction = "d";
//        render();
//    });