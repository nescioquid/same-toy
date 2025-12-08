<script>
  import AAndB from '$lib/AAndB.svelte'
  import DPad from '$lib/DPad.svelte'
  import PowerOnOff from '$lib/PowerOnOff.svelte'
  import Start from '$lib/Start.svelte'
</script>

<div
  class="card flex-row gap-[3vh] items-center justify-center bg-purple-700 border-9 border-purple-800 rounded-4xl h-[80vh] w-[160vh] p-[6vh] pt-[9vh]"
>
  <!-- LEFT SIDE -->
  <div class="flex flex-col items-center gap-[12vh] w-1/6">
    <!-- D-pad -->
    <DPad />
    <Start />
  </div>

  <!-- CENTER -->
  <div class="flex flex-col items-center justify-center gap-[2vh] w-4/6">
    <!-- Screen -->
    <div
      class="flex items-center justify-center bg-gray-950 rounded-2xl h-[60vh] w-[90vh] border-6 border-gray-800 opacity-85"
    >
      <slot>
        <span class="text-purple-300 font-mono text-[4vh] opacity-25">
          INSERT GAME
        </span>
      </slot>
    </div>
    <!-- Logo -->
    <h2
      class="text-center tracking-widest text-purple-900 text-[4vh] opacity-70"
    >
      <span class="font-semibold">SAME TOY</span>
      <span class="font-light"><em>PROGRESS</em></span>
    </h2>
  </div>

  <!-- RIGHT SIDE -->
  <div class="flex flex-col items-center gap-[6vh] w-1/6">
    <AAndB />
    <PowerOnOff />
  </div>
</div>
