class Scene2 extends Phaser.Scene {
  constructor () {
    super('game')
  }

  create () {
    console.log('game started')
    this.background = this.add.image(0, 0, 'background').setOrigin(0)

    // Creates an fps counter variable, will run through update function
    var fpsText = this.add.text(10, 10, 'FPS: ', {
      font: 'bold 12px Arial',
      fill: '#ffffff'
    })

    // This creates the song, plays and loops it.
    const themeSong = this.sound.add('DOINBTHEME')
    const themeSongConfig = {mute: false, volume: 0.01, loop: true }
    themeSong.play(themeSongConfig)
    // test melee minon
    createMeleeMinions()
  };
};
function createMeleeMinions () {
  var meleeMinion = this.create(50, 50, 'melee_source')
  console.log('melee minion created')
};
