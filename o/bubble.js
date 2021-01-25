let arr = [2,3,-4,5,-6]

function swap(i,m) {
    t = arr[i]
    arr[i] = arr[m]
    arr[m] = t
}

function bubble(arr) {
    for (let i = 0; i<arr.length; i++) {
        for (let k = 0; k<arr.length-1; k++) {
            if (arr[k] > arr[k+1]) {
                swap(k, k+1) //interchange elements
                //console.log(arr) - cada que hay un cambio
            }
        }
       console.log(arr)// - cada recorrido de k
    }

}

console.log('arreglo original')
console.log(arr)// before sorting
console.log('recorrido de k')
bubble(arr)//llamada a funcion
console.log(arr)