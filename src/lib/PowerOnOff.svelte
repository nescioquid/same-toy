<script>
  import { Dot } from '@lucide/svelte'

  let isOn = false

  function onclick() {
    if (isOn) return
    isOn = !isOn
  }
</script>

<button
  {onclick}
  class={`btn btn-soft btn-circle rounded-full opacity-85 h-[6vh] w-[12vh] border-6 ${
    isOn ? 'border-info' : 'border-warning'
  }`}
>
  <Dot class="opacity-50 size-[6vh]" />
</button>
