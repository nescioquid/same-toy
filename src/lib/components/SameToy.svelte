<script>
  import AAndB from '$lib/components/sameToy/AAndB.svelte'
  import DPad from '$lib/components/sameToy/DPad.svelte'
  import Housing from '$lib/components/sameToy/Housing.svelte'
  import Logo from '$lib/components/sameToy/Logo.svelte'
  import Ignition from '$lib/components/sameToy/Ignition.svelte'
  import Screen from '$lib/components/sameToy/Screen.svelte'
  import Speaker from '$lib/components/sameToy/Speaker.svelte'
  import Start from '$lib/components/sameToy/Start.svelte'
</script>

<Housing>
  <!-- LEFT SIDE -->
  <div class="flex flex-col items-center gap-[6vh] flex-1">
    <Speaker class="flex-1" />
    <DPad class="flex-1" />
    <Ignition />
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
