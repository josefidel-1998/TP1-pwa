/*const palindromo = texto =>{
    let invertido = texto.split('').reverse().join('');
    if(invertido === texto){
        return true;
    }else{return false;}
}
console.log('es un palindromo?' + palindromo('as'));*/

/*
const invertir = text =>{
    let i = ''; // pongo una cadena vacia

    for(let letra of text){ // recorro cada caracter de la letra
        i = letra + i; // i va a ser igual a la letra mas la mas letra
    } // esto sirve para invertir un texto
    console.log(i)
}
invertir('jose fidel');*/

/*
const sacarP = (porcentaje, numero) => { // sacar el porcentaje de algun numero por parametros
    let operacion = (numero * (porcentaje/100));// coloco la operacion, le pongo el numero, el porcentaje que yo quiera lo divido por 100
    return console.log(`el porcentaje de ${numero} es ${operacion}`);// para que asi me de el porcentaje de x numero 
}
sacarP(20,300);*/
/*
const imparPar = (numero1, numero2) =>{
    let contador = 0;

    while(numero1 < numero2){ // mientras q numero 1 sea menor a numero 2 se incrementa a uno, para q el bucle no sea infinito
        if(numero1 % 2 !== 0){ // si el numero 1 es impar cuenta cuantos numeros impares hay
            contador++;
        }
        numero1++;
    }

    while(numero2 < numero1){
        if(numero2 % 2 !== 0){
            contador++;
        }
        numero2++;
    }
    return contador;
}
console.log(imparPar(1, 50));*/

/*
const invertirNumero = (numero) =>{
    let convertir = numero.toString().split('').reverse();
    let unir = convertir.join('');
    console.log(+unir);
}
invertirNumero(234);*/

/*
const arraysComparar = (latam = [], hispanos = []) =>{
    let filtrado = latam.filter(search => hispanos.includes(search));

    return console.table(filtrado);
}
arraysComparar(['Venezuela', 'Brasil', 'Cuba', 'Mexico', 'haiti', 'Argentina'],['Venezuela', 'Espania', 'Mexico', 'Argentina']);*/
/*
const escaleras = number =>{
    let escalera = '';
    for(let i = 1; i <= number; i++){

        let escalon = '';

        for(let j = 1; j <= i; j++){
            escalon += '[]';
            escalera = escalon;
        }
        console.log(escalera);
    }
}
escaleras(9);*/
/*
const restar = (numero) =>{
    let resultado = `... del ${numero} al 0 \n`;
   
    while(numero > 0){ // mientras que numero que le pase por argumento sea mayor que 0 
        resultado += `- numero ${numero} \n`
        numero -=8; ve restandole 8 numeros
    }
    return resultado;
}
console.log(restar(100));*/
/*
const repite = (textos, numeros) =>{
    let repetir = textos.repeat(numeros);
    console.log(repetir + '')
    
}

repite('fidel', 3);*/
/*
const vocales = texto =>{ // el "gi" es para que sea de manera global y distinga entre minusculas y mayusculas
    let coincidencia = texto.match(/[aeiou]/gi); // el metodo match sirve para utilizar expresiones regulares
    console.log(coincidencia); // y por supuesto en este buscar coincidencias de las vocales, adentro de los corchetes pongo las vocales
}

vocales('fidel');*/
/*
const numerito = (numero) =>{
    let resultado = '';

    if(numero % 3 == 0){
        resultado = 'buzzz';
    }else if(numero % 5 == 0){
        resultado = 'lightyears';
    }else if(numero % 5 == 0 && numero % 3 == 0){
        resultado = 'years';
    }else{
        return numero;
    }    
    return resultado
}
const lista = (imprimir) =>{
    for(let i = 0; i <= imprimir; i++){
        console.log(numerito(i));
    }
}
lista(20);*/
/*
const divisor = (numero, posible) =>{ // 
    if(numero % posible == 0){
        return posible;
    }else{
        return 0;
    }
}

const divisores = numero =>{
    for(let i = 1; i <= numero; i++){
        let mostrar = divisor(numero, i);
        console.log(mostrar);
    }
}
divisores(4);
*/ /*
const promesas = new Promise((resolve, reject) =>{
    resolve('hola mundo');
    reject('esto no se ejecutara');
});
promesas
.then((result) =>{ // este parametro del then es como el argumento de la promesa, resolve;
    console.log('respuesta del then',result);
})
.catch((err) =>{ // este parametro err vendria siendo el argumento de reject, solamente se ejecuta si hay errores
    console.log(err);
})
.finally(() =>{ // este finally no lleva parametros porque es una funcion que se tiene que ejecutar si o si, aunque alla errores
    console.log('fin');
});*/

