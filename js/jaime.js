let hela = [9,10,8,11,12,15];
let helad = ["activo", "descontinuado", "activo", "descontinuado","activo"]
let arrayMayoresQ10 = hela.filter(( elementosMayoresA10 ) => elementosMayoresA10 > 10 )
console.log("Prodtos con precio mayo a $10: " , arrayMayoresQ10);

let arrayMenosDe10Unidades = hela.filter(( porDebajoDeStock ) => porDebajoDeStock < 10 )
console.log("Productos por Debajo del sStock: " , arrayMenosDe10Unidades);

let arrayActivos = helad.filter(( activo ) => activo === "activo" )
console.log("Productos activos: " , arrayActivos);


