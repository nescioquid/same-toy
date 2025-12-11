<script>
  import { Plus, Minus } from '@lucide/svelte'

  let active = null

  const activate = (pressed) => {
    active = pressed
  }

  const pressA = () => activate('a')
  const pressB = () => activate('b')

  const handlers = {
    // o: pressA,
    // k: pressB,
    x: pressA,
    z: pressB,
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

<div class="relative size-[25vh]">
  <button
    title="A"
    onclick={pressA}
    class="btn btn-circle btn-success opacity-85 border-[1vh] size-[12vh] absolute right-0
    {active === 'a' ? 'btn-active' : ''}"
  >
    <Plus class="opacity-50 size-[9vh]" />
  </button>
  <button
    title="B"
    onclick={pressB}
    class="btn btn-circle btn-error opacity-85 border-[1vh] size-[12vh] absolute left-0 translate-y-1/1
    {active === 'b' ? 'btn-active' : ''}"
  >
    <Minus class="opacity-50 size-[9vh]" />
  </button>
</div>
