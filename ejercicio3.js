const fibonacci = limite =>{
    let primerNumero = 0;
    let segundoNumero = 1;
    let array =[];

    for(let i = 1 ; i <= limite ; i++){
        let nuevoNumero = primerNumero+segundoNumero;
        array.push(primerNumero);
        primerNumero = segundoNumero;
        segundoNumero = nuevoNumero;

    }

    return array
}
//Puedes pasar como parámetro el número límite
console.log(fibonacci(50))