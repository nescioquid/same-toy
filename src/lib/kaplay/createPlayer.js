export default async function createPlayer(k, x, y, spriteName, spritePath) {
  const { loadSprite, add, pos, sprite, addKaboom, onKeyDown } = k

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

  return player
}
