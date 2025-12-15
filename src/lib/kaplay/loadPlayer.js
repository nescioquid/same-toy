import { getKaplay } from '$lib/kaplay/kaplayConfig'
import { SCALE_FACTOR, OFFSET } from '$lib/kaplay/constants'

export const playerAnim = {
  north: 0,
  west: 5,
  south: 10,
  east: 15,
  faceStart: 1,
  faceEnd: 2,
  goStart: 0,
  goEnd: 4,
}

export function loadPlayer(spriteName, x, y, frame = 0) {
  const k = getKaplay()
  const { loadSprite, add, sprite, area, pos, z, scale, vec2 } = k

  loadSprite(spriteName, `/sprites/${spriteName}.png`, {
    sliceX: 5,
    sliceY: 4,
    anims: {
      faceUp: {
        from: playerAnim.north + playerAnim.faceStart,
        to: playerAnim.north + playerAnim.faceEnd,
      },
      faceLeft: {
        from: playerAnim.west + playerAnim.faceStart,
        to: playerAnim.west + playerAnim.faceEnd,
      },
      faceDown: {
        from: playerAnim.south + playerAnim.faceStart,
        to: playerAnim.south + playerAnim.faceEnd,
      },
      faceRight: {
        from: playerAnim.east + playerAnim.faceStart,
        to: playerAnim.east + playerAnim.faceEnd,
      },
      goUp: {
        from: playerAnim.north + playerAnim.goStart,
        to: playerAnim.north + playerAnim.goEnd,
      },
      goLeft: {
        from: playerAnim.west + playerAnim.goStart,
        to: playerAnim.west + playerAnim.goEnd,
      },
      goDown: {
        from: playerAnim.south + playerAnim.goStart,
        to: playerAnim.south + playerAnim.goEnd,
      },
      goRight: {
        from: playerAnim.east + playerAnim.goStart,
        to: playerAnim.east + playerAnim.goEnd,
      },
    },
  })
}
