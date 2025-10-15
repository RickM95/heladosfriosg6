function calcularPrecioPromedioActivos() {
    let productosActivos = filtrarProductosActivos();

    if (productosActivos.length === 0) {
        console.log("No hay productos activos para calcular el promedio");
        return 0;
    }
    let totalPrecios = productosActivos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    let promedio = totalPrecios / productosActivos.length;
    return promedio;
}

function filtrarPrecioMayor10(precios) {
    let arrayMayoresQ10 = precios.filter((elemento) => elemento > 10);
    console.log("Productos con precio mayor a $10: ", arrayMayoresQ10);
    return arrayMayoresQ10;
}

function filtrarStockBajo(stocks) {
    let arrayMenosDe10Unidades = stocks.filter((elemento) => elemento < 10);
    console.log("Productos por debajo del stock: ", arrayMenosDe10Unidades);
    return arrayMenosDe10Unidades;
}
function calcularTotalStock() {
    const totalStock = hela2.reduce((acumulador, producto) => acumulador + producto.stock, 0);

    console.log("=== TOTAL DE STOCK GENERAL ===");
    console.log(`Total de stock: ${totalStock} unidades`);
    console.log("\n");

    return totalStock;
}
function filtrarProductosActivos(estados) {
    let arrayActivos = estados.filter((estado) => estado === "activo");
    console.log("Productos activos: ", arrayActivos);
    return arrayActivos;
}
function calcularProductosPorCategoria() {
    const categorias = {};

    hela2.forEach(producto => {
        if (categorias[producto.categoria]) {
            categorias[producto.categoria]++;
        } else {
            categorias[producto.categoria] = 1;
        }
    });

    console.log("=== PRODUCTOS POR CATEGORÍA ===");
    Object.keys(categorias).forEach(categoria => {
        console.log(`${categoria}: ${categorias[categoria]} productos`);
    });
    console.log("\n");

    return categorias;
}

export {
    calcularPrecioPromedioActivos, filtrarPrecioMayor10,
    filtrarStockBajo,
    filtrarProductosActivos
};
