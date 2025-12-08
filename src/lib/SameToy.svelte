<script>
  import DPad from '$lib/DPad.svelte'
  import { Plus, Minus, X, Ellipsis } from '@lucide/svelte'

  export let title = 'SAME TOY ADVANCED'
</script>

<div
  class="card bg-purple-700 border-9 border-purple-800 shadow-xl rounded-lg p-6 flex flex-col items-center"
>
  <!-- TITLE -->
  <h2
    class="text-center font-bold mb-4 tracking-widest text-purple-950 text-3xl opacity-50"
  >
    {title}
  </h2>

  <!-- Main console layout -->
  <div class="flex items-center justify-center gap-8">
    <!-- LEFT SIDE -->
    <div class="flex flex-col items-center gap-20 w-40">
      <!-- D-pad -->
      <DPad />

      <!-- Start -->
      <button
        title="Start"
        class="btn btn-soft opacity-85 border-6 w-20 rounded-full"
      >
        <Ellipsis class="opacity-50" />
      </button>
    </div>

    <!-- SCREEN -->
    <div
      class="bg-gray-950 rounded-lg h-100 w-150 flex items-center justify-center mb-12 border-6 border-gray-800 opacity-85"
    >
      <slot>
        <span class="text-purple-300 font-mono text-4xl opacity-25">
          INSERT GAME
        </span>
      </slot>
    </div>

    <!-- RIGHT SIDE -->
    <div class="flex flex-col items-center gap-6 w-40">
      <!-- A + B BUTTONS -->
      <div class="flex flex-col items-center gap-20">
        <button
          title="A"
          class="btn btn-circle btn-success opacity-90 border-6 w-20 h-20"
          ><Plus class="h-10 w-10 opacity-50" /></button
        >
        <button
          title="B"
          class="btn btn-circle btn-error opacity-90 border-6 w-20 h-20"
          ><Minus class="h-10 w-10 opacity-50" /></button
        >
      </div>
    </div>
  </div>
</div>
