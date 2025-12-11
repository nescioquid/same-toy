// import kaboom from './lib/kaboom.mjs'

// const k = kaboom({ global: false })

// loadSprite('spritesheet', './topdownasset.png', {
//   sliceX: 39,
//   sliceY: 31,
// }) // this is needed for the player animations
// // This because the tiles + player sprites are in the same image
// // If they were separate, we wouldn't need to load the tilesheet as the exported "map.png" would be enough

const tileScale = 3

export async function createMap(k, mapData) {
  const { loadSprite, add, pos, setCamPos, setCamScale, sprite, area, body, Rect, vec2, scale } = k
  
  await loadSprite(mapData.name, mapData.path)
  
  const mapJSON = await (await fetch(mapData.json)).json()
  const map = add([pos(0, 0)])
  // setCamPos(map.pos)
  // setCamPos(vec2(container.clientWidth/2, container.clientHeight/2))
  // setCamScale(1)

  map.add([sprite(mapData.name), scale(tileScale)])

  for (const layer of mapJSON.layers) {
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
