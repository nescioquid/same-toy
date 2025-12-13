<script>
  import Kaplay from '$lib/components/Kaplay.svelte'
  import { power } from '$lib/power.svelte'
  import { PowerOff } from '@lucide/svelte'
</script>

<div
  class="relative flex items-center justify-cente rounded-2xl h-[60vh] w-[96vh] border-[3vh] border-gray-800 shadow-xl"
>
  <Kaplay power={power.onOff} />

  {#if !power.onOff}
    <div
      class="absolute inset-0 pointer-events-none bg-linear-to-t from-violet-800 to-indigo-600"
    >
      <div
        class="flex items-center justify-center h-[54.1vh] w-[90.3vh] bg-linear-to-t from-gray-900 to-gray-800 opacity-90"
      >
        <span
          class="items-center justify-center text-gray-200 font-mono text-[6vh] opacity-20"
        >
          PLAY WITH ME
        </span>
      </div>
    </div>
  {/if}
</div>
