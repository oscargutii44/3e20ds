const sen = (x) => { return (x - Math.pow(x, .5))};

const iterador = () => { 
    for(var i=0; i < 10; i++){
        console.log('sen(', i, ') = ', sen(i))
    } 
}

iterador()