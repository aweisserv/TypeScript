"use strict";
(function () {
    var avenger = {
        nombre: 'Peter',
        apellido: 'Choaz',
        habilidad: 'Superposición cuántica',
        poder: 3000
    };
    var extraer = function (_a) {
        var nombre = _a.nombre, apellido = _a.apellido, poder = _a.poder, habilidad = _a.habilidad;
        console.log(" " + habilidad + " de " + nombre + " " + apellido + ". Impacto base: " + poder);
    };
    extraer(avenger);
    //******************* Destructuración de arreglos */
    var avengers = ['Thor', 'Ironman', 'Roscharch'];
    var extraerArr = function (_a) {
        var thor = _a[0], ironman = _a[1], roscharch = _a[2];
        console.log(" " + thor + ", " + ironman + " y " + roscharch + ".");
    };
    extraerArr(avengers);
})();
