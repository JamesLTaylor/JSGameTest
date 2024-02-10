var width = 450;
var scale = width / 300;
var height = 200*scale;
var speed = scale * 1.5;
var startX = scale * 240;
var startY = scale * 160;

var config = {
    parent: 'phaser-example',
    type: Phaser.AUTO,
    width: width,
    height: height,
    fps: {target: 15, forceSetTimeOut: true},
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var rightImages = []
var leftImages = []

function preload ()
{
    this.load.image('background', 'images/InTheStyleOf.png');
    this.load.image('birdR1', 'images/BirdR1.png');
    this.load.image('birdR2', 'images/BirdR2.png');
    this.load.image('birdR3', 'images/BirdR3.png');
    this.load.image('birdR4', 'images/BirdR4.png');
    this.load.image('birdR5', 'images/BirdR5.png');
    this.load.image('birdR6', 'images/BirdR6.png');
    this.load.image('birdR7', 'images/BirdR7.png');
    this.load.image('birdR8', 'images/BirdR8.png');
    this.load.image('birdL1', 'images/BirdL1.png');
    this.load.image('birdL2', 'images/BirdL2.png');
    this.load.image('birdL3', 'images/BirdL3.png');
    this.load.image('birdL4', 'images/BirdL4.png');
    this.load.image('birdL5', 'images/BirdL5.png');
    this.load.image('birdL6', 'images/BirdL6.png');
    this.load.image('birdL7', 'images/BirdL7.png');
    this.load.image('birdL8', 'images/BirdL8.png');
    this.load.image('tree', 'images/tree.png');
}

function create ()
{
    cursors = this.input.keyboard.createCursorKeys();
    background = this.add.image(0.5*width, 0.5*height, 'background');
    background.setScale(scale);
    index = 1;
    direction = 0;
    x = startX;
    bird = this.add.sprite(x, startY, 'birdR'+index);
    treeSprite = this.add.sprite(0.5*width, 0.5*height, 'tree');
    treeSprite.setScale(scale);
    bird.setScale(scale);
}

function update ()
{
    if (cursors.left.isDown
        | (this.input.activePointer.isDown && this.input.activePointer.position.x<x))
    {
        if (x > 0) {
            direction = -1;
            x = x - speed;
            bird.setX(x);
            index += 1;
            if (index > 8) {index = 1;}
        }
    }
    else if (cursors.right.isDown 
            | (this.input.activePointer.isDown && this.input.activePointer.position.x>x)
           )
    {
        if  (x < width) {
            direction = 1;
            x = x + speed;
            bird.setX(x);
            index += 1;
            if (index > 8) {index = 1;}
        }
    }
    else {index = 1;}
    if (direction == 1) {bird.setTexture('birdR' + index);}
    else if (direction == -1) {bird.setTexture('birdL' + index);}

}