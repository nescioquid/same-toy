<script>
  import { Dot } from '@lucide/svelte'
  import { power, togglePower } from '$lib/power.svelte'

  const pressIgnition = () => togglePower()

  const handlers = {
    q: pressIgnition,
  }

  function onkeyup(event) {
    const key = event.key.toLowerCase()
    handlers[key]?.()
  }
</script>

<svelte:window {onkeyup} />

<button
  onclick={pressIgnition}
  class={`btn btn-soft btn-circle rounded-full opacity-85 w-[12vh] h-[7vh] border-[1vh] ${
    power.onOff ? 'border-info' : 'border-warning'
  }`}
>
  <Dot class={`opacity-50 size-[6vh] ${power.onOff ? 'text-success' : ''}`} />
</button>
