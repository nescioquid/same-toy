<script>
  import {
    ChevronUp,
    ChevronRight,
    ChevronDown,
    ChevronLeft,
  } from '@lucide/svelte'

  let active = null // "up" | "left" | "down" | "right" | null

  const activate = (pressed) => {
    active = pressed
  }

  const moveUp = () => activate('up')
  const moveLeft = () => activate('left')
  const moveDown = () => activate('down')
  const moveRight = () => activate('right')

  const handlers = {
    // w: moveUp,
    // a: moveLeft,
    // s: moveDown,
    // d: moveRight,
    arrowup: moveUp,
    arrowleft: moveLeft,
    arrowdown: moveDown,
    arrowright: moveRight,
  }

  function onkeydown(event) {
    const key = event.key.toLowerCase()
    event.preventDefault()
    handlers[key]?.()
  }

  function onkeyup(event) {
    active = null
  }
</script>

<svelte:window {onkeydown} {onkeyup} />

<div class="relative size-[25vh]">
  <button
    title="Up"
    onclick={moveUp}
    class="btn btn-circle btn-soft size-[9vh] opacity-85 border-[1vh] absolute top-0 left-1/2 -translate-x-1/2
    {active === 'up' ? 'btn-active' : ''}"
    ><ChevronUp class="size-[6vh] opacity-50" />
  </button>
  <button
    title="Left"
    onclick={moveLeft}
    class="btn btn-circle btn-soft size-[9vh] opacity-85 border-[1vh] absolute top-1/2 left-0 -translate-y-1/2
    {active === 'left' ? 'btn-active' : ''}"
    ><ChevronLeft class="size-[6vh] opacity-50" />
  </button>

  <button
    title="Down"
    onclick={moveDown}
    class="btn btn-circle btn-soft size-[9vh] opacity-85 border-[1vh] absolute bottom-0 left-1/2 -translate-x-1/2
    {active === 'down' ? 'btn-active' : ''}"
    ><ChevronDown class="size-[6vh] opacity-50" />
  </button>

  <button
    title="Right"
    onclick={moveRight}
    class="btn btn-circle btn-soft size-[9vh] opacity-85 border-[1vh] absolute top-1/2 right-0 -translate-y-1/2
    {active === 'right' ? 'btn-active' : ''}"
    ><ChevronRight class="size-[6vh] opacity-50" />
  </button>
</div>
