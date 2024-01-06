/*const title= document.createElement('h1'); 
title.innerText = 'Hola mundo desde JS'; 

const buttom = document.createElement('button')
buttom.innerText = 'click';

buttom.addEventListener('click', function(){
    title.innerText = 'Cambio titulo'
    alert('se realizo un cambio') 
})
document.body.append(title);
document.body.append(buttom)*/


/*const user = {
    name: 'Cristian',
    age : 23
}

formas de acceder a  el arreglo
1)
function printInfo({name}){
    return '<h1>Hola '+ user.name + ' tienes esta edad: '+ user.age+ '</h1>' 
}
2)
function printInfo({name}){
    return '<h1>Hola '+ user.name + ' tienes esta edad: '+ user.age+ '</h1>' 
}


document.body.innerHTML = printInfo(user)*/

//funcion anonima  y funcion flecha
/*
const isAuthorized = false ;
const buttom = document.createElement('button');
const add = (x,y) => x + y
const background = 'yellow';
const color = 'black';
const result = `estos son los estilos: ${background} ${color}`



buttom.innerText ='click';
buttom.style =`background: ${isAuthorized ? 'blue': background}; color: ${color}; border-radius='10%';`
document.body.append(buttom);
buttom.addEventListener('click', () =>{
    if (isAuthorized){
        alert('clickeed');
    } else{
        alert('no esta autorizado');
    }
    
});



console.log(result);
console.log(add(10,20));
console.log(function (){
    return 'Starting....'
}());
*/

//Importaciones
//import {add,multiply} from './add.js';
//import addModule from './add.js';

//console.log(addModule);
//console.log(add(10,20));
//console.log(multiply(10,20));


/*
//optional chaining

const person = {
    name:'ryan',
    adress:{
        city:'bogota',
        country:'Colombia'
    },
    location:'100° 132°'
}

console.log(person.location?.city)*/

//FETCH hace las peticiones al navegador o a backends 

const ul = document.createElement('ul')
const li = document.createElement('li')
/*
const data = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);
        data.forEach(function (post) {
            const li = document.createElement('li')
            li.innerText = post.title
            ul.append(li)
        });
        document.body.append(ul)
    })*/
async function loadData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data);
    data.forEach(function (post) {
        const li = document.createElement('li')
        li.innerText = post.title
        ul.append(li)
    });
    document.body.append(ul)
}


loadData()
console.log('linea dos');