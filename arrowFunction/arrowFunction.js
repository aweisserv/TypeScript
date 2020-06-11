"use strict";
(function () {
    const miFuncion = function (a) {
        return a.toUpperCase();
    };
    const miFuncionFlecha = (a) => a.toUpperCase();
    console.log(miFuncion('Normal') + ' <- toUpperCase con función standard ES5');
    console.log(miFuncionFlecha('Arrow') + '  <- toUpperCase con función Arrow TypeScript/ES6+');
    const sumarN = function (a, b) {
        return a + b;
    };
    const sumarFlecha = (a, b) => a + b;
    console.log(sumarN(2, 4) + ' <- 2+4 utilizando función standard de ES5');
    console.log(sumarFlecha(2, 4) + ' <- 2+4 utilizando función Arrow de TypesCript/ES6+ ');
    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash! <- función smash con timeout arrow (ES6+)`);
            }, 2000);
        }
    };
    hulk.smash();
})();
