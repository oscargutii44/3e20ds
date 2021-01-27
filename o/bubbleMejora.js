/*
let a = prompt('Tamaño del array: ')
let b = parseFloat(a);
*/
let spins = 1;
function createArray(size){
    let arr = [];

    for(let i = size; i > 0; i--){
        arr.push(i);
    }
    return arr;
}

function bubble(arr) {
    for (let i = 0; i<arr.length; i++) {
        for (let k = 0; k<arr.length-i; k++) {
            if (arr[k] > arr[k+1]) {
                swap(k, k+1) //interchange elements
                //console.log(arr) - cada que hay un cambio
            }
        }
       //console.log(arr)// - cada recorrido de k
    }

}

function swap(i,m) {
    t = arr[i]
    arr[i] = arr[m]
    arr[m] = t

    //console.log(spins++, '-', i, m, 'SWAP', t, arr[i]);
}

let arr = createArray(10)
console.log('arreglo desordenado')
console.log(arr)
console.log('arreglo ordenado')
bubble(arr)
console.log(arr)