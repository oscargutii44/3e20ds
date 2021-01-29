//Dirigida = Asimétrica
let matrizDirigida = [
    [0,1,0,1,0,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,1],
    [0,1,0,0,0,0],
    [0,0,0,1,0,0],
    [0,0,0,0,0,1]
];
//No dirigida = Simétrica
let matrizNoDirigida = [
    [0,1,0,0,1],
    [1,0,1,1,1],
    [0,1,0,1,0],
    [0,1,1,0,1],
    [1,1,0,1,0]
];

function isDigraph(g) {
    for (let r = 0; r < g.length; r++){
        for (let c = 0; c < g.length; c++){
            let a = g[r][c];
            let b = g[c][r]; 
            if (a != b) return true;
        }
    }
    return false;
}

console.log(isDigraph(matrizDirigida));
console.log(isDigraph(matrizNoDirigida));