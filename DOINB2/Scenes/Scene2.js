class Scene2 extends Phaser.Scene{
  constructor(){
    super("playGame");
  }
  create(){
    console.log("game started");

    this.background = this.add.image(0,0,"background").setOrigin(0);

    // Creates an fps counter variable, will run through update function
    var fpsText = this.add.text(10, 10, 'FPS: ', {
      font: 'bold 12px Arial',
      fill: '#ffffff'
    });

    // This creates the song, plays and loops it.
    let theme_song = this.sound.add('DOINBTHEME');
    let theme_song_config = {mute: false, volume:0.01, loop:true};
    theme_song.play(theme_song_config);
    createMeleeMinions();
};





function createMeleeMinions(){
  var melee_minon = melee_minon.create(x * 48, y * 50, 'melee_source');
  console.log("melee minon created");
}
};
