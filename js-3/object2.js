let persona = {nombre: 'Miguel Camargo', edad: '32', ciudad: 'Santa Marta', profesion: 'Ejecutivo de soporte'}

function presentacion(){
    console.log(`Hola, me llamo ${persona.nombre}, tengo ${persona.edad} años de edad y vivo en la ciudad de ${persona.ciudad}, me desempeño como ${persona.profesion}`)
}

let mensaje = presentacion(persona)

console.log(mensaje)

persona.hobbies = ['tenis de mesa', 'videojuegos', 'programacion']

console.log(persona.hobbies)

let gustos = ''
for (let i = 0; i < persona.hobbies.length; i++){
    gustos = persona.hobbies[i]
    console.log(gustos)
}