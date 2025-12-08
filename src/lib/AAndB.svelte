<script>
  import { Plus, Minus } from '@lucide/svelte'
</script>

<div class="relative size-[25vh]">
  <button
    title="A"
    class="btn btn-circle btn-success opacity-90 border-6 size-[15vh] absolute right-0 -translate-y-2/3"
  >
    <Plus class="opacity-50 size-[10vh]" />
  </button>
  <button
    title="B"
    class="btn btn-circle btn-error opacity-90 border-6 size-[15vh] absolute left-0 translate-y-1/3"
  >
    <Minus class="opacity-50 size-[10vh]" />
  </button>
</div>
