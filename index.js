
let peso = 6;
let distancia = 120;


let costoBase = 50.00;
let recargoPeso = 0;
let recargoDistancia = 0;

// Calculo de recargo por peso 
if (peso > 5) {
    recargoPeso = (peso - 5) * 20.00;
}

// Calculo de recargo por distancia 
if (distancia > 50) {
    recargoDistancia = (distancia - 50) * 10.00;
}


let costoTotal = costoBase + recargoPeso + recargoDistancia;

// Calculo de  fecha estimada de entrega 
let hoy = new Date();

let diasTotales = 2 + Math.floor(distancia / 100); 
hoy.setDate(hoy.getDate() + diasTotales);

let anio = hoy.getFullYear();
let mes = String(hoy.getMonth() + 1).padStart(2, '0');
let dia = String(hoy.getDate()).padStart(2, '0');
let fechaEstimada = `${anio}-${mes}-${dia}`;


console.log("Costo base: L" + costoBase.toFixed(2));
if (recargoPeso > 0) {
    console.log("Recargo por peso: L" + recargoPeso.toFixed(2));
}

console.log("Costo total: L" + costoTotal.toFixed(2));

console.log("Fecha estimada de entrega: " + fechaEstimada);