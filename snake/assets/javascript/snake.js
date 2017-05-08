
const board = [];
const snake = {
    position: [20,20],
    length: 1,
    direction: "d"
}

for (let i=1; i <= 40; i++) {
    for (let j=1; j <= 40; j++) {
        board[board.length] = [i,j];
    }
}

var render = function() {
    $('.wrapper').html('');
    for (let i=0; i < board.length; i++) {
        if (board[i][0] === snake.position[0] && board[i][1] === snake.position[1]) {
            $('.wrapper').append('<div class="gameblock snake"></div>');
        }
        else {
            $('.wrapper').append('<div class="gameblock"></div>');
        }
    }
    $('.wrapper').append('<div class="clear"></div>');
}


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
    render();
}

$(document).ready(function (){
    render();
    $(this).keypress( function(event) {
        var keyPressed = String.fromCharCode(event.keyCode)
        if (keyPressed === "w" || keyPressed === "a" || keyPressed === "s" || keyPressed === "d" ) {
            snake.direction = keyPressed;
        }
    })
    var moveInteval = setInterval(move, 50);
    if (snake.position[0] > 40 || snake.position[0] < 0 || snake.position[1] < 0 || snake.position[1] > 40){
        $('.wrapper').html('');
        $('.wrapper').append('<div class="gameover#>GAME OVER</div>');
        clearInterval(moveInteval);
    }
        
});