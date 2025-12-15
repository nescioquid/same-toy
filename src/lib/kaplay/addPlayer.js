import { getKaplay } from '$lib/kaplay/kaplayConfig'
import { playerAnim } from '$lib/kaplay/loadPlayer'
import { OFFSET, SCALE_FACTOR } from '$lib/kaplay/constants'

export function addPlayer(spriteName, x, y, frame = 0) {
  const k = getKaplay()
  const { add, sprite, area, pos, z, scale, vec2 } = k

  x *= OFFSET
  y *= OFFSET

  const player = add([
    sprite('brendan', { frame: playerAnim[frame] }),
    area(),
    pos(x, y),
    z(1),
    scale(SCALE_FACTOR),
    {
      speed: 200,
      direction: 'south',
      isMoving: false,
      target: vec2(0, 0),
      moveDir: vec2(0, 0),
    },
    'player',
  ])
  return player
}
