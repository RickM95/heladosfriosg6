function Promedio(callback) {
    const productosActivos = productos.filter(producto => producto.estado === "activo");
    const totalPrecios = callback.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    const promedio = totalPrecios / productosActivos.length;
    return promedio;
}
export { Promedio }