(function(){  //Comandos esenciales TS:  tsc --init  tsc -w  

    let mensaje: string = 'Hola';
    let numero: number = 123;
    let booleano: boolean = true;
    let hoy: Date = new Date();


    let cualquiercosa; //Esta variable es de tipo any. Normalmente no es una buena práctica aplicarla
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;

    let spiderman = { //Al declarar el objeto spiderman con let, si posteriormente quiero modificarlo, requerirá que cumpla con los mismos atributos que fue declarado
        nombre: 'Peter',
        Edad: 30
    };

    spiderman = {  //Si se edita este objeto, debe ser respetando la estructura del mismo
        nombre: 'Peter',
        Edad: 40
    };
    console.log("Worked correctly" + " " + spiderman.nombre + ", your debt will caduce at " + hoy + ".");
})();