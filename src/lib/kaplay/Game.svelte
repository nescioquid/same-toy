<script>
  import { browser } from '$app/environment'
  import kaplay from 'kaplay'
  import { onMount } from 'svelte'

  let container
  let k

  $effect(() => {
    k = kaplay({
      root: container,
      width: container.clientWidth,
      height: container.clientHeight,
      global: false,
      letterbox: true,
    })

    k.loadSprite('bean', '/sprites/bean.png')

    // Create player
    const player = k.add([
      k.pos(container.clientWidth / 2, container.clientHeight / 2),
      k.sprite('bean'),
    ])

    // Movement logic
    const speed = 250

    const moveUp = () => player.move(0, -speed)
    const moveLeft = () => player.move(-speed, 0)
    const moveDown = () => player.move(0, speed)
    const moveRight = () => player.move(speed, 0)

    // Interaction logic
    const aButton = () => k.addKaboom(player.pos)
    const bButton = () => k.addKaboom(player.pos)
    const startButton = () => k.addKaboom(player.pos)

    const handlers = {
      w: moveUp,
      a: moveLeft,
      s: moveDown,
      d: moveRight,
      up: moveUp,
      left: moveLeft,
      down: moveDown,
      right: moveRight,
      x: aButton,
      z: bButton,
      enter: startButton,
    }

    k.onKeyDown((key) => handlers[key]?.())

</script>

<div bind:this={container} class="w-full h-full overflow-hidden"></div>
