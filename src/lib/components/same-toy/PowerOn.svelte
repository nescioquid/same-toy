<script>
  import { Dot } from '@lucide/svelte'
  let isOn = false
</script>

<button
  onclick={() => {
    if (isOn) return
    isOn = !isOn
  }}
  class={`btn btn-soft btn-circle rounded-full opacity-85 w-[12vh] h-[7vh] border-[1vh] ${
    isOn ? 'border-info' : 'border-warning'
  }`}
>
  <Dot class="opacity-50 size-[6vh]" />
</button>
