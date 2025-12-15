import { getKaplay } from '$lib/kaplay/kaplayConfig'
import { SCALE_FACTOR } from '$lib/kaplay/constants'

export function addMap(mapData) {
  const k = getKaplay()
  const { add, area, Rect, vec2, body, pos } = k

  for (const layer of mapData.layers) {
    if (layer.type === 'tilelayer') continue

    if (layer.name === 'Colliders') {
      for (const object of layer.objects) {
        // map.add([
        add([
          area({ shape: new Rect(vec2(0), object.width, object.height) }),
          body({ isStatic: true }),
          pos(object.x, object.y),
          'wall',
        ])
      }
      continue
    }

    // if (layer.name === 'Positions') {
    //   for (const object of layer.objects) {
    //     if (object.name === 'player') {
    //       map.add([
    //         sprite('spritesheet', { frame: 936 }), // idle frame of the player sprite
    //         area(),
    //         pos(object.x, object.y),
    //       ])
    //       continue
    //     }
    //   }
    // }
  }
}
