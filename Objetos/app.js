// Creacion de objetos 

const person = {
    name: 'Franco',
    lastName: 'Delgado',
    age: 25,
};

// Acceder a valores

console.log(person.name);

// Agregar valores 

person.city = 'lima';
console.log(person);

// Modificar valores 

person.name = 'Renato';
console.log(person);

//Eliminar valores

delete person.age;
console.log(person);

//Congelar un objeto

//Object.freeze(person);

person.tattoos = 2;
console.log(person);

//Sellar un objeto

Object.seal(person);

person.lastName = 'La Madrid';
console.log(person);

//Unir objetos

//const objetoUnido = { ...name, ...lastName };
//console.log(objetoUnido);

//Palabra reservada this

let coche = {
    marca: 'Audi',
    modelo: 'Q4',
    año: 2023,
    obtenerDetalles: function () {
        return this.marca + " " + this.modelo;
    }
};

console.log(coche.obtenerDetalles());

//Recorrer

for (const propiedad in person) {
    console.log(propiedad + ": " + person[propiedad]);
}
