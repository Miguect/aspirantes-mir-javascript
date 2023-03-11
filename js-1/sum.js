function sum(numero){
    let j= 0

    for (i = 0; i<= numero; i++){
            j = i + j
    }

    return "El resultado de la suma es: " + j
}

// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120