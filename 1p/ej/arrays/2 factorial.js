var x = [];
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num === 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  
  const factorial = () => { 
      for(var i=0; i < 10; i++){
          x = (factorialize(i))
          console.log (x);
      } 
  }
  factorial()