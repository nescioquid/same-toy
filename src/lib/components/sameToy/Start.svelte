<script>
  import { Ellipsis } from '@lucide/svelte'

  let active = null

  const activate = (pressed) => {
    active = pressed
  }

  const pressStart = () => activate('start')

  const handlers = {
    // p: pressStart,
    // l: pressStart,
    enter: pressStart,
  }

  function onkeydown(event) {
    const key = event.key.toLowerCase()
    handlers[key]?.()
  }

  function onkeyup(event) {
    active = null
  }
</script>

<svelte:window {onkeydown} {onkeyup} />

<button
  title="Start"
  onclick={pressStart}
  class="rounded-full btn btn-soft opacity-85 w-[12vh] h-[7vh] border-[1vh]
  {active === 'start' ? 'btn-active' : ''}"
>
  <Ellipsis class="opacity-50 size-[6vh]" />
</button>
