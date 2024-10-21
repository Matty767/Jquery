// Phaser.js Recycling Game

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#e8f5e9',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);
let score = 0;
let scoreText;
let playerName = '';
let items;
let bins;

function preload() {
    // Load images for bins and recyclable items
    this.load.image('glassBin', 'images/glass_bin.png');
    this.load.image('plasticBin', 'images/plastic_bin.png');
    this.load.image('metalBin', 'images/metal_bin.png');
    this.load.image('foodBin', 'images/food_bin.png');
    this.load.image('bottle', 'images/glass_bottle.png');
    this.load.image('can', 'images/metal_can.png');
    this.load.image('plasticBottle', 'images/plastic_bottle.png');
    this.load.image('foodWaste', 'images/food_waste.png');
}

function create() {
    // Add bins to the scene
    bins = {
        glass: this.physics.add.staticSprite(100, 100, 'glassBin'),
        plastic: this.physics.add.staticSprite(300, 100, 'plasticBin'),
        metal: this.physics.add.staticSprite(500, 100, 'metalBin'),
        food: this.physics.add.staticSprite(700, 100, 'foodBin')
    };

    // Create draggable items
    items = [
        this.physics.add.sprite(100, 500, 'bottle').setInteractive(),
        this.physics.add.sprite(300, 500, 'can').setInteractive(),
        this.physics.add.sprite(500, 500, 'plasticBottle').setInteractive(),
        this.physics.add.sprite(700, 500, 'foodWaste').setInteractive()
    ];

    // Enable dragging
    this.input.setDraggable(items);

    // Handle dragging events
    this.input.on('dragstart', (pointer, gameObject) => {
        gameObject.setTint(0xff0000);
        gameObject.input.dragStartX = gameObject.x;
        gameObject.input.dragStartY = gameObject.y;
    });

    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
        gameObject.x = dragX;
        gameObject.y = dragY;
    });

    this.input.on('dragend', (pointer, gameObject) => {
        gameObject.clearTint();
        checkPlacement(gameObject);
    });

    // Add score text
    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
}

function update() {
    // Update logic if needed
}

function checkPlacement(item) {
    let correctBin = null;

    // Determine the correct bin for each item
    if (item.texture.key === 'bottle') correctBin = bins.glass;
    else if (item.texture.key === 'can') correctBin = bins.metal;
    else if (item.texture.key === 'plasticBottle') correctBin = bins.plastic;
    else if (item.texture.key === 'foodWaste') correctBin = bins.food;

    // Check if item is placed within the correct bin's bounds
    if (
        correctBin &&
        Phaser.Geom.Intersects.RectangleToRectangle(item.getBounds(), correctBin.getBounds())
    ) {
        item.disableInteractive();
        item.setVisible(false);
        score += 10;
        scoreText.setText('Score: ' + score);
        if (items.every(item => !item.visible)) {
            this.add.text(400, 300, `Congratulations, ${playerName}!`, {
                fontSize: '32px',
                fill: '#007bff'
            }).setOrigin(0.5);
        }
    } else {
        // Reset item position if not placed correctly
        item.setPosition(item.input.dragStartX, item.input.dragStartY);
    }
}

// Start game function to capture player's name
function startGame(name) {
    playerName = name;