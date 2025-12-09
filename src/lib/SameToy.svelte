<script>
  import AAndB from '$lib/AAndB.svelte'
  import DPad from '$lib/DPad.svelte'
  import Logo from '$lib/Logo.svelte'
  import PowerOn from '$lib/PowerOn.svelte'
  import Screen from '$lib/Screen.svelte'
  import Speaker from '$lib/Speaker.svelte'
  import Start from '$lib/Start.svelte'
</script>

<div
  class="card flex-row gap-[3vh] items-center justify-center bg-purple-700 border-[2vh] border-purple-800 rounded-4xl h-[80vh] w-[160vh] p-[6vh] pt-[9vh] opacity-95"
>
  <!-- LEFT SIDE -->
  <div class="flex flex-col items-center gap-[6vh] flex-1">
    <Speaker class="flex-1" />
    <DPad class="flex-1" />
    <PowerOn class="flex-1" />
    <div class="flex-1"></div>
    <div class="flex-1"></div>
  </div>

  <!-- CENTER -->
  <div class="flex flex-col items-center justify-center gap-[3vh] flex-4">
    <Screen />
    <Logo />
  </div>

  <!-- RIGHT SIDE -->
  <div class="flex flex-col items-center gap-[6vh] flex-1">
    <Speaker class="flex-1" />
    <AAndB class="flex-1" />
    <Start class="flex-1" />
    <div class="flex-1"></div>
    <div class="flex-1"></div>
  </div>
</div>
