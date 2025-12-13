import { getKaplay } from '$lib/kaplay/kaplayConfig'
import { SCALE_FACTOR, OFFSET } from '$lib/kaplay/constants'

export default async function createPlayer(spriteName, xY) {
  const k = getKaplay()
  const {
    loadSprite,
    add,
    pos,
    sprite,
    onKeyPress,
    z,
    scale,
    area,
    vec2,
    onUpdate,
    dt,
    isKeyDown,
  } = k

  const spritePath = `/sprites/${spriteName}.png`

  const animUp = 0
  const animLeft = 4
  const animDown = 8
  const animRight = 12
  const animOffset = 0
  const walkStart = 0
  const walkEnd = 3
  // const animSpeed = 10

  await loadSprite(spriteName, spritePath, {
    sliceX: 5,
    sliceY: 4,
    anims: {
      idleUp: {
        from: animUp,
        to: animUp + animOffset,
        // speed: animSpeed,
      },
      idleLeft: {
        from: animLeft,
        to: animLeft + animOffset,
        // speed: animSpeed,
      },
      idleDown: {
        from: animDown,
        to: animDown + animOffset,
        // speed: animSpeed,
      },
      idleRight: {
        from: animRight,
        to: animRight + animOffset,
        // speed: animSpeed,
      },
      walkUp: {
        from: animUp + walkStart,
        to: animUp + walkEnd,
        // speed: animSpeed,
      },
      walkLeft: {
        from: animLeft + walkStart,
        to: animLeft + walkEnd,
        // speed: animSpeed,
      },
      walkDown: {
        from: animDown + walkStart,
        to: animDown + walkEnd,
        // speed: animSpeed,
      },
      walkRight: {
        from: animRight + walkStart,
        to: animRight + walkEnd,
        // speed: animSpeed,
      },
    },
  })

  x *= OFFSET 
  y *= OFFSET
  
  const player = add([
    sprite(spriteName),
    area(),
    pos(xY),
    z(1),
    scale(SCALE_FACTOR),
    {
      speed: 200,
      direction: 'down',
      isMoving: false,
      target: vec2(0, 0), // overwritten right after
      moveDir: vec2(0, 0),
    },
    'player',
  ])

  // now that player exists, set a real initial target
  player.target = vec2(player.pos)

  // --- Movement updater ---
  onUpdate('player', () => {
    if (player.isMoving) {
      const dir = player.moveDir
      const step = dir.scale(player.speed * dt())
      const next = player.pos.add(step)

      // reached (or passed) target tile?
      if (
        (dir.x > 0 && next.x >= player.target.x) ||
        (dir.x < 0 && next.x <= player.target.x) ||
        (dir.y > 0 && next.y >= player.target.y) ||
        (dir.y < 0 && next.y <= player.target.y)
      ) {
        // snap to tile
        player.pos = player.target.clone()
        player.isMoving = false

        // play idle animation
        player.play(
          'idle' +
            player.direction.charAt(0).toUpperCase() +
            player.direction.slice(1)
        )

        // --- auto continue if key still held ---
        const key = player.direction
        if (isKeyDown(key)) {
          const vec =
            key === 'up'
              ? vec2(0, -1)
              : key === 'left'
              ? vec2(-1, 0)
              : key === 'down'
              ? vec2(0, 1)
              // key === 'right'
              : vec2(1, 0)

          tryMove(key, vec)
        }
      } else {
        player.pos = next
      }
    }
  })

  // --- Try to move 1 tile ---
  function tryMove(dirName, dirVec) {
    if (player.isMoving) return

    player.direction = dirName

    // walk animation: walkUp, walkLeft, etc.
    player.play('walk' + dirName.charAt(0).toUpperCase() + dirName.slice(1))

    const targetX = player.pos.x + dirVec.x * OFFSET
    const targetY = player.pos.y + dirVec.y * OFFSET

    // collision check can go here

    player.target = vec2(targetX, targetY)
    player.moveDir = dirVec
    player.isMoving = true
  }

  // input
  onKeyPress('up', () => tryMove('up', vec2(0, -1)))
  onKeyPress('left', () => tryMove('left', vec2(-1, 0)))
  onKeyPress('down', () => tryMove('down', vec2(0, 1)))
  onKeyPress('right', () => tryMove('right', vec2(1, 0)))

  return player
}
