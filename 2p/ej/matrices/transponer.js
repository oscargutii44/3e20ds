let Matriz = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
    
];
let matrix = [];
for(let i=0; i<3; i++) {
    matrix[i]=[]
}

for (let i=0; i<Matriz.length; i++){
    console.log(Matriz[i]);
}

let transpose = Matriz[0].map((_, colIndex) => Matriz.map(row => row[colIndex]));

console.log('Transpuesta:')

for (let i=0; i<transpose.length; i++){
    console.log(transpose[i]);
}


// let Matriz = [
//     [1,2,3],
//     [1,2,3],
//     [1,2,3],
    
// ];
// let matrix = [];
// for(let i=0; i<3; i++) {
//     matrix[i]=[]
// }

// for (let i=0; i<Matriz.length; i++){
//     console.log(Matriz[i]);
// }



// class TransponerMatriz {
//     constructor() {}

//     transpose(){
//        let mat = Matriz[0].map((_, colIndex) => Matriz.map(row => row[colIndex]));
//         console.log('Transpuesta:')

//         for (let i=0; i<mat.length; i++){
//         console.log(mat[i]);
//         }
//     }
// }


// TransponerMatriz.transpose()