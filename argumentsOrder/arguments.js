"use strict";
(function () {
    function activar(quien, //Mandatory argument at first
    momento, //Optional argument after
    objeto = 'Batiseñal') {
        if (momento) {
            console.log(`${quien} activó la ${objeto} en la ${momento}.`);
        }
        else {
            console.log(`${quien} activó la ${objeto}.`);
        }
    }
    activar('Gordon', 'mañana');
})();