// verbos http del lado del cliente

// GET obtener datos
// POST enviar datos 
// PUT pone nuevos valores en cierta data
// DELETE eliminar cierta data
/*
fetch('https://rickandmortyapi.com/api/character/576')
.then(response =>  response.json())
.then(data => {
        const json = JSON.stringify(data);
        console.log(json);
})
.catch(err => console.log(err))*/

/*
let pagina = 1;
let botonNext = document.querySelector('#next');
let botonBefore = document.querySelector('#before');

botonNext.addEventListener('click', e =>{
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();
    }
});

botonBefore.addEventListener('click', e =>{

    if(pagina > 1) {
        pagina -= 1;
        cargarPeliculas();
    }
});

const cargarPeliculas = async () =>{ // el asycn es para que esta funcion sea asincrona, y funciona junto al await
    // el await es para que esperar a que acabe de hacer la peticion de l url, cuando acabe se pasa a la siguiente linea
    try{
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eeca913d60c997333257b1c05acaeef1&lenguage=es-MX&page=${pagina}`);
        //.then(data =>)
        //console.table(respuesta)
        if(respuesta.status === 200){ // esto es para comprobar si la respuesta es correcta, o sea el 200 es para decir que todo esta bien
            const datos = await respuesta.json(); // esta el error 401 y 404    
            let peliculas = '';
            let imagenes = '';
            datos.results.forEach(pelicula =>{
                peliculas += `<div class="g-col-1">
                    <img class="" src="https://image.tmdb.org/t/p/w300/${pelicula.poster_path}" />
                    <p class="">${pelicula.title}</p>
                </div>`;
            });
            let div = document.querySelector('#contenedor');
            div.innerHTML = peliculas;
        }else if( respuesta.status === 401){
            console.log('pusiste la llave mal');
        }else if(respuesta.status === 404){
            console.log('no se encontro la pelicula');
        }
    }catch(e){
        console.log(e);
    }
}
cargarPeliculas();*/
/*
const input = document.querySelector('input');
const btn = document.querySelector('button');
const pokemonApi = document.querySelector('#pokemon-container');
btn.addEventListener('click', e =>{
    e.preventDefault();
    traerPokemon(input.value);
});

function traerPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        crearPokemon(data);
    })
}

function crearPokemon(pokemon){
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    let h3 = document.createElement('h3');
    h3.innerHTML = pokemon.name;
    let div = document.createElement('div');
    div.append(img,h3);
    pokemonApi.append(div);
}
traerPokemon();*/
/*
function rickMorty () {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let datos = data.results;
        datos.forEach(dat =>{
            let img = document.createElement('img');
            img.src = dat.image;

            let h2 = document.createElement('h2');
            h2.innerHTML = dat.name;

            let articulo = document.querySelector('#rick');
            articulo.append(h2,img);
        });

    })
    .catch(err => console.log(err));
}

rickMorty();*/


function breakingBad(){
    let articulo = document.querySelector('#articulo');
    fetch(' https://breaking-bad-quotes-for-vercel.vercel.app/api/quotes')
    .then(response => response.json())
    .then(data => {
        console.table(data.data);
        data.data.forEach((datos, i) =>{
            let autor = document.createElement('h2');
            let frase = document.createElement('p');
            autor.innerHTML = datos.author;
            frase.innerHTML = datos.quote;
            articulo.append(autor,frase);
        })
    })
    .catch(err => console.log(err));
}
const buscarImagen = (autor) =>{
    
}
breakingBad();