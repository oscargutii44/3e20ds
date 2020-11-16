function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num === 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  
  const iterador = () => { 
      for(var i=0; i < 10; i++){
          console.log(factorialize(i))
      } 
  }
  iterador()