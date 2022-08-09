/* Cree una función llamada  function gastoConIva() que acepte un número y devuelva ese número más el 21% que es el valor del IVA.
Luego crea una function map() que tome dos entradas o parámetros:
    un array de como valores números. 
    una función callback: esta función se aplica a cada elemento del array (dentro de la función map().
Haga que su function map() devuelva una nueva matriz llena de números que son el resultado de usar la función callback en cada elemento de la matriz de entrada.
*/

let precios = [["Auriculares", 4000], ["Teclado", 6500], ["Mouse", 3200], ["Parlantes", 8600], ["Monitor", 30000]];

console.log(precios);

function gastoConIva(num){
    return num*1.21;
}


function map(arreglo, callback){
    let preciosConIva = [["Auriculares"], ["Teclado"], ["Mouse"], ["Parlantes"], ["Monitor"]];
    for(let i = 0; i < arreglo.length; i++){
        preciosConIva[i][1] = callback(arreglo[i][1]);
    }
    return preciosConIva;
}

console.log(map(precios, gastoConIva));