"use strict";
(() => {
    /* Se define una interfaz como el conjunto de propiedades o reglas que debe seguir un objeto. */
    const enviarMision = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    };
    const retirarXmen = (xmen) => {
        console.log(`Retirando a ${xmen.nombre} de la misión`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: '60'
    };
    enviarMision(wolverine);
    setTimeout(() => {
        retirarXmen(wolverine);
    }, 2000);
})();
