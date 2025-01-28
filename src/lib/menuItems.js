const menuItems = [
  {
    categoria: "snacks",
    nombre: "Salchipulpos",
    descripcion: "Doraditos trozos de salchicha acompañados con catsup.",
    precio: " 74",
    imagen: "/img/salchipulpos.jpg",
    observaciones: "(240gr)"
  },
  {
    categoria: "snacks",
    nombre: "Papas a la francesa",
    descripcion: "Fritas en su ponto y sazonadas con el tradicional pimienta limón de la casa.",
    precio: " 85",
    imagen: "/img/papas-francesa.jpg",
    observaciones: "(300gr)"
  },
  {
    categoria: "snacks",
    nombre: "Aros de cebolla",
    descripcion: "Crujientes aros de cebolla empznizada servidos con aderezo ranch.",
    precio: " 87",
    imagen: "/img/aros.jpg",
    observaciones: "(8pz)"
  },
  {
    categoria: "snacks",
    nombre: "Munchers",
    descripcion: "Deliciosas bolitas rellenas de papa, queso y jalapeño.",
    precio: " 128",
    imagen: "/img/munchers.jpg",
    observaciones: "(12pz)"
  },
  {
    categoria: "snacks",
    nombre: "Nuggets",
    descripcion: "Suavecistos trozos de pollo con cubierta crujiente.",
    precio: " 80",
    imagen: "/img/nuggets.jpg",
    observaciones: "(10pz)"
  },
  {
    categoria: "snacks",
    nombre: "Papas Gajo",
    descripcion: "Doraditos gajos de papa con corteza servidos con aderezo ranch.",
    precio: " 94",
    imagen: "/img/papas-gajo.jpg",
    observaciones: "(270gr)"
  },
  {
    categoria: "snacks",
    nombre: "Vegetales",
    descripcion: "Bastones de apio y zanahoria acompañados con aderezo ranch.",
    precio: " 57",
    imagen: "/img/vegetales.jpg",
    observaciones: "(200gr)"
  },
  {
    categoria: "especiales",
    nombre: "Nachos Mexicanos",
    descripcion: "Totopos con queso gratinado, frijoles, arrachera y salsa mexicana.",
    precio: " 164",
    imagen: "",
    observaciones: "(250gr)"
  },
  {
    categoria: "especiales",
    nombre: "Dedos de queso",
    descripcion: "Palitos de queso mozzarella empanizados con especias",
    precio: " 129",
    imagen: "/img/dedos.jpg",
    observaciones: "(6pz)"
  },
  {
    categoria: "especiales",
    nombre: "Santas papitas",
    descripcion: "Papas a la francesa bañadas en nuestra salsa buffalo-ranch.",
    precio: " 95",
    imagen: "/img/santas-papitas.jpg",
    observaciones: "(300gr)"
  },
  {
    categoria: "especiales",
    nombre: "Orden de tacos de arrachera",
    descripcion: "Arrachera marinada calidad Premium sobre tortilla de maíz. Incluye (130grs.) de papas a la francesa.",
    precio: " 110",
    imagen: "",
    observaciones: "(2pz)"
  },
  {
    categoria: "especiales",
    nombre: "Taco de arrachera",
    descripcion: "Arrachera marinada calidad Premium sobre tortilla de maíz.",
    precio: " 45",
    imagen: "",
    observaciones: "(1pz)"
  },
  {
    categoria: "especiales",
    nombre: "Papas con queso/Tocino",
    descripcion: "Papas a la francesa bañadas en queso gratinado y tocino.",
    precio: " 127",
    imagen: "/img/papas-queso.jpg",
    observaciones: "(300gr)"
  },
  {
    categoria: "especiales",
    nombre: "Nachos Clásicos ",
    descripcion: "Totopos bañados en queso amarillo acompañados de chile jalapeño.",
    precio: " 94",
    imagen: "/img/nachos.jpg",
    observaciones: "(250gr)"
  },
  {
    categoria: "hamburguesas",
    nombre: "titulo",
    descripcion: "Acompañadas de papas a la francesa (130gr)",
    precio: " 0",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "hamburguesas",
    nombre: "Tradicional",
    descripcion: "Ricos champiñones, tocino, queso amarillo, queso manchego y deliciosa carne de res (150gr).",
    precio: " 155",
    imagen: "/img/hamburguesa.jpg",
    observaciones: ""
  },
  {
    categoria: "hamburguesas",
    nombre: "De Boneless",
    descripcion: "(130gr) de Jugosa pechuga de pollo empanizado crujiente y bañada en salsa de su elección.",
    precio: " 178",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "hamburguesas",
    nombre: "Santa Hamburguesa",
    descripcion: "Doble carne premium (300gr) aros de cebolla, queso amarillo, tocino y salsa BBQ.",
    precio: " 198",
    imagen: "/img/santa-hamburguesa.jpg",
    observaciones: ""
  },
  {
    categoria: "hamburguesas",
    nombre: "De Pollo",
    descripcion: "Tocino, champiñones, queso amarillo, queso manchego y (110gr) de pollo.",
    precio: " 145",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "papa",
    nombre: "titulo",
    descripcion: "(450gr) Preparada con tocino, champiñon, queso, ranch, cebollín y parmesano.",
    precio: " 0",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "papa",
    nombre: "Tradicional",
    descripcion: "",
    precio: " 159",
    imagen: "/img/papa.jpg",
    observaciones: ""
  },
  {
    categoria: "papa",
    nombre: "Arrachera",
    descripcion: "",
    precio: " 205",
    imagen: "/img/papa-arrachera.jpg",
    observaciones: "(100gr)"
  },
  {
    categoria: "ensalada",
    nombre: "titulo",
    descripcion: "Mezcla de lechugas, jitomate y zanahoria con aderezo aparte.",
    precio: "",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "ensalada",
    nombre: "Boneless bañados",
    descripcion: "",
    precio: " 145",
    imagen: "/img/ensalada-boneless.jpg",
    observaciones: "(130gr)"
  },
  {
    categoria: "ensalada",
    nombre: "Pechuga a la plancha",
    descripcion: "",
    precio: " 149",
    imagen: "",
    observaciones: "(100gr)"
  },
  {
    categoria: "nuevo",
    nombre: "Boneless Fries",
    descripcion: "Papas a la francesa(300gr) con Boneless(130gr) bañados en nuestra salsa bufalo o BBQ acompañado de aderezo chipotle, queso gratindao, queso amarillo y ranch",
    precio: " 169",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "nuevo",
    nombre: "Atascadín",
    descripcion: "Boneless(130gr) + Alitas(270gr) + Dedos de queso(2pz) + Aros de cebolla(2pz) + Papas a la francesa sazonadas(130gr) elige tus salsas favoritas. Acompañado con ranch.",
    precio: " 219",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "nuevo",
    nombre: "Santo Trio",
    descripcion: "Hambuerguesa Clásica + Papas a la francesa(130gr) + Boneless(130gr) o Alitas(270gr).",
    precio: " 199",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "nuevo",
    nombre: "Santo Combo",
    descripcion: "Hamburguesa de res + Papas a la francesa(130gr) + Ampolleta o refresco.",
    precio: " 99",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "nuevo",
    nombre: "Combo Kid's",
    descripcion: "Hamburguesa de res o Nuggets + Papas a la francesa(130gr) + Jugo(200ml).",
    precio: " 87",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "alitas",
    nombre: "titulo",
    descripcion: "",
    precio: " 0",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "alitas",
    nombre: "270gr",
    descripcion: "",
    precio: " 109",
    imagen: "/img/alitas-270.jpg",
    observaciones: ""
  },
  {
    categoria: "alitas",
    nombre: "550gr",
    descripcion: "",
    precio: " 165",
    imagen: "/img/alitas-550.jpg",
    observaciones: ""
  },
  {
    categoria: "alitas",
    nombre: "820gr",
    descripcion: "",
    precio: " 229",
    imagen: "/img/alitas-1k.jpg",
    observaciones: ""
  },
  {
    categoria: "boneless",
    nombre: "titulo",
    descripcion: "",
    precio: " 0",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "boneless",
    nombre: "130gr",
    descripcion: "",
    precio: " 109",
    imagen: "/img/boneless-130.jpg",
    observaciones: ""
  },
  {
    categoria: "boneless",
    nombre: "270gr",
    descripcion: "",
    precio: " 165",
    imagen: "/img/boneless-270.jpg",
    observaciones: ""
  },
  {
    categoria: "boneless",
    nombre: "400gr",
    descripcion: "",
    precio: " 229",
    imagen: "/img/boneless-500.jpg",
    observaciones: ""
  },
  {
    categoria: "caguamon",
    nombre: "Tecate Light",
    descripcion: "",
    precio: " 99",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "caguamon",
    nombre: "Tecate Roja",
    descripcion: "",
    precio: " 99",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "caguamon",
    nombre: "Indio",
    descripcion: "",
    precio: " 99",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "caguamon",
    nombre: "Miller",
    descripcion: "",
    precio: " 109",
    imagen: "",
    observaciones: "(910ml)"
  },
  {
    categoria: "cero",
    nombre: "Refresco",
    descripcion: "",
    precio: " 40",
    imagen: "",
    observaciones: "(355ml)"
  },
  {
    categoria: "cero",
    nombre: "Limonada",
    descripcion: "",
    precio: " 40",
    imagen: "",
    observaciones: "(500ml)"
  },
  {
    categoria: "cero",
    nombre: "Té Helado",
    descripcion: "",
    precio: " 40",
    imagen: "",
    observaciones: "(600ml)"
  },
  {
    categoria: "cero",
    nombre: "Agua Mineral",
    descripcion: "",
    precio: " 40",
    imagen: "",
    observaciones: "(355ml)"
  },
  {
    categoria: "cero",
    nombre: "Agua Natural",
    descripcion: "",
    precio: " 40",
    imagen: "",
    observaciones: "(500ml)"
  },
  {
    categoria: "cero",
    nombre: "Fresa Kiwi",
    descripcion: "",
    precio: " 40",
    imagen: "",
    observaciones: "(500ml)"
  },
  {
    categoria: "cero",
    nombre: "Fresa Limón",
    descripcion: "",
    precio: " 40",
    imagen: "",
    observaciones: "(500ml)"
  },
  {
    categoria: "cero",
    nombre: "Heineken 0.0",
    descripcion: "",
    precio: " 38",
    imagen: "",
    observaciones: "(250ml)"
  },
  {
    categoria: "cero",
    nombre: "Limonada",
    descripcion: "",
    precio: " 74",
    imagen: "",
    observaciones: "(1L)"
  },
  {
    categoria: "cero",
    nombre: "Fresa Kiwi",
    descripcion: "",
    precio: " 74",
    imagen: "",
    observaciones: "(1L)"
  },
  {
    categoria: "cero",
    nombre: "Fresa Limón",
    descripcion: "",
    precio: " 74",
    imagen: "",
    observaciones: "(1L)"
  },
  {
    categoria: "cuartitos",
    nombre: "",
    descripcion: "",
    precio: "(1pz)",
    imagen: "",
    observaciones: "(8pz)"
  },
  {
    categoria: "cuartitos",
    nombre: "Tecate Light",
    descripcion: "",
    precio: " 25",
    imagen: "",
    observaciones: "144"
  },
  {
    categoria: "cuartitos",
    nombre: "Tecate Roja",
    descripcion: "",
    precio: " 25",
    imagen: "",
    observaciones: "144"
  },
  {
    categoria: "cuartitos",
    nombre: "Indio",
    descripcion: "",
    precio: " 25",
    imagen: "",
    observaciones: "144"
  },
  {
    categoria: "cuartitos",
    nombre: "XX Lager",
    descripcion: "",
    precio: " 25",
    imagen: "",
    observaciones: "144"
  },
  {
    categoria: "nacionales",
    nombre: "Tecate Light",
    descripcion: "",
    precio: " 42",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "nacionales",
    nombre: "Indio",
    descripcion: "",
    precio: " 42",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "nacionales",
    nombre: "XX Lager",
    descripcion: "",
    precio: " 42",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "premium",
    nombre: "Amstell Ultra",
    descripcion: "",
    precio: " 50",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "premium",
    nombre: "Bohemia",
    descripcion: "",
    precio: " 50",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "inter",
    nombre: "Heineken",
    descripcion: "",
    precio: " 54",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "inter",
    nombre: "Miller",
    descripcion: "",
    precio: " 54",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "barril",
    nombre: "Tarro",
    descripcion: "",
    precio: " 94",
    imagen: "",
    observaciones: "(1L)"
  },
  {
    categoria: "barril",
    nombre: "Tritón",
    descripcion: "",
    precio: " 395",
    imagen: "",
    observaciones: "(5L)"
  },
  {
    categoria: "micheladas",
    nombre: "Clásica",
    descripcion: "Clamato, combinado con salsas y cerveza a elección(clara/oscura).",
    precio: " 110",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "micheladas",
    nombre: "titulo",
    descripcion: "De Sabor",
    precio: " 0",
    imagen: "",
    observaciones: "(1L)"
  },
  {
    categoria: "micheladas",
    nombre: "Mango - Chamoy",
    descripcion: "",
    precio: " 110",
    imagen: "",
    observaciones: "(1Lt)"
  },
  {
    categoria: "micheladas",
    nombre: "Tamarindo",
    descripcion: "",
    precio: " 110",
    imagen: "",
    observaciones: "(1Lt)"
  },
  {
    categoria: "micheladas",
    nombre: "Mango",
    descripcion: "",
    precio: " 110",
    imagen: "",
    observaciones: "(1Lt)"
  },
  {
    categoria: "cocteleria",
    nombre: "titulo",
    descripcion: "Coctelería Jueves 2X1 *Aplica Piña coloda y Mangonada*",
    precio: " 0",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "cocteleria",
    nombre: "titulo-2",
    descripcion: "Bebidas con Alcohol",
    precio: " 0",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "cocteleria",
    nombre: "Baby Mango",
    descripcion: "Mango congelado, tequila, chamoy, tajín, y una banderilla de tamarindo enchilada.",
    precio: " 125",
    imagen: "",
    observaciones: "(600ml)"
  },
  {
    categoria: "cocteleria",
    nombre: "Skwinkle Cantaro",
    descripcion: "Chamoy, tajín, refesco de toronja, jugo de naranja, nieve de limón, banderilla de tamarindo y skwinkles salsagueti.",
    precio: " 95",
    imagen: "",
    observaciones: "(400ml)"
  },
  {
    categoria: "cocteleria",
    nombre: "Cantarito Clásico",
    descripcion: "Chamoy, tajín, regresco de toronja y jugo de naranja.",
    precio: " 69",
    imagen: "",
    observaciones: "(400ml)"
  },
  {
    categoria: "cocteleria",
    nombre: "Paloma Clásica",
    descripcion: "Tequila, limón, sal, refresco de toronja y tajín.",
    precio: " 65",
    imagen: "",
    observaciones: "(400ml)"
  },
  {
    categoria: "cocteleria",
    nombre: "Paloma Flamingo",
    descripcion: "Granadina, tequila, limón, sal, refresco de toronja y tajón.",
    precio: " 95",
    imagen: "",
    observaciones: "(600ml)"
  },
  {
    categoria: "cocteleria",
    nombre: "Piña Colada",
    descripcion: "Licor de coco, ron blando o vainilla, crema de coco, jugo de piña y cereza.",
    precio: " 85",
    imagen: "",
    observaciones: "(380ml)"
  },
  {
    categoria: "cocteleria",
    nombre: "Margarita Tradicional Frozen",
    descripcion: "Tequila, licor de naranja, jugo de limón, jarebe, chamoy y tajín.",
    precio: " 85",
    imagen: "",
    observaciones: "(266ml)"
  },
  {
    categoria: "cocteleria",
    nombre: "titulo-2",
    descripcion: "Bebidas sin Alcohol",
    precio: " 0",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "cocteleria",
    nombre: "Chamoyada Tamarindo",
    descripcion: "Pulpa de tamarindo, mango congelado, chamoy, tajín, agua, limón y una banderilla de tamarindo.",
    precio: " 85",
    imagen: "",
    observaciones: "(500ml)"
  },
  {
    categoria: "cocteleria",
    nombre: "Cookies & Chocomentada",
    descripcion: "Nieve de oreo o vainilla, leche, oreo, chocolate, creama batida y cocoa.",
    precio: " 95",
    imagen: "",
    observaciones: "(370ml)"
  },
  {
    categoria: "cocteleria",
    nombre: "Mangonada",
    descripcion: "Mango congelado, limón, chamoy, tajín, banderilla de tamarindo y jugo de mango.",
    precio: " 90",
    imagen: "",
    observaciones: "(500ml)"
  },
  {
    categoria: "cocteleria",
    nombre: "Piñada",
    descripcion: "Crema de coco, jugo de piña y cereza.",
    precio: " 79",
    imagen: "",
    observaciones: "(380ml)"
  },
  {
    categoria: "caja",
    nombre: "Caja Atascada 1",
    descripcion: "Incluye: Alitas 550g, Santas Papitas 300g, Munchers 8pz, Salchipulpos 120g, Dedos Queso 4pz, Nuggets 6pz, Aros Cebolla 6pz, 2 Dip Ranch y 1 Dip Catsup. *En caso de no contar con alguno de los snacks se cambiaran por papas gajo.",
    precio: " 439",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "caja",
    nombre: "Caja Atascada 2",
    descripcion: "Incluye: Alitas 550g, Santas Papitas 300g, Salchipulpos 120g, Dedos Queso 4pz, Nuggets 6pz, Aros Cebolla 6pz, Boneless 130g, 2 Dip Ranch y 1 Dip Catsup. *En caso de no contar con alguno de los snacks se cambiaran por papas gajo.",
    precio: " 519",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "combos",
    nombre: "Combo 1",
    descripcion: "20 Alitas + Dedos de queso(6pz) + Papas a la francesa(300gr) + Munchers(12pz)",
    precio: " 519",
    imagen: "",
    observaciones: ""
  },
  {
    categoria: "combos",
    nombre: "Combo 2",
    descripcion: "15 Alitas + Boneless(400gr) + Papas gajo(270gr) + Aros de Cebolla(8pz) + Munchers(12pz)",
    precio: " 570",
    imagen: "",
    observaciones: ""
  },
];

export default menuItems;
