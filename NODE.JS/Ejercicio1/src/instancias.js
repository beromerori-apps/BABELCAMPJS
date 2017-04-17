//Creamos un constructor de objetos
function Fruta() {
    let nombre;
    this.setNombre = function(value) { nombre = value };
    this.getNombre = function() {
        return nombre };
}

//Creamos objeto fruta
const fruta = new Fruta(); //Si no utilizamos new el this de arriba seria undefined

fruta.setNombre('Limon');

console.log(fruta);
