var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var xPosition;
var xPositionPrevious;
var peixinho;
var musica;

function preload() {
    this.load.image("mar", "assets/bg_azul-escuro.png");
    this.load.image("logo", "assets/logo-inteli_branco.png");
    this.load.image("peixe", "assets/peixes/baiacu.png");
    this.load.image("alga", "assets/seaweed.png");

    this.load.audio("musica", "assets/underwater-ambience.mp3");

}

function create() {
    this.add.image(400, 300, "mar");
    this.add.image(140, 380, "alga").setScale(0.25);
    this.add.image(600, 180, "alga").setScale(0.25);
    this.add.image(250, 100, "alga").setScale(0.25);
    this.add.image(600, 450, "alga").setScale(0.25);
    this.add.image(400, 550, "logo").setScale(0.5);
    peixinho = this.add.image(400, 300, "peixe").setOrigin(0.5, 0.5);
    peixinho.setFlip(true, false);

    musica = this.sound.add("musica");
    musica.volume = 0.8;
    musica.loop = true;
    musica.play();
}

function update() {
// Armazena a posição anterior do peixinho
xPositionPrevious = peixinho.x;

// Atualiza a posição do peixinho de acordo com a posição do cursor
peixinho.x = this.input.x;
peixinho.y = this.input.y;

// Verifica se o peixinho está andando para a esquerda ou para a direita
if (peixinho.x < xPositionPrevious) {
    // Desfaz o espelhamento da imagem do peixe
    peixinho.setFlip(false, false);
} else if (peixinho.x > xPositionPrevious) {
    // Espelha a imagem do peixe horizontalmente
    peixinho.setFlip(true, false);
}

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
    
}

