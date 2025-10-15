let productos = [
{ nombre: "helado de chocolate", precio: 15, stock: 5, categoria: "helado", activo: true },
{ nombre: "helado de pistacho", precio: 25, stock: 2, categoria: "helado", activo: true },
{ nombre: "helado de dulce de leche", precio: 20, stock: 4, categoria: "helado", activo: false },
{ nombre: "helado de frutilla ", precio: 10, stock: 6, categoria: "helado", activo: true },
{ nombre: "helado de crema granizada", precio: 5, stock: 3, categoria: "helado", activo: true },
];
let activos = productos.filter(p => p.activo);
let promedio = activos.reduce((acc, p) => acc + p.precio, 0) / activos.length;

console.log("Precio promedio de activos:", promedio);

let totalStock = productos.reduce((acc, p) => acc + p.stock, 0);

console.log("Total de stock general:", totalStock);

let cantidadPorCategoria = productos.reduce((acc, p) => {
acc[p.categoria] = (acc[p.categoria] || 0) + 1;
return acc;
}, {});

console.log("Cantidad por categoría:", cantidadPorCategoria);
