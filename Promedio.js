
let total = 0;

const arreglo =  [1,8,4,7,2,9];
let n = arreglo.length

for (let i = 0; i < n ; i++) {
    total += arreglo[i]
    //console.log("Total " + i + " es " + Total)
}

const promedio = total / n;

// Imprimimos el resultado
console.log(promedio)
return promedio;
