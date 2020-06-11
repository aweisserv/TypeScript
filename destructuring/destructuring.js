"use strict";
(function () {
    //******************* Destructuración de objetos */
    const avenger = {
        nombre: 'Peter',
        apellido: 'Choaz',
        habilidad: 'Superposición cuántica',
        poder: 3000
    };
    const extraer = ({ nombre, apellido, poder, habilidad }) => {
        console.log(` ${habilidad} de ${nombre} ${apellido}. Impacto base: ${poder}`);
    };
    extraer(avenger);
    //******************* Destructuración de arreglos */
    const avengers = ['Thor', 'Ironman', 'Roscharch'];
    const extraerArr = ([thor, ironman, roscharch]) => {
        console.log(` ${thor}, ${ironman} y ${roscharch}.`);
    };
    extraerArr(avengers);
})();
