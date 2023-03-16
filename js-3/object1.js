let pedro = {nombre: "Pedro Perez", edad: '30', activo: 'true', hobbies: ['programar', 'squash', 'piano']}

console.log(pedro.edad)

pedro.estatura = '1.8';

delete pedro.activo;

let car = Object.keys(pedro);
for (let i = 0; i < car.length; i++){
    let llaves = car[i]
    console.log(car[i] + ': ' +pedro[llaves])
}

pedro.saluda = function(){
    console.log('Hola, me llamo '+ this.nombre)
}

pedro.saluda()