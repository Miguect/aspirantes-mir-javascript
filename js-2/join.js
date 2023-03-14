function join(cadena=[]){
    let j = ''
    for (let i = 0; i<cadena.length;i++){
        j = j + cadena[i] + ' '
    }
    return j

}

console.log(join(cadena= ['mi', 'nombre', 'es', 'Miguel', 'Andrés', 'Camargo']))