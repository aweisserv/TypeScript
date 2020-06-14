"use strict";
(() => {
    /** Tipado del retorno de una función**/
    const sumar = (a, b) => a + b;
    const nombre = () => 'El cucho';
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve('Cucho de Cu');
            reject('Melquiades');
        });
    };
    obtenerSalario().then(a => console.log(a.toUpperCase()));
    obtenerSalario().catch(a => console.log(a.toUpperCase()));
})();
