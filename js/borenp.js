// • 1. Crear un array de objetos con al menos 15 productos (helados). Cada objeto debe tener:
// nombre, sabor, precio, stock, categoría y estado (activo o descontinuado).
// • 2. Mostrar todos los productos en consola usando forEach.

let hela2=[
    {
        nombre: "Iron Mango",
        sabor: "Mango y nuez",
        precioD: 20,
        stock: 110,
        categoria: "marvel",
        estado: "activo",
    },
    {
        nombre: "Helado Oscuro",
        sabor: "mora y uva",
        precio: 50,
        stock: 50,
        categoria: "star wars",
        estado: "activo",
    },
    {
        nombre: "Cerveza de mantequilla",
        sabor: "vainilla y caramelo",
        precio: 70,
        stock: 9,
        categoria: "harry potter",
        estado: "inactivo",
    },
    {
        nombre: "Heladolnir",
        sabor: "morazul y chicle",
        precio: 10,
        stock: 4,
        categoria: "marvel",
        estado: "inactivo",
    }
];

hela2.forEach(console.log);