(() => {  

    const retirarDinero = (montoRetirar: number ): Promise<number> => {

        let dineroActual = 1000;

        return new Promise(( resolve, reject ) => {
            if( montoRetirar >= dineroActual ){
                reject('Excede el monto')                
            }else{
                dineroActual -= montoRetirar;
                resolve( dineroActual);
            }
        });
    }

    retirarDinero( 500 )
        .then( montoActual => console.log(`Monto disponible: ${ montoActual }`))
        .catch( console.warn )

})();