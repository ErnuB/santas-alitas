<script>
  const saucesLeft = [
    { name: "Pimienta Limón", description: "Pimienta + limón. No hace falta decir más." },
    { name: "Miel Mostaza", description: "Dos mundos de sabores unidos en tus alitas." },
    { name: "Teriyaki", description: "Agridulce y ligeramente picante. Delicioso." },
    { name: "¡Nuevo! Naranja Chipotle", description: "Esta salsa combina la intensidad del chipotle con el dulzor de naranja, sabores ahumados y cítricos." },
    { name: "BBQ Hot", description: "Tradicional sabor BBQ con un remate picoso." },
    { name: "Ajo y Especias", description: "Lo que su nombre no te cuenta, es su toque picante." },
    { name: "¡Favorita! Buffalo", description: "Otro clásico que nosotros mejoramos." },
    { name: "Extra Hot", description: "Un sabor extra-deliciosamente picoso." },
    { name: "Santa Diabla", description: "¿Crees que no te picará? Espera un momento y sabrás" },
  ];

  const saucesRight = [
    { name: "Mezcal ¡Nuevo!", description: "Combinación de sabores ahumados y acidito destaca por su toque distintivo de mezcal." },
    { name: "Ajo Parmesano", description: "Si gustas de sabores fuertes, ésta es tu opción." },
    { name: "BBQ ¡Favorita!", description: "El clásico por excelencia con un toque ahumado." },
    { name: "Tamarindo", description: "1... 2... y 3..." },
    { name: "Cajún", description: "Un sabor picoso distinto a lo habitual." },
    { name: "Buffalo Ranch", description: "Sabemos que te gusta dippear, te ahorramos el trabajo." },
    { name: "Tamarindo Chipotle", description: "Dulces. Picositas. Pero deliciosas." },
    { name: "Mango Habanero", description: "Una mezcla tropical-enchilosa." },
    { name: "Santa Enchilada", description: "La receta más picosa de la casa ¿Aceptas el reto?" },
  ];
</script>

<div class="flex justify-center items-center h-auto py-2 z-50">
  <!-- Sauce Menu Container -->
  <div class="bg-gray-100 w-11/12 h-auto shadow-lg overflow-scroll">
    <div class="text-center">
      <h1 class="text-2xl py-2 text-white font-chunkfive [text-shadow:_-3px_4px_0px_#000000]" style="background-image: url(/img/madera.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;">¿Qué salsa quieres hoy?</h1>
    </div>

    <div class="flex justify-center gap-2 text-xs leading-none mt-2 h-auto">
      <!-- Left Column -->
      <div class="w-1/3 space-y-6">
        {#each saucesLeft as sauce}
          <div>
            <h2 class="font-bold">{sauce.name}</h2>
            <p class="text-gray-700 text-pretty">{sauce.description}</p>
          </div>
        {/each}
      </div>

      <!-- Center Divider -->
      <div class="w-1/3 flex flex-col justify-center relative">
        <div class="h-full bg-gradient-to-b from-green-500 from-0% via-yellow-500 via-20% to-red-700 to-60%"></div>
        <div 
          class="h-full bg-cover bg-center absolute inset-0" 
          style="background-image: url('/img/bg.png');"
        ></div>
      </div>
      
      <!-- Right Column -->
      <div class="w-1/3 space-y-6">
        {#each saucesRight as sauce}
          <div>
            <h2 class="font-bold">{sauce.name}</h2>
            <p class="text-gray-700">{sauce.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

  