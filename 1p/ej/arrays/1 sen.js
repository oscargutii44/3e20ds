var seno = [];
const sen = (x) => { return (x - Math.pow(x, .5))};

const iterador = () => { 
    for(var i=1; i < 11; i++){
        seno.push(sen(i));
        if( i === 10) console.log(seno)
    } 
}

iterador()