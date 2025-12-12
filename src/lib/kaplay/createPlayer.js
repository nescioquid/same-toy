import { SCALE_FACTOR } from '$lib/kaplay/constants'
import { getKaplay } from '$lib/kaplay/kaplayConfig'

export default async function createPlayer(spriteName, xY) {
  const k = getKaplay()
  const {
    loadSprite,
    add,
    pos,
    sprite,
    addKaboom,
    onKeyDown,
    z,
    scale,
    center,
    area,
    isKeyDown
  } = k

  const spritePath = `/sprites/${spriteName}.png`

  await loadSprite(spriteName, spritePath, {
    sliceX: 4,
    sliceY: 4,
    anims: {
      stillUp: { from: 2, to: 3, speed: 3, loop: true },
      stillLeft: { from: 6, to: 7, speed: 3, loop: true },
      stillDown: { from: 10, to: 11, speed: 3, loop: true },
      stillRight: { from: 14, to: 15, speed: 3, loop: true },
      walkUp: { from: 0, to: 3, speed: 3, loop: true },
      walkLeft: { from: 4, to: 7, speed: 3, loop: true },
      walkDown: { from: 8, to: 11, speed: 3, loop: true },
      walkRight: { from: 12, to: 15, speed: 3, loop: true },
    },
  })

  const player = add([
    sprite(spriteName),
    area(),
    pos(xY),
    z(1),
    scale(SCALE_FACTOR),
    {
      speed: 200,
      direction: 'stillDown',
      // isInDialogue: false,
    },
  ])

  function areAnyOfTheseKeysDown(keys) {
    for (const key of keys) {
      if (isKeyDown(key)) return true
    }

    return false
  }

  const handlers = {
    // w: () => player.move(0, -player.speed),
    // a: () => player.move(-player.speed, 0),
    // s: () => player.move(0, player.speed),
    // d: () => player.move(player.speed, 0),

    // if (gameState.getShowModal() === true) return

    up: () => {
      if (areAnyOfTheseKeysDown(['left', 'down', 'right'])) return
      if (player.direction !== 'up') {
        player.play('walkUp')
        player.direction = 'up'
      }
      player.move(0, -player.speed)
    },

    left: () => {
      if (areAnyOfTheseKeysDown(['up', 'down', 'right'])) return
      if (player.direction !== 'left') {
        player.play('walkLeft')
        player.direction = 'left'
      }

      player.move(-player.speed, 0)
    },

    down: () => {
      if (areAnyOfTheseKeysDown(['up', 'left', 'right'])) return
      if (player.direction !== 'down') {
        player.play('walkDown')
        player.direction = 'down'
      }
      player.move(0, player.speed)
    },

    right: () => {
      if (areAnyOfTheseKeysDown(['up', 'left', 'down'])) return
      if (player.direction !== 'right') {
        player.play('walkRight')
        player.direction = 'right'
      }
      player.move(player.speed, 0)
    },

    x: () => addKaboom(player.pos),
    z: () => addKaboom(player.pos),
    enter: () => addKaboom(player.pos),
  }

  onKeyDown((key) => handlers[key]?.())
}
