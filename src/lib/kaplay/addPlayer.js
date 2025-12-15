import { getKaplay } from '$lib/kaplay/kaplayConfig'
import { playerAnim } from '$lib/kaplay/loadPlayer'
import { OFFSET, SCALE_FACTOR } from '$lib/kaplay/constants'

export function addPlayer(spriteName, x, y, frame = 0) {
  const k = getKaplay()
  const { add, sprite, area, pos, z, scale, vec2, body, Rect} = k

  return add([
    sprite(spriteName, { frame: playerAnim[frame] }),
    area({ shape: new Rect(vec2(0, 16), 16, 16)}),
    pos(x * OFFSET, y * OFFSET),
    z(1),
    scale(SCALE_FACTOR),
    body(),
    {
      speed: 200,
      direction: 'down',
      isMoving: false,
      target: vec2(0, 0),
      moveDir: vec2(0, 0),
    },
    'player',
  ])
}
