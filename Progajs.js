"use strict";

fetch('https://ghibliapi.herokuapp.com/films').then((Response) =>{

  if(Response.ok){
    return Response.json();
  }
  else{alert("Ошибка HTTP: " + Response.status)}


}).then(data => {
  data.forEach(movie => {

    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let h1 = document.createElement('h1');
    h1.textContent = movie.title;

    let p = document.createElement('p');
    movie.description = movie.description.substring(0, 300);
    p.textContent = `${movie.description}...`;

    container.append(card);

    card.append(h1);
    card.append(p);
  });


}).catch(err => console.log(err));




const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.append(logo);
app.append(container);
