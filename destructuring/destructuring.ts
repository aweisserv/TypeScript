(function(){  //Comandos esenciales TS:  tsc --init  tsc -w  

    const avenger = {
        nombre:   'Peter',
        apellido: 'Choaz',
        habilidad:    'Superposición cuántica',
        poder: 3000
    }

    const extraer = ( { nombre, apellido, poder, habilidad }: any ) => {

        console.log( ` ${habilidad} de ${nombre} ${apellido}. Impacto base: ${poder}` );
    
    }

    extraer( avenger );

//******************* Destructuración de arreglos */

const avengers: string[] = ['Thor', 'Ironman', 'Roscharch'];

const extraerArr = ( [thor, ironman, roscharch]: string[] ) => {

    console.log( ` ${thor}, ${ironman} y ${roscharch}.` );

}

extraerArr( avengers );

})();