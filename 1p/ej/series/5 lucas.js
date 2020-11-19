const lucas = () => {
var n1 = 2;
var n2 = 1;
var n3 = 1;

console.log(n1)
for (var i = 1; i<=9; i++) {
    console.log(n3)
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}

}

lucas ()
