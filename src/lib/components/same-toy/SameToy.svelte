<script>
  import AAndB from '$lib/components/same-toy/AAndB.svelte'
  import DPad from '$lib/components/same-toy/DPad.svelte'
  import Housing from '$lib/components/same-toy/Housing.svelte'
  import Logo from '$lib/components/same-toy/Logo.svelte'
  import PowerOn from '$lib/components/same-toy/PowerOn.svelte'
  import Screen from '$lib/components/same-toy/Screen.svelte'
  import Speaker from '$lib/components/same-toy/Speaker.svelte'
  import Start from '$lib/components/same-toy/Start.svelte'
</script>

<Housing>
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
</Housing>
