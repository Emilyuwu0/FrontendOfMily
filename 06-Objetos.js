//agrupacion de datos que hacenn sentido
let name = "Deku";
let estatura = "1.56";
let anime = "Boku no hero";

//Objeto
let personaje = {
  //llave valor o propiedad
  name: "Deku",
  estatura: " 1.56",
  anime: "Boku no hero",
};

console.log(personaje);
console.log(personaje.name); //ver definicion del objeto
console.log(personaje["anime"]); //acceder a las propiedades del objeto

//modificar propiedad
personaje.estatura = "1.70";
personaje["estatura"] = "1.72";

//Eliminar propiedad
delete personaje.estatura;
console.log(personaje);
