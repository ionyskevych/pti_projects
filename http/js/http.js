// Write your code here

var ajax = function(method, url, data, callback) {
    var xhr = new XMLHttpRequest;
    xhr.open(method, url);
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                console.log('Помилка!!!!!');
            }
        }
    });
    xhr.send(method === 'GET' ? null : data);
};

// ------------------ Games

$('.add-games').on('click', function() {
    ajax('GET', 'http://127.0.0.1:3001/games', null, function(body) {
        var games = JSON.parse(body);
        var gameTemplate = $('#game-template').html();
        $('#games').html(doT.template(gameTemplate)({games: games}));
    });
});

//-------------------- Menu

$('.btn-nav-en').on('click', function () {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3001/menu/en',
        dataType: 'json'
    }).done(function (body) {
        console.log('success', body);
        var navTemplate = document.querySelector('#nav-template').innerHTML;
        document.querySelector('#nav').innerHTML = doT.template(navTemplate)(body);
    }).fail(function () {
        console.log('error');
    }).always(function () {
        console.log('complete');
    });
});

$('.btn-nav-ru').on('click', function () {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3001/menu/ru',
        dataType: 'json'
    }).done(function (body) {
        console.log('success', body);
        var navTemplate = document.querySelector('#nav-template').innerHTML;
        document.querySelector('#nav').innerHTML = doT.template(navTemplate)(body);
    }).fail(function () {
        console.log('error');
    }).always(function () {
        console.log('complete');
    });
});

//------------- Whores

$('.add-whores').on('click', function() {
    ajax('GET', 'http://127.0.0.1:3001/whores', null, function(body) {
        var whores = JSON.parse(body);
        var whoreTemplate = $('#whore-template').html();
        $('#whores').html(doT.template(whoreTemplate)({whores: whores}));
    });
});

//------------- Movies

$('.add-movies').on('click', function() {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3001/movies',
        dataType: 'json'
    }).done(function (body) {
        console.log('success', body);
        var gameTemplate = $('#movie-template').html();
        $('#movies').html(doT.template(gameTemplate)({movies: body}));
    }).fail(function () {
        console.log('error');
    }).always(function () {
        console.log('complete');
    });
});