let heladosConDescuento = hela2.map(hela2 => {
  return {
    nombre: hela2.nombre,
    categoria: hela2.categoria,
    precioConDescuento: (hela2.precio * 0.85).toFixed(2)
  };
});
console.log(heladosConDescuento);

export{heladosConDescuento};