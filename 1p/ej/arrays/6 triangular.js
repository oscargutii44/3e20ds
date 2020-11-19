var x = [];
const triangular = () => {
    var t;
    var n = 1;
    
    for (var i=1; i<11; i++) {
        n=i;
        t = (n*(n+1))/2;
        x = t;
        console.log(x)
    }
}
triangular()