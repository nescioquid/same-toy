<script>
  import { initKaplay } from '$lib/kaplay/kaplayConfig'
  import { game } from '$lib/kaplay/game'

  let container = null

  $effect(() => {
    if (!container) return

    const k = initKaplay(container)

    game()
  })
</script>

<div bind:this={container} class="w-full h-full overflow-hidden"></div>
