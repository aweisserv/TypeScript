(() => {  
/** Tipado del retorno de una función**/
    const sumar = (a: number, b: number): number => a + b;

    const nombre = () => 'El cucho';

    const obtenerSalario = ():Promise<string> => {
        return new Promise( (resolve, reject) => {
            resolve('Cucho de Cu');
            reject('Melquiades');

        });
    }

    obtenerSalario().then( a => console.log( a.toUpperCase() ) )
    obtenerSalario().catch( a => console.log( a.toUpperCase() ) )

})();