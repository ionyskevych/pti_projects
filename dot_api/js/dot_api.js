// Write your code here
console.log('Hello world!');

//---------Game
document.querySelector('.add-games').addEventListener('click', function() {
    var gameTemplate = document.querySelector('#game-template').innerHTML;
    document.querySelector('#games').innerHTML = doT.template(gameTemplate)({games: games});
});

//---------Menu
document.querySelector('.btn-nav-en').addEventListener('click', function() {
    var navTemplate = document.querySelector('#nav-template').innerHTML;
    document.querySelector('#nav').innerHTML = doT.template(navTemplate)(navEn);
});

document.querySelector('.btn-nav-ru').addEventListener('click', function() {
    var navTemplate = document.querySelector('#nav-template').innerHTML;
    document.querySelector('#nav').innerHTML = doT.template(navTemplate)(navRu);
});

//-------CVs
document.querySelector('.add-whores').addEventListener('click', function() {
    var whoreTemplate = document.querySelector('#whore-template').innerHTML;
    document.querySelector('#whores').innerHTML = doT.template(whoreTemplate)({whores: whores});
});

//--------Movies
document.querySelector('.add-movies').addEventListener('click', function() {
    var movieTemplate = document.querySelector('#movie-template').innerHTML;
    document.querySelector('#movies').innerHTML = doT.template(movieTemplate)({movies: movies.slice(5)});
});