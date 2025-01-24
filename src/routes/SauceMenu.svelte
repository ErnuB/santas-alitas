<script>
    const saucesLeft = [
      { name: "Pimienta Limón", description: "Pimienta + limón. No hace falta decir más." },
      { name: "Miel Mostaza", description: "Dos mundos de sabores unidos en tus alitas." },
      { name: "Teriyaki", description: "Agridulce y ligeramente picante. Delicioso." },
      { name: "¡Nuevo! Naranja Chipotle", description: "Combina el chipotle con el dulzor de naranja." },
      { name: "BBQ Hot", description: "Tradicional sabor BBQ con un remate picoso." },
      { name: "Ajo y Especias", description: "Como lo dice su nombre, tiene su toque picante." },
      { name: "¡Favorita! Buffalo", description: "Otro clásico que nosotros mejoramos." },
      { name: "Extra Hot", description: "Un sabor extra-deliciosamente picoso." },
      { name: "Santa Diabla", description: "¿Crees que no te picará? ¡Espera y sabrás!" },
    ];
  
    const saucesRight = [
      { name: "Mezcal ¡Nuevo!", description: "Sabores ahumados y ácidos, destaca por el mezcal." },
      { name: "Ajo Parmesano", description: "Si gustas de sabores fuertes, esta es tu opción." },
      { name: "BBQ ¡Favorita!", description: "El clásico con un toque ahumado." },
      { name: "Tamarindo", description: "1... 2... y 3..." },
      { name: "Cajún", description: "Un sabor picoso distinto a lo habitual." },
      { name: "Buffalo Ranch", description: "Para los que aman dippear, te ahorramos el trabajo." },
      { name: "Tamarindo Chipotle", description: "Dulces. Picositas. Pero deliciosas." },
      { name: "Mango Habanero", description: "Una mezcla tropical-enchilosa." },
      { name: "Santa Enchilada", description: "¿Aceptas el reto? La más picosa de la casa." },
    ];
  </script>
  
  <div class="bg-gray-100 p-4">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-orange-600">¿Qué salsa quieres hoy?</h1>
    </div>
  
    <div class="flex mt-8">
      <!-- Left Column -->
      <div class="w-1/3 space-y-6">
        {#each saucesLeft as sauce}
          <div>
            <h2 class="text-xl font-semibold text-blue-800">{sauce.name}</h2>
            <p class="text-gray-700">{sauce.description}</p>
          </div>
        {/each}
      </div>
  
      <!-- Center Divider -->
      <div class="w-1/3 flex flex-col justify-center">
        <div class="h-full bg-gradient-to-b from-green-500 via-yellow-500 to-red-500"></div>
      </div>
  
      <!-- Right Column -->
      <div class="w-1/3 space-y-6">
        {#each saucesRight as sauce}
          <div>
            <h2 class="text-xl font-semibold text-red-800">{sauce.name}</h2>
            <p class="text-gray-700">{sauce.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
  