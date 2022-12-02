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
    ajax('GET', 'http://127.0.0.1:3001/games', null, function(response) {
        var games = JSON.parse(response);
        var gameTemplate = $('#game-template').html();
        $('#games').html(doT.template(gameTemplate)({games: games}));
    });
});

//-------------------- Menu

$('.btn-nav-en').on('click', function() {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3001/menu/en',
        dataType: 'json'
    }).done(function(response) {
        var navTemplate = $('#nav-template').html();
        $('#nav').html(doT.template(navTemplate)(response));
    }).fail(function() {
        console.log('error');
    }).always(function() {
        console.log('complete');
    });
});

$('.btn-nav-ru').on('click', function() {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3001/menu/ru',
        dataType: 'json'
    }).done(function(response) {
        var navTemplate = $('#nav-template').html();
        $('#nav').html(doT.template(navTemplate)(response));
    }).fail(function() {
        console.log('error');
    }).always(function() {
        console.log('complete');
    });
});

//------------- Whores

$('.add-whores').on('click', function() {
    ajax('GET', 'http://127.0.0.1:3001/whores', null, function(response) {
        var whores = JSON.parse(response);
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
    }).done(function(movies) {
        var gameTemplate = $('#movie-template').html();
        $('#movies').html(doT.template(gameTemplate)({movies: movies}));
    }).fail(function() {
        console.log('error');
    }).always(function() {
        console.log('complete');
    });
});