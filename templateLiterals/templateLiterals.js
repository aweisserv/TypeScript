"use strict";
(function () {
    //Writing functions in ECMA Script
    const getMana = () => 100 + 100 + 300;
    const nombre = 'Allan';
    const apellido = 'Weisser';
    const edad = 30;
    const booleano = true;
    //Template literals of ECMA Script
    const salida = `
        ${nombre} 
        ${apellido} 
        edad: ${edad}
        maná: ${getMana()}`;
    if (booleano == true) {
        console.log(salida);
    }
    else {
        console.log("User not found");
    }
})();
