const fibonacci = () => {
    var n1 = 0;
    var n2 = 1;
    var n3 = 1;
console.log(n1);1

for (var i=1;i<10;i++) {
    console.log(n3);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
   }
}

fibonacci ()
