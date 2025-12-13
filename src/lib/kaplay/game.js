import { getKaplay } from '$lib/kaplay/kaplayConfig'
import { createMap } from '$lib/kaplay/createMap'
import { createPlayer } from '$lib/kaplay/createPlayer'

export function game() {
  const k = getKaplay()

  const map = createMap('bedroom-lg')

  const player = createPlayer('brendan', 6, 3, 'south')
}
