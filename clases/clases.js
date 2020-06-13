"use strict";
(() => {
    /** Clases **/
    /** Método tradicional **/
    /*
    class Avenger {
    
        nombre: string;
        equipo: string;
        nombreReal: string;
        puedePelear: boolean;
        peleasGanadas: number;
        propiedadIndefinida?: any;
    
        constructor( nombre: string, equipo: string, nombreReal: string, puedePelear: boolean, peleasGanadas: number ){
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    */
    /** TypeScript compatible */
    class Avenger {
        constructor(nombre, equipo, puedePelear, peleasGanadas, nombreReal) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
            this.nombreReal = nombreReal;
        }
    }
    const antman = new Avenger('Vredes', 'Astral', true, 150);
    console.log(antman);
})();
