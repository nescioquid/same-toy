<script>
  import {
    ChevronUp,
    ChevronRight,
    ChevronDown,
    ChevronLeft,
  } from '@lucide/svelte'
</script>

<div class="relative size-[25vh]">
  <!-- Up -->
  <button title="Up"
    class="btn btn-circle btn-soft size-[9vh] opacity-85 border-[1vh] absolute top-0 left-1/2 -translate-x-1/2"
    ><ChevronUp class="size-[6vh] opacity-50" />
  </button>

  <!-- Right -->
  <button title="Right"
    class="btn btn-circle btn-soft size-[9vh] opacity-85 border-[1vh] absolute top-1/2 right-0 -translate-y-1/2"
    ><ChevronRight class="size-[6vh] opacity-50" />
  </button>

  <!-- Down -->
  <button title="Down"
    class="btn btn-circle btn-soft size-[9vh] opacity-85 border-[1vh] absolute bottom-0 left-1/2 -translate-x-1/2"
    ><ChevronDown class="size-[6vh] opacity-50" />
  </button>

  <!-- Left -->
  <button title="Left"
    class="btn btn-circle btn-soft size-[9vh] opacity-85 border-[1vh] absolute top-1/2 left-0 -translate-y-1/2"
    ><ChevronLeft class="size-[6vh] opacity-50" />
  </button>
</div>
