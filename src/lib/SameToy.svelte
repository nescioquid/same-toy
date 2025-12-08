<script>
  export let title = 'SAME TOY ADVANCED'
</script>

<div class="flex justify-center p-6">
  <div
    class="card bg-purple-700 shadow-xl rounded-lg p-6 flex flex-col items-center"
  >
    <!-- TITLE -->
    <h2 class="text-center font-bold mb-4 tracking-widest text-3xl opacity-80">
      {title}
    </h2>

    <!-- Main console layout -->
    <div class="flex items-center justify-center gap-8">
      
      <!-- LEFT SIDE -->
      <div class="flex flex-col items-center gap-20 w-40">

        <!-- D-pad -->
        <div class="col-span-1 flex items-center justify-center">
          <div class="relative w-16 h-16">
            <!-- Vertical -->
            <div
              class="absolute inset-x-5 top-0 bottom-0 bg-gray-700 rounded"
            ></div>
            <!-- Horizontal -->
            <div
              class="absolute inset-y-5 left-0 right-0 bg-gray-700 rounded"
            ></div>

            <!-- Center knob -->
            <div
              class="absolute inset-0 m-auto bg-gray-800 rounded-full w-4 h-4"
            ></div>
          </div>
        </div>

        <!-- Start -->
        <button class="btn btn-base btn-default rounded-full px-5 text-sm">
          START
        </button>
      </div>

      <!-- SCREEN -->
      <div
        class="bg-black rounded-lg h-100 w-150 flex items-center justify-center mb-4 border-4 border-gray-700"
      >
        <slot>
          <span class="text-green-400 font-mono font-bold text-5xl opacity-50">
            INSERT GAME
          </span>
        </slot>
      </div>

      <!-- RIGHT SIDE -->
      <div class="flex flex-col items-center gap-6 w-40">

        <!-- A + B BUTTONS -->
        <div class="flex flex-col items-center gap-6">
          <button
            class="btn btn-circle btn-success w-20 h-20 text-2xl font-bold"
            >A</button
          >
          <button class="btn btn-circle btn-error w-20 h-20 text-2xl font-bold"
            >B</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
