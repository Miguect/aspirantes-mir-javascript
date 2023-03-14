function maxIndex(lista= []){
    let j = 0
    for (let i = 0; i<lista.length;i++){
        if (j<lista[i]){
            j = lista[i]
        }
    }

    return lista.indexOf(j)
}

console.log(maxIndex(lista = [1, 3, 2])) // => index 1
console.log(maxIndex(lista = [10, 9, 8, 7, 6, 5, 4])) // => index 0
console.log(maxIndex(lista = [])) // => -1