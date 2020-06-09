(function(){  //Comandos esenciales TS:  tsc --init  tsc -w  

    function activar( quien   : string,                   //Mandatory argument at first
                      momento?: string,                   //Optional argument after
                      objeto  : string = 'Batiseñal',     //Default argument at last
                       ) {

        if ( momento ) {                
            console.log(`${ quien } activó la ${ objeto } en la ${ momento }.`);
        } else {
            console.log(`${ quien } activó la ${ objeto }.`);
        }
    }

    activar('Gordon', 'mañana');

})();