<script>
  import Modal from './Modal.svelte';
  import menuItems from '$lib/menuItems';
  import menuCategorias from '$lib/menuCategorias';
  import Footer from './Footer.svelte';
  import SauceMenu from './SauceMenu.svelte';
	import { writable } from 'svelte/store';

  const menuOpen = writable(false);
  let isModalOpen = false;
  let modalType = 'image';
  let selectedImageUrl = ""; // The image to display in the modal
  let selectedNombrePlatillo = ""; // The name to display in the modal

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section){
      section.scrollIntoView({ behavior: "smooth"});
    }
  }

  function openImageModal(image, nombre) {
    modalType = "image";
    selectedImageUrl = image;
    selectedNombrePlatillo = nombre;
    isModalOpen = true;
  }

  function openSauceModal() {
    modalType = "sauceMenu";
    selectedImageUrl = "";
    selectedNombrePlatillo = "";
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
    modalType = "";
  }

  // Function to filter platillos by category
  function filterPlatillos(categoria) {
    return menuItems.filter(platillo => platillo.categoria === categoria);
  }
</script>

<header>
  <div class="relative">
    <div class="absolute inset-0">
      <img src="/img/madera.jpg" alt="Madera" class="w-full h-full object-cover" />
    </div>
    <h2 class="relative mx-5 z-10 font-chunkfive text-7xl text-white [text-shadow:_-7px_6px_0px_#000000] py-4">
      Menú
    </h2>
    <div class="relative bg-black w-full [clip-path:polygon(0_30%,100%_0,100%_100%,0_100%)] flex -mt-4">
      <img src="/img/logo-santas-alitas.png" alt="Santas Alitas" class="z-30 pb-5 pt-10 px-24 overflow-hidden" />
    </div>
  </div>
</header>
<nav class="sticky top-0 z-40 bg-white shadow-md flex items-center justify-between px-4">
  <a href="#top" class="flex items-center p-2">
    <img src="/img/favicon.png" alt="Santas Alitas" class="h-12">
  </a>
  <button
  class="bg-red-600 text-white uppercase font-kenyan-coffee px-2 py-1 text-xl rounded hover:bg-red-900"
  on:click={openSauceModal}
>
  ¿Qué salsa quieres hoy?
</button>
<button on:click={() => menuOpen.set(!$menuOpen)}>
  <i class="text-4xl bx bx-menu"></i>
</button>
  {#if $menuOpen}
    <div>
      <ul class="absolute right-4 top-16 bg-white shadow-lg rounded-lg w-48">
        {#each menuCategorias.filter(categoria => 
          !["caguamon", "cero", "cuartitos", "nacionales", "premium", "inter", "barril", "micheladas", "cocteleria"].includes(categoria.id)
        ) as { id, nombre }}
        <li class="cursor-pointer text-xl text-negro font-grobold hover:bg-gray-100 px-4 py-1 font-outline-1 [text-shadow:_-2px_1px_0px_#000000]" on:click={() =>{
          scrollToSection(id); 
          menuOpen.set(false);
          }}>
          {nombre}
        </li>
        {/each}
      </ul>
    </div>
  {/if}
</nav>
<div>
  {#each menuCategorias as { id, nombre, observaciones }}
  <section id="{id}" class="relative">
    <!-- Section Header -->
    <h2 class="relative text-center z-10 font-chunkfive text-5xl font-outline-1 [text-shadow:_-5px_4px_0px_#000000] py-4">
      {nombre}
    </h2>

    {#if observaciones}
      <p class="text-center italic text-gray-500 mb-4">{observaciones}</p>
    {/if}

    <!-- Platillos -->
    <div class="relative z-10">
      {#each filterPlatillos(id) as platillo}
        {#if platillo.nombre === "titulo"}
          <!-- Special Layout for 'titulo' -->
          <div class="mx-12 text-center text-pretty -mt-2 font-bold italic">{platillo.descripcion}</div>
        {:else if platillo.nombre === "Santo Combo"}
        <div class="m-6 mr-1 inset-3 border-4 border-negro flex justify-evenly items-center">
          <span class="mx-2 max-w-[30%] font-chunkfive text-3xl font-outline-1 [text-shadow:_-2px_1px_0px_#000]">{platillo.nombre}</span>
          <span class="font-highvoltage max-w-[40%] uppercase">{platillo.descripcion}</span>
          
          <div class="text-5xl font-bold flex items-center gap-1 [text-shadow:_-3px_3px_0px_#fff]"><span class="text-2xl">$</span>{platillo.precio}</div>
        </div>
        {:else if platillo.nombre === "Combo Kid's"}
        <div class="bg-negro py-5 relative my-5">
          <!-- Image Positioned Absolutely -->
          <img 
            src="/img/mascarita-santa.png" 
            alt="Mascarita Santa" 
            class="absolute top-1/2 transform right-5 translate-y-[-50%] max-h-24"
          />
          <!-- Text Content -->
          <div class="mx-5">
            <span class="z-10 font-chunkfive text-4xl font-outline-2 text-white [text-shadow:_-1px_1px_0px_#fff] py-4">
              {platillo.nombre}
            </span>
            <p class="text-white font-highvoltage max-w-[60%]">
              {platillo.descripcion}
            </p>
          </div>
        </div>        
        {:else if platillo.nombre === "titulo-2"}
          <!-- Special Layout for 'titulo-2' -->
          <h2 class="relative mx-2 z-10 font-chunkfive text-3xl font-outline-1 py-4">{platillo.descripcion}</h2>
        {:else if id === "papa" || id === "hamburguesas" || id === "ensalada"}
          <!-- Custom Layout for Specific Categories -->
          <div class="flex justify-between mt-4 ml-10 text-2xl">
            {#if platillo.imagen}
            <div class="text-pretty gap-1 flex self-center uppercase font-highvoltage" on:click={() => openImageModal(platillo.imagen, platillo.nombre)}>
              {platillo.nombre}<i class="bx bxs-camera text-2xl text-gray-600 hover:text-black"></i>
              <span class="text-base ml-2">{platillo.observaciones}</span>
            </div>
            {:else}
            <div class="text-pretty uppercase font-highvoltage">
              {platillo.nombre}
              <span class="text-base ml-2">{platillo.observaciones}</span>
            </div>
            {/if}
            <div class="flex justify-end items-center w-12 font-highvoltage mr-4">
              <span class="text-lg">$</span>
              <span class="grow"></span>
              <span class="tabular-nums">{platillo.precio}</span>
            </div>
          </div>
          <div class="ml-10 text-pretty tracking-tight w-2/3 font-fira">
            {platillo.descripcion}
          </div>
        {:else if id === "cuartitos"}
          <!-- Special Layout for 'cuartitos' -->
          <div class="flex justify-between mt-4 mx-4 text-2xl">
            <div class="text-pretty uppercase font-highvoltage">
              {platillo.nombre}
            </div>
            <div class="flex justify-end items-center w-12 font-highvoltage gap-5">
              <span class="grow"></span>
              <span class="text-lg">$</span>
              <span class="tabular-nums">{platillo.precio}</span>
              {#if platillo.observaciones}
                <span class="tabular-nums">{platillo.observaciones}</span>
              {/if}
            </div>
          </div>
        {:else}
          <!-- Default Layout -->
          <div class="flex justify-between mt-4 mx-3 text-2xl">
            {#if platillo.imagen}
            <div class="flex items-center gap-2 text-pretty uppercase font-highvoltage cursor-pointer"
                 on:click={() => openImageModal(platillo.imagen, platillo.nombre)}>
              <!-- Platillo Name and Icon -->
              <span>{platillo.nombre}</span>
                <i class="bx bxs-camera text-2xl text-gray-600 hover:text-black"></i>
            </div>
            {:else}
            <div class="flex items-center gap-2 text-pretty uppercase font-highvoltage cursor-pointer">
              <!-- Platillo Name and Icon -->
              <span>{platillo.nombre}</span>
            </div>
            {/if}
            <div class="flex justify-end items-center w-12 font-highvoltage">
              <span class="text-lg">$</span>
              <span class="grow"></span>
              <span class="tabular-nums">{platillo.precio}</span>
            </div>
          </div>
          <div class="mx-3 text-pretty tracking-tight w-2/3 font-fira">
            {platillo.descripcion}
          </div>
        {/if}
      {/each}
    </div>
  </section>
  {/each}
</div>

<!-- Modal -->
{#if isModalOpen}
  <Modal 
    {closeModal}
    imageUrl = {selectedImageUrl}
    nombrePlatillo = {selectedNombrePlatillo}
    >
    {#if modalType === "sauceMenu"}
      <SauceMenu />
    {/if}
    </Modal>
{/if}

<Footer />
