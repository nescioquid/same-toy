import { SCALE_FACTOR, TILE_SIZE } from '$lib/kaplay/constants'
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
    isKeyDown,
    vec2,
    onUpdate,
    dt,
    onKeyPress
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
      direction: null,
      isMoving: false,
      // isInDialogue: false,
      target: vec2(player.pos),
    },
    'player',
  ])

  onUpdate('player', () => {
    if (player.isMoving) {
      const dir = player.moveDir
      const step = dir.scale(player.speed * dt())
      const next = player.pos.add(step)

      // Check if we've reached or passed the target tile
      if (
        (dir.x > 0 && next.x >= player.target.x) ||
        (dir.x < 0 && next.x <= player.target.x) ||
        (dir.y > 0 && next.y >= player.target.y) ||
        (dir.y < 0 && next.y <= player.target.y)
      ) {
        player.pos = player.target.clone()
        player.isMoving = false
        player.play('idle' + player.direction.toUpperCase())
      } else {
        player.pos = next
      }
    }
  })

  function tryMove(dirName, dirVec) {
    if (player.isMoving) return

    // set animation
    if (player.direction !== dirName) {
      player.play('walk' + dirName.toUpperCase())
    }
    player.direction = dirName

    // Compute destination tile
    const targetX = player.pos.x + dirVec.x * tileSize
    const targetY = player.pos.y + dirVec.y * tileSize

    // TODO: here you can add collision checking before committing
    // if (!isTileWalkable(targetX, targetY)) return

    player.target = vec2(targetX, targetY)
    player.moveDir = dirVec
    player.isMoving = true
  }

  onKeyPress('up', () => tryMove('up', vec2(0, -1)))
  onKeyPress('left', () => tryMove('left', vec2(-1, 0)))
  onKeyPress('down', () => tryMove('down', vec2(0, 1)))
  onKeyPress('right', () => tryMove('right', vec2(1, 0)))

//   function areAnyOfTheseKeysDown(keys) {
//     for (const key of keys) {
//       if (isKeyDown(key)) return true
//     }

//     return false
//   }

//   const handlers = {
//     // w: () => player.move(0, -player.speed),
//     // a: () => player.move(-player.speed, 0),
//     // s: () => player.move(0, player.speed),
//     // d: () => player.move(player.speed, 0),

//     // if (gameState.getShowModal() === true) return

//     up: () => {
//       if (areAnyOfTheseKeysDown(['left', 'down', 'right'])) return
//       if (player.direction !== 'up') {
//         player.play('walkUp')
//         player.direction = 'up'
//       }
//       player.move(0, -player.speed)
//     },

//     left: () => {
//       if (areAnyOfTheseKeysDown(['up', 'down', 'right'])) return
//       if (player.direction !== 'left') {
//         player.play('walkLeft')
//         player.direction = 'left'
//       }

//       player.move(-player.speed, 0)
//     },

//     down: () => {
//       if (areAnyOfTheseKeysDown(['up', 'left', 'right'])) return
//       if (player.direction !== 'down') {
//         player.play('walkDown')
//         player.direction = 'down'
//       }
//       player.move(0, player.speed)
//     },

//     right: () => {
//       if (areAnyOfTheseKeysDown(['up', 'left', 'down'])) return
//       if (player.direction !== 'right') {
//         player.play('walkRight')
//         player.direction = 'right'
//       }
//       player.move(player.speed, 0)
//     },

//     x: () => addKaboom(player.pos),
//     z: () => addKaboom(player.pos),
//     enter: () => addKaboom(player.pos),
//   }

//   onKeyDown((key) => handlers[key]?.())
}
