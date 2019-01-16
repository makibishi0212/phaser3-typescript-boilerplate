/// <reference path="./@types/phaser.d.ts"/>

import "phaser"
import { TitleScene } from "./scenes/title"

const config: GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game",
  scene: TitleScene,
  physics: {
    default: "arcade"
  }
}

export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config)
  }
}

window.addEventListener("load", () => {
  const game = new Game(config)
})
