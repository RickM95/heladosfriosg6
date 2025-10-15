import {
    filtrarPrecioMayor10,
    filtrarStockBajo,
    filtrarProductosActivos,
    ejecutarTodosLosFiltros
} from './jaharlen.js';

// Uso individual de cada función
console.log("=== USO INDIVIDUAL DE FUNCIONES ===");
let preciosAltos = filtrarPrecioMayor10([9, 10, 8, 11, 12, 15]);
let stockBajo = filtrarStockBajo([9, 10, 8, 11, 12, 15]);
let productosActivos = filtrarProductosActivos(["activo", "descontinuado", "activo", "descontinuado", "activo"]);

console.log("\n=== EJECUCIÓN MASIVA ===");
// Ejecutar todas las funciones juntas
ejecutarTodosLosFiltros();