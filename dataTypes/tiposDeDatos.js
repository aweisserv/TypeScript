"use strict";
(function () {
    var mensaje = 'Hola';
    var numero = 123;
    var booleano = true;
    var hoy = new Date();
    var cualquiercosa; //Esta variable es de tipo any. Normalmente no es una buena práctica aplicarla
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;
    var spiderman = {
        nombre: 'Peter',
        Edad: 30
    };
    spiderman = {
        nombre: 'Peter',
        Edad: 40
    };
    console.log("Worked correctly" + " " + spiderman.nombre + ", your debt will caduce at " + hoy + ".");
})();
