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
    const { loadSprite, loadJSON, scene, go } = k

    loadPlayer('brendan')

    loadSprite('bedroom-lg', '/sprites/bedroom-lg.png')

    const mapData = loadJSON('bedroom-lg', `/sprites/bedroom-lg.json`)

    scene('game', () => {
      const player = addPlayer('brendan', 6, 3, 'south')
      attachPlayerMoves(player)

      mapData.then((mapJSON) => {
        addMap(mapJSON)
      })
    })

    go('game')
  })
</script>

<div bind:this={container} class="w-full h-full overflow-hidden"></div>
