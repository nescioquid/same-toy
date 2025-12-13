import { getKaplay } from '$lib/kaplay/kaplayConfig'
import { createMap } from '$lib/kaplay/createMap'
import createPlayer from '$lib/kaplay/createPlayer'

export default function game() {
  const k = getKaplay()
  const { loadSprite, center } = k

  const map = createMap('bedroom-lg')

  const player = createPlayer('brendan', 6, 3, 10)
}
