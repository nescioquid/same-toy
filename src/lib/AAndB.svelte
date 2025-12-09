<script>
  import { Plus, Minus } from '@lucide/svelte'
</script>

<div class="relative size-[25vh]">
  <button
    title="A"
    class="btn btn-circle btn-success opacity-85 border-[1vh] size-[12vh] absolute right-0"
  >
    <Plus class="opacity-50 size-[9vh]" />
  </button>
  <button
    title="B"
    class="btn btn-circle btn-error opacity-85 border-[1vh] size-[12vh] absolute left-0 translate-y-1/1"
  >
    <Minus class="opacity-50 size-[9vh]" />
  </button>
</div>
