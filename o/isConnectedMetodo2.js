let connectedMatrix = [ 
    [0,1,0],            
    [0,0,1],
    [1,0,0], 
];

let disconnectedMatrix = [ 
    [0,1,0],               
    [0,0,0],
    [1,0,0] 
];

function isConnected(g) {
    for (let r = 0; r < g.length; r++) {
        for (let c = 0; c < g.length; c++) {
            let elemento = g[r][c]
            if ( elemento != 0) {break;}
            if (c === 2) return false;                 
        }
    }
    return true;
}

function isDisconnected(g) {
    for (let r = 0; r < g.length; r++) {
        for (let c = 0; c < g.length; c++) {
            let elemento = g[r][c]
            if ( elemento != 0) {break;}
            if (c === 2) return true;                 
        }
    }
    return false;  
}

console.log(isConnected(connectedMatrix));
console.log(isConnected(disconnectedMatrix));
console.log(isDisconnected(disconnectedMatrix));
console.log(isDisconnected(connectedMatrix));