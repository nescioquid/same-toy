import { createMap } from '$lib/kaplay/createMap'
import createPlayer from '$lib/kaplay/createPlayer'
import { getKaplay } from '$lib/kaplay/kaplayConfig'

export default function game(k) {
  const player = createPlayer(
    k,
    0,
    0,
    'bean',
    '/sprites/bean.png'
  )

  const bedroomData = {
    name: 'bedroom',
    path: '/sprites/bedroom.png',
    json: '/sprites/bedroom.json',
  }

  createMap(k, bedroomData)
}
