import { getKaplay } from '$lib/kaplay/kaplayConfig'
import { SCALE_FACTOR } from '$lib/kaplay/constants'

export async function createMap(mapName) {
  const k = getKaplay()
  const { loadSprite, loadJSON, getData, add, sprite, pos, z, scale, area, Rect, vec2, body } = k

  await loadSprite(mapName, `/sprites/${mapName}.png`)

  const mapData = await loadJSON(mapName, `/sprites/${mapName}.json`)

  const map = add([sprite(mapName), pos(0, 0), z(0), scale(SCALE_FACTOR)])

  for (const layer of mapData.layers) {
    if (layer.type === 'tilelayer') continue

    if (layer.name === 'Colliders') {
      for (const object of layer.objects) {
        map.add([
          area({ shape: new Rect(vec2(0), object.width, object.height) }),
          body({ isStatic: true }),
          pos(object.x, object.y),
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
