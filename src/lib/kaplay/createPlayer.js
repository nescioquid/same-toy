import { getKaplay } from '$lib/kaplay/kaplayConfig'

export default async function createPlayer(spriteName, x, y) {
  const k = getKaplay()
  const { loadSprite, add, pos, sprite, addKaboom, onKeyDown } = k

  const spritePath = `/sprites/${spriteName}.png`

  await loadSprite(spriteName, spritePath)

  const player = add([pos(x, y), sprite(spriteName)])
  const speed = 250

  const handlers = {
    // w: () => player.move(0, -speed),
    // a: () => player.move(-speed, 0),
    // s: () => player.move(0, speed),
    // d: () => player.move(speed, 0),
    up: () => player.move(0, -speed),
    left: () => player.move(-speed, 0),
    down: () => player.move(0, speed),
    right: () => player.move(speed, 0),
    x: () => addKaboom(player.pos),
    z: () => addKaboom(player.pos),
    enter: () => addKaboom(player.pos),
  }

  onKeyDown((key) => handlers[key]?.())
}
