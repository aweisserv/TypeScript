"use strict";
(function () {
    var miFuncion = function (a) {
        return a.toUpperCase();
    };
    var miFuncionFlecha = function (a) { return a.toUpperCase(); };
    console.log(miFuncion('Normal') + ' <- toUpperCase con función standard ES5');
    console.log(miFuncionFlecha('Arrow') + '  <- toUpperCase con función Arrow TypeScript/ES6+');
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarFlecha = function (a, b) { return a + b; };
    console.log(sumarN(2, 4) + ' <- 2+4 utilizando función standard de ES5');
    console.log(sumarFlecha(2, 4) + ' <- 2+4 utilizando función Arrow de TypesCript/ES6+ ');
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " smash! <- funci\u00F3n smash con timeout arrow (ES6+)");
            }, 2000);
        }
    };
    hulk.smash();
})();
