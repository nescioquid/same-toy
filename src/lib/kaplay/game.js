import { createMap } from '$lib/kaplay/createMap'
import createPlayer from '$lib/kaplay/createPlayer'
import { getKaplay } from '$lib/kaplay/kaplayConfig'

export default function game() {
  const k = getKaplay()
  const { loadSprite, center } = k

  const map = createMap('bedroom-lg')

  const player = createPlayer('brendan', center())
}
