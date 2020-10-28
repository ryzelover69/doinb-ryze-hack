class Scene1 extends Phaser.Scene{
  constructor(){
    super("bootGame");
  }

  preload(){
    // Image Section
    this.load.image('caster_source', 'resources/caster.png');
    this.load.image('melee_source', 'resources/melee.png');
    this.load.image('cannon_source', 'resources/cannon.png');
    this.load.image('background', 'resources/midlane.webp');
    // Particle Image Section
    this.load.image('ryzeQ', 'resources/ryzeq.png');
    // Audio Section
    this.load.audio('HitSFX', 'resources/HitMark.mp3');
    this.load.audio('DOINBTHEME','resources/DOINB RYZE HACK英雄联盟 400 CS 24 MIN [L9 Turbo Boost].mp3');

    console.log("preload completed");
  }

  create(){
    this.add.text(20,20, "Tear stacking...",{font:"20px Arial"});
    this.scene.start("playGame");
  }
}
