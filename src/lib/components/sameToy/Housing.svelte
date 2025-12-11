<script>
  let theme = $state('light');
  let toggle; // reference to the checkbox

  function updateTheme() {
    theme = getComputedStyle(document.documentElement)
      .getPropertyValue('color-scheme')
      .trim();
  }

  $effect(() => {
    updateTheme();

    if (!toggle) return;

    toggle.addEventListener('change', updateTheme);
    return () => toggle.removeEventListener('change', updateTheme);
  });
</script>

<svelte:document onchange = {updateTheme} />

<!-- svelte-ignore slot_element_deprecated -->
<div
  class="card flex-row gap-[3vh] items-center justify-center border-[2vh] rounded-t-[17vh] rounded-b-[33vh] h-9/10 w-10/10 p-[6vh] pt-[9vh] opacity-90
  {theme === 'dark'
    ? ' bg-linear-to-t from-violet-800 to-indigo-600 border-violet-900'
    // Original mono theme
    // : ' bg-linear-to-t from-violet-700 to-indigo-500 border-violet-800'}"
    : ' bg-linear-to-t from-violet-700 to-indigo-500 border-violet-800'}"
>
  <slot />
</div>
