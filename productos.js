// CONFIGURACIÓN DE LA TIENDA
const TIENDA_CONFIG = {
  nombre: "Delicias Caseras", // Nombre de tu panadería/pastelería
  whatsapp: "59899150389",    // Tu número de WhatsApp (con código de país, SIN símbolos, SIN espacios. Ej: 598... para Uruguay)
  mensajeBase: "¡Hola! Quisiera hacer el siguiente pedido desde la web:",
  moneda: "$",                 // Símbolo de moneda
  mensajeEnvio: "Retiro por domicilio o consultar por envío en el pueblo",
};

// LISTADO DE PRODUCTOS
// Para agregar un producto nuevo: copia una de las secciones entre llaves {} y edita los campos.
// Para eliminar un producto: bórralo de la lista o cámbiale disponible a: false
//
// Si el producto tiene múltiples precios (por ejemplo, por Entero y por Porción),
// agrégale la lista 'precios' como en 'Pastel de Crema con Pasas de Uva'.
// Si tiene un solo precio fijo, usa el campo 'precio' común como en 'Empanadas Bien Rellenas'.
const PRODUCTOS = [
  {
    id: "empanadas-rellenas",
    nombre: "Empanadas Bien Rellenas",
    descripcion: "Jamón y queso",
    precio: 40,
    categoria: "Salados",
    icono: "factura",
    imagen: "images/empanadas.jpeg",
    disponible: true
  },
  {
    id: "pastel-olimpico",
    nombre: "Pastel Olímpico",
    descripcion: "Entero",
    precio: 550,
    categoria: "Salados",
    icono: "factura",
    imagen: "images/pastel olímpico.jpeg",
    disponible: true
  },
  {
    id: "pastel-crema-pasas",
    nombre: "Pastel de Crema con Pasas de Uva",
    descripcion: "",
    categoria: "Dulces",
    icono: "rosca",
    imagen: "images/pastel de crema con pasas .jpeg",
    disponible: true,
    precios: [
      { id: "entero", nombre: "Entero", precio: 480 },
      { id: "porcion", nombre: "La porción", precio: 140 }
    ]
  },
  {
    id: "cubano-chicharron",
    nombre: "Cubano con Chicharrón",
    descripcion: "",
    precio: 18,
    categoria: "Salados",
    icono: "pan",
    imagen: "images/cubano con chicharón.jpeg",
    disponible: true
  },
  {
    id: "pancitos-rellenos",
    nombre: "Pancitos",
    descripcion: "Salame y Queso - Queso y Jamón",
    precio: 25,
    categoria: "Salados",
    icono: "pan",
    imagen: "images/pancito.jpeg",
    disponible: true
  },
  {
    id: "pascualina-casera",
    nombre: "Pascualina",
    descripcion: "",
    categoria: "Salados",
    icono: "factura",
    imagen: "images/pascualina.jpeg",
    disponible: true,
    precios: [
      { id: "entera", nombre: "Entera", precio: 500 },
      { id: "porcion", nombre: "Porción", precio: 140 }
    ]
  },
  {
    id: "refuerzo-casero",
    nombre: "Refuerzo",
    descripcion: "",
    categoria: "Salados",
    icono: "pan",
    imagen: "images/refuerzo.jpeg",
    disponible: true,
    precios: [
      { id: "unitario", nombre: "c/u", precio: 150 },
      { id: "par", nombre: "Los 2", precio: 250 }
    ]
  },
  {
    id: "pastel-fiambre",
    nombre: "Pastel de Fiambre",
    descripcion: "",
    categoria: "Salados",
    icono: "factura",
    imagen: "images/pastel de fiambre.jpeg",
    disponible: true,
    precios: [
      { id: "entero", nombre: "Entero", precio: 480 },
      { id: "porcion", nombre: "Porción", precio: 140 }
    ]
  },
  {
    id: "bizcochos",
    nombre: "Bizcochos de crema, croissants y tipo dona",
    descripcion: "Margarita con crema, croissants con membrillo, tipo dona con membrillo y tipo dona de chocolate",
    precio: " a Consultar",
    categoria: "Dulces",
    icono: "pan",
    imagen: "images/f4ae27eb-10a8-4315-bf67-9318bc8326b1.jpg",
    disponible: true
  }
];
