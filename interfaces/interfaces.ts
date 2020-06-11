(() => {  
/* Se define una interfaz como el conjunto de propiedades o reglas que debe seguir un objeto. */

    interface Xmen {
        nombre:  string,
        edad:    string,
        poder?:  string
    }

    const enviarMision = ( xmen: Xmen ) => {

        console.log(`Enviando a ${ xmen.nombre} a la misión`)

    }

    const retirarXmen = ( xmen: Xmen ) => {

        console.log(`Retirando a ${ xmen.nombre} de la misión`)

    }

    const wolverine: Xmen = {
        nombre: 'Logan',
        edad:   '60'
    }

    enviarMision( wolverine );

    setTimeout(() => {
        retirarXmen( wolverine )
    }, 2000);

})();