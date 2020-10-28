const minAxis = Math.min(window.innerWidth, window.innerHeight)
var config = {
  type: Phaser.AUTO,
  width: minAxis,
  height: minAxis,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}
var game = new Phaser.Game(config)
var fpsText
var gScale

var minions = []

function preload () {
  // Image Section
  this.load.image('casterSource', 'resources/caster.png')
  this.load.image('meleeSource', 'resources/melee.png')
  this.load.image('cannonSource', 'resources/cannon.png')
  this.load.image('background', 'resources/midlane.webp')
  // Particle Image Section
  this.load.image('ryzeQ', 'resources/ryzeq.png')
  // Audio Section
  this.load.audio('hitSFX', 'resources/HitMark.mp3')
  this.load.audio('doinbTheme', 'resources/DOINB RYZE HACK英雄联盟 400 CS 24 MIN [L9 Turbo Boost].mp3')

  console.log('preload completed')
}

function create () {
  console.log('game started')
  this.background = this.add.image(0, 0, 'background')
  gScale = minAxis / this.background.width
  this.background.setScale(gScale).setOrigin(0)

  // Creates an fps counter variable, will run through update function
  fpsText = this.add.text(10, 10, 'FPS: ', {
    font: 'bold 12px Arial',
    fill: '#ffffff'
  })

  // This creates the song, plays and loops it.
  const themeSong = this.sound.add('doinbTheme')
  const themeSongConfig = { mute: false, volume: 0.01, loop: true }
  themeSong.play(themeSongConfig)
  // test melee minon
  createMeleeMinions(this)
};

var frameCount = 0

function update (time, delta) {
  if ((frameCount % 1) === 0) {
    fpsText.setText('FPS: ' + (1000 / delta).toFixed(1))
    var i
    if (typeof minions[0] !== 'undefined') {
      for (i = 0; i < minions.length; i++) {
        minions[i].x += -(gScale * 1)
        minions[i].y += (gScale * 1)
        if (minions[i].x < (0 - (minions[i].width) / 2)) {
          minions[i].x = minAxis / 2
          minions[i].y = minAxis / 2
          minions[i].destroy()
          delete minions[i]
          minions = minions.filter(f => f !== undefined)
          createMeleeMinions(this)
        }
      }
    }
  }
  frameCount += 1
}

function createMeleeMinions (target) {
  minions.push(target.add.sprite((minAxis), (0), 'meleeSource').setScale(gScale))
  minions[minions.length - 1].x = minAxis + minions[minions.length - 1].width
  minions[minions.length - 1].y = 0 - minions[minions.length - 1].height
  console.log(minions.length)
  console.log(minions[(minions.length - 1)])
  console.log('melee minion created')
};
