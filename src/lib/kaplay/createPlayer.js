import { getKaplay } from '$lib/kaplay/kaplayConfig'
import { SCALE_FACTOR, OFFSET } from '$lib/kaplay/constants'

export async function createPlayer(spriteName, x, y, frame=0) {
  const k = getKaplay()
  const {
    loadSprite,
    add,
    sprite,
    area,
    pos,
    z,
    scale,
    vec2,
    onUpdate,
    dt,
    isKeyDown,
    onKeyPress,
  } = k

  const animFrame = {
    north: 0,
    west: 5,
    south: 10,
    east: 15,
    faceStart: 1,
    faceEnd: 2,
    goStart: 0,
    goEnd: 4,
  }

  const animUp = 0
  const animLeft = 4
  const animDown = 8
  const animRight = 12
  const animOffset = 0
  const walkStart = 0
  const walkEnd = 3
  // const animSpeed = 10

  await loadSprite(spriteName, `/sprites/${spriteName}.png`, {
    sliceX: 5,
    sliceY: 4,
    anims: {
      faceUp: {
        from: animFrame.north + animFrame.faceStart,
        to: animFrame.north + animFrame.faceEnd,
      },
      faceLeft: {
        from: animFrame.west + animFrame.faceStart,
        to: animFrame.west + animFrame.faceEnd,
      },
      faceDown: {
        from: animFrame.south + animFrame.faceStart,
        to: animFrame.south + animFrame.faceEnd,
      },
      faceRight: {
        from: animFrame.east + animFrame.faceStart,
        to: animFrame.east + animFrame.faceEnd,
      },
      goUp: {
        from: animFrame.north + animFrame.goStart,
        to: animFrame.north + animFrame.goEnd,
      },
      goLeft: {
        from: animFrame.west + animFrame.goStart,
        to: animFrame.west + animFrame.goEnd,
      },
      goDown: {
        from: animFrame.south + animFrame.goStart,
        to: animFrame.south + animFrame.goEnd,
      },
      goRight: {
        from: animFrame.east + animFrame.goStart,
        to: animFrame.east + animFrame.goEnd,
      },
    },
  })

  x *= OFFSET 
  y *= OFFSET
  
  const player = add([
    sprite(spriteName, { frame: animFrame[frame] }),
    area(),
    pos(x, y),
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
    // --- If not moving & holding the facing direction key → move ---
    if (!player.isMoving) {
      const key = player.direction
      if (isKeyDown(key)) {
        const vec =
          key === 'up'
            ? vec2(0, -1)
            : key === 'left'
            ? vec2(-1, 0)
            : key === 'down'
            ? vec2(0, 1)
            : // key === 'right'
              vec2(1, 0)

        tryMove(key, vec)
      }
    }

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

        // play face animation
        player.play(
          'face' +
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
              : // key === 'right'
                vec2(1, 0)

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

    // go animation: goUp, goLeft, etc.
    player.play('go' + dirName.charAt(0).toUpperCase() + dirName.slice(1))

    const targetX = player.pos.x + dirVec.x * OFFSET
    const targetY = player.pos.y + dirVec.y * OFFSET

    // collision check can go here

    player.target = vec2(targetX, targetY)
    player.moveDir = dirVec
    player.isMoving = true
  }

  // input
  function handleDirectionalPress(dirName, dirVec) {
    // If already moving, ignore turn-taps
    if (!player.isMoving) {
      // If player is NOT facing this direction → just turn
      if (player.direction !== dirName) {
        player.direction = dirName
        player.play('face' + dirName.charAt(0).toUpperCase() + dirName.slice(1))
        return
      }

      // Player *is* facing the direction → attempt a tile move
      tryMove(dirName, dirVec)
    }
  }

  onKeyPress('up', () => handleDirectionalPress('up', vec2(0, -1)))
  onKeyPress('left', () => handleDirectionalPress('left', vec2(-1, 0)))
  onKeyPress('down', () => handleDirectionalPress('down', vec2(0, 1)))
  onKeyPress('right', () => handleDirectionalPress('right', vec2(1, 0)))

  return player
}
