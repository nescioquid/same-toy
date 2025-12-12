import { SCALE_FACTOR } from "$lib/kaplay/constants";
import { getKaplay } from '$lib/kaplay/kaplayConfig'

export async function createMap(mapName) {
  const k = getKaplay()
  const {
    loadSprite,
    add,
    pos,
    setCamPos,
    setCamScale,
    sprite,
    area,
    body,
    Rect,
    vec2,
    scale,
    z
  } = k

  const mapPath = `/sprites/${mapName}.png`
  const mapJSON = `/sprites/${mapName}.json`

  await loadSprite(mapName, mapPath)

  const parsedJSON = await (await fetch(mapJSON)).json()
  const map = add([pos(0, 0)], z(0))
  // setCamPos(map.pos)
  // setCamPos(vec2(container.clientWidth/2, container.clientHeight/2))
  // setCamScale(1)

  map.add([sprite(mapName), scale(SCALE_FACTOR)])

  for (const layer of parsedJSON.layers) {
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

    if (layer.name === 'Positions') {
      for (const object of layer.objects) {
        if (object.name === 'player') {
          map.add([
            sprite('spritesheet', { frame: 936 }), // idle frame of the player sprite
            area(),
            pos(object.x, object.y),
          ])
          continue
        }
      }
    }
  }
}
