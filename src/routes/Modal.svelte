<script>
  export let imageUrl;
  export let nombrePlatillo;
  export let closeModal;
</script>

<div class="fixed inset-0 flex items-center justify-center z-40">
  <!-- Background overlay -->
  <button class="fixed inset-0 bg-black opacity-80" on:click={closeModal}></button>
  
  <!-- Modal content -->
  <div class="relative bg-white rounded-lg shadow-lg w-[98%] max-w-4xl max-h-[80%]">
    <!-- Close button -->
    <button 
      class="absolute top-4 right-4 text-4xl text-red-500 hover:text-red-700" 
      on:click={closeModal}
    >
      <i class='bx bx-x'></i>
    </button>
    
    <!-- Dynamic Content -->
    {#if imageUrl}
      <img class="w-full m-auto" src={imageUrl} alt={nombrePlatillo} />
    {:else}
      <slot></slot>
    {/if}
  </div>
</div>

