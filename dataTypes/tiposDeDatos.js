"use strict";
(function () {
    let mensaje = 'Hola';
    let numero = 123;
    let booleano = true;
    let hoy = new Date();
    let cualquiercosa; //Esta variable es de tipo any. Normalmente no es una buena práctica aplicarla
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;
    let spiderman = {
        nombre: 'Peter',
        Edad: 30
    };
    spiderman = {
        nombre: 'Peter',
        Edad: 40
    };
    console.log("Worked correctly" + " " + spiderman.nombre + ", your debt will caduce at " + hoy + ".");
})();
