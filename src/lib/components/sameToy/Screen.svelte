<script>
  import Kaplay from '$lib/components/Kaplay.svelte'
  import { power } from '$lib/power.svelte'
</script>

<div
  class="flex items-center justify-center bg-gray-900 rounded-2xl h-[60vh] w-[90vh] border-[3vh] border-gray-700 opacity-90"
>
  {#if power.onOff}
    <!-- <span class="text-gray-600 font-mono text-[6vh] opacity-70">
      HELLO WORLD
    </span> -->
    <Kaplay />
  {:else}
    <span class="text-gray-600 font-mono text-[6vh] opacity-70">
      PLAY WITH ME
    </span>
  {/if}
</div>
