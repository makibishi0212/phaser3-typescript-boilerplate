/// <reference path="../@types/phaser.d.ts"/>
import titlePNG from "../../assets/title.png"

export class TitleScene extends Phaser.Scene {
  private titleSprite: Phaser.GameObjects.Sprite

  constructor() {
    super({
      key: "TitleScene"
    })
  }

  preload(): void {
    this.load.image("logo", titlePNG)
  }

  create(): void {
    this.titleSprite = this.add.sprite(400, 300, "logo")
  }
}
