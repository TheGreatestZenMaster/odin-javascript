const food = {
    position: [0,0]
};
const board = [];
const snake = {
    position: [20,20],
    length: 1,
    direction: "d"
};
const moveInterval = 0;

for (let i=1; i <= 40; i++) {
    for (let j=1; j <= 40; j++) {
        board[board.length] = [i,j];
    }
}

var generateFood = function() {
    let x = Math.floor(Math.random() * 40 + 1);
    let y = Math.floor(Math.random() * 40 + 1);
    food.position = [x, y];
};


var render = function() {
    $('.wrapper').html('');
    for (let i=0; i < board.length; i++) {
        if (board[i][0] === snake.position[0] && board[i][1] === snake.position[1]) {
            $('.wrapper').append('<div class="gameblock snake"></div>');
        }
        else if (board[i][0] === food.position[0] && board[i][1] === food.position[1]) {
            $('.wrapper').append('<div class="gameblock food"></div>');
        }
        else {
            $('.wrapper').append('<div class="gameblock"></div>');
        }
    }
    $('.wrapper').append('<div class="clear"></div>');
    if (snake.position[0] === food.position[0] && snake.position[1] === food.position[1]) {
        snake.length += 1;
        generateFood();
    }
};


var move = function() {
    if (snake.direction === "d") {
        snake.position[1] = snake.position[1] + 1;
    }
    else if (snake.direction === "a") {
        snake.position[1] = snake.position[1] - 1;
    }
    else if (snake.direction === "w") {
        snake.position[0] = snake.position[0] - 1;
    }
    else if (snake.direction === "s"){
        snake.position[0] = snake.position[0] + 1;
    }
    if (snake.position[0] >= 41 || snake.position[0] <= 0 || snake.position[1] <= 0 || snake.position[1] >= 41){
        $('.wrapper').html('');
        $('.wrapper').append('<div class="gameover">GAME OVER</div>');
    }
    else {
         render();  
    }
};

$(document).ready(function (){
    render();
    generateFood();
    $(this).keypress( function(event) {
        var keyPressed = String.fromCharCode(event.keyCode);
        if (keyPressed === "w" || keyPressed === "a" || keyPressed === "s" || keyPressed === "d" ) {
            snake.direction = keyPressed;
        }
    });
    moveInterval = setInterval(move, 50);
});

//  $('.gameover').on('click', function(event) {
//        snake.position = [20,20];
//        snake.direction = "d";
//        render();
//    });