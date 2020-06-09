"use strict";
(function () {
    //Writing functions in ECMA Script
    var getMana = function () { return 100 + 100 + 300; };
    var nombre = 'Allan';
    var apellido = 'Weisser';
    var edad = 30;
    var booleano = true;
    //Template literals of ECMA Script
    var salida = "\n        " + nombre + " \n        " + apellido + " \n        edad: " + edad + "\n        man\u00E1: " + getMana();
    if (booleano == true) {
        console.log(salida);
    }
    else {
        console.log("User not found");
    }
})();
