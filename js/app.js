// Enemies our player must avoid
var Enemy = function(x, y, step) {
    this.MIN_X = -10;
    this.MAX_X = 405;

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.x = x;
    this.y =  y;
    this.step = step;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += dt * this.step;
    if (this.x > this.MAX_X) { this.x = this.MIN_X }

}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.



// A player - has to cross the board
// Can be moved by keys
//
var Player = function (x, y, sprite) {

    // The image/sprite for the player
    this.sprite = sprite;
    this.x = x;
    this.y = y
};

Player.prototype.handleInput = function(key) {
    var MIN_X = -10, MIN_Y =  -5;
    var MAX_X = 405, MAX_Y = 400;

    var step = 10;

    switch (key) {
        case 'left':
            this.x -= step;
            break;
        case'up':
            this.y -= step;
            break;
        case 'right':
            this.x += step;
            break;
        case 'down':
            this.y += step;
            break;
    }
    if (this.x < MIN_X) { this.x = MIN_X}
    if (this.x > MAX_X) { this.x = MAX_X}
    if (this.y < MIN_Y) {
        this.y = MIN_Y
        allStars.push(new Star(this.x, this.y, "images/Star.png"));
        player = new Player(300, MAX_Y, "images/char-princess-girl.png");
    }
    if (this.y > MAX_Y) { this.y = MAX_X}

}

Player.prototype.update = function(dt) {
    //this.x += dt * step;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}





// A player - has to cross the board
// Can be moved by keys
//
var Star = function (x, y, sprite) {

    // The image/sprite for the player
    this.sprite = sprite;
    this.x = x;
    this.y = y
};

Star.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}








var allStars = [];


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [
    new Enemy(-10, 63, 10),
    new Enemy(-10, 145, 20),
    new Enemy(-10, 227, 30)
];


var player = new Player(200, 400, "images/char-boy.png");

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
