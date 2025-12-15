<script>
  import { onMount } from 'svelte'
  import { initKaplay } from '$lib/kaplay/kaplayConfig'
  import { OFFSET, SCALE_FACTOR } from '$lib/kaplay/constants'
  import { loadPlayer, playerAnim } from '$lib/kaplay/loadPlayer'
  import { addPlayer } from '$lib/kaplay/addPlayer'
  import { attachPlayerMoves } from '$lib/kaplay/movePlayer'
  import { addMap } from '$lib/kaplay/addMap'

  let container

  onMount(() => {
    const k = initKaplay(container)
    const { loadSprite, loadJSON, add, sprite, pos, z, scale, scene, go } = k

    loadPlayer('brendan')

    loadSprite('bedroom-lg', '/sprites/bedroom-lg.png')

    const mapData = loadJSON('bedroom-lg', `/sprites/bedroom-lg.json`)

    scene('game', () => {
      const player = addPlayer('brendan', 6, 3, 'south')
      attachPlayerMoves(player)

      const map = add([
        sprite('bedroom-lg'),
        pos(0, 0),
        z(0),
        scale(SCALE_FACTOR),
      ])

      mapData.then((mapJSON) => {
        addMap(mapJSON)
      })

      // loadPlayer('brendan')
      //   .then(() => loadMap('bedroom'))
      //   .then((map) => {
      //     addMap(map)
      //     addPlayer('brendan', 6, 4)
      //   })
    })

    go('game')
  })
</script>

<div bind:this={container} class="w-full h-full overflow-hidden"></div>
