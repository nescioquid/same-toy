import { createMap } from '$lib/kaplay/createMap'
import createPlayer from '$lib/kaplay/createPlayer'
import { getKaplay } from '$lib/kaplay/kaplayConfig'

export default function game() {
  const k = getKaplay()

  const map = createMap('bedroom-lg', 3)

  const player = createPlayer('bean', 0, 0)
}
