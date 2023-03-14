function sum(lista = []){
    let j= 0
    for(let i = 0; i < lista.length; i++){
        j = lista[i]+j
    }
return j
    
}

console.log(sum(lista = [1, 2, 3])) // 6
console.log(sum(lista = [10, 8, 12, 5])) // 35
console.log(sum(lista = [])) // 0