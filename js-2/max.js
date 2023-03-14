function max(lista = []){
    let j = 0
    if(lista[0] > 0){
        for(let i = 0; i < lista.length; i++){
            if (j<lista[i]){
                j = lista[i]
            } 
        }
        return j
    } else {
        return "undefined"
    }
}

console.log(max(lista = [1, 3, 2])) // 3
console.log(max(lista = [10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max(lista = [])) // undefined