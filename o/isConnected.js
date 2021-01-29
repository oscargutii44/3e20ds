let connectedMatrix = [
    [0,1,0,1],
    [0,0,1,0],
    [1,0,0,0],
    [0,1,0,0] 
];

let disconnectedMatrix = [
    [0,1,0,1],
    [0,0,0,0],
    [0,0,0,1],
    [0,1,0,0] 
];

function isConnected(g) {
    let suma = 0;
    for (let r = 0; r < g.length; r++) {
        for (let c = 0; c < g.length; c++) {
            suma += g[r][c];
            }
            if (suma === 0) return false;                
                suma = 0;            
        }
        return true;
}

function isDisconnected(g) {
    let suma = 0;
    for (let r = 0; r < g.length; r++) {
        for (let c = 0; c < g.length; c++) {
            suma += g[r][c];
            }
            if (suma === 0) return true;                
                suma = 0;            
        }
        return false;
}

console.log(isConnected(connectedMatrix));
console.log(isConnected(disconnectedMatrix));
console.log(isDisconnected(disconnectedMatrix));
console.log(isDisconnected(connectedMatrix));