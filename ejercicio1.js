 const esPrimo = numero =>{
      let raiz = Math.floor(Math.sqrt(numero)) + 1 ;
      for(let i = 2 ; i< raiz ; i++){
        if(numero % i === 0){
            return false
        }
      }
    return true
  }//esPrimo

  const arregloNumPrimos = array =>{
      return array.filter(element => esPrimo(element))
  }//arregloNumPrimos
  
  console.log(arregloNumPrimos(ejercicio1));