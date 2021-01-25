function sum(a){
    let s = 0;
    for (let i = 0; i < a.length; i++) {
        s = s + a[i]
    }  
    return s 
}

let a = []
while(true) {
    let t = prompt('ingreso: ')
    let n = parseFloat(t)
    a.push(n)

    let r = prompt('otro? ')
    if (r==='n')
    break
}

console.log (Math.max.apply(null,a))
console.log (Math.min.apply(null,a))
console.log (sum(a)/a.length)
console.log (sum(a))
