<script>
  import { onMount } from 'svelte'
  import { initKaplay } from '$lib/kaplay/kaplayConfig'
  import { OFFSET, SCALE_FACTOR } from '$lib/kaplay/constants'
  import { loadPlayer, playerAnim } from '$lib/kaplay/loadPlayer'

  let container

  onMount(() => {
    const k = initKaplay(container)
    const { loadSprite, add, sprite, area, pos, z, scale, scene, go } = k

    loadPlayer('brendan')

    scene('game', () => {
      let x = 6 * OFFSET
      let y = 3 * OFFSET

      const player = add([
        sprite('brendan', { frame: playerAnim.south }),
        area(),
        pos(x, y),
        z(1),
        scale(SCALE_FACTOR),
        {
          speed: 200,
          direction: 'south',
          isMoving: false,
          // target: vec2(0, 0),
          // moveDir: vec2(0, 0),
        },
        'player',
      ])
    })

    go('game')
  })
</script>

<div bind:this={container} class="w-full h-full overflow-hidden"></div>
