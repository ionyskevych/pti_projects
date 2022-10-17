// Write your code here
console.log('Hello world!');

//-----button 1
$('.b1').on('click', function() {
    $('.t1').css('color', 'green');
});

//-----button 2
$('.b2').on('click', function() {
    $('.t2').css('background-color', 'green');
});

//-----button 3
$('.b3').on('click', function() {
    $('.t3 a').attr('href', 'https://developer.mozilla.org/ru/docs/Web/API');
});

//-----button 4
$('.b4').on('click', function() {
    $('.t4 img').attr('src', 'images/bro.jpg');
});

// //-----button 5
$('.b5').on('click', function() {
    $('.t5').attr('id', 'cd');
});

// //-----button 6
$('.b6').click(function() {
    $('.t6').text('Text');
});
//
// //-----button 7
$('.b7').click(function() {
    $('.t7').html('<span>Тест <i>Цветы</i></span>');
});

// //-----button 8
$('.b8').click(function()  {
    $('.t8').css('font-size', '20px');
});

// //-----button 9
$('.b9').click(function() {
    $('.t9').addClass('hi');
});

// //-----button 10
$('.b10').click(function() {
    $('.t10').removeClass('hi');
});

// //-----button 11
$('.b11').click(function() {
    $('.t11').toggleClass('hi');
});

// //-----button 12
$('body').click(function(e) {
    $('.t12').text(e.target.className);
});

// //-----button 13
$('.b13').click(function() {
    var translation = $('.t13').data('en');
    $('.t13').text(translation);
});

// //-----task 14
$(window).on('resize', function() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    $('.t99').css('background-color', 'rgb(' + red + ', ' + green + ', ' + blue + ')');
});

// //-----count
$('.t98 input').on('input', function(e) {
    $('.t98-2').text(e.currentTarget.value.length);
});

// //-----whore2
$('.b14').click(function() {
    var whore2 = $('<div>').addClass('whore');
    $('<div>').addClass('whore-name').text(jasmine.name).appendTo(whore2);
    $('<img alt="">').attr('src', jasmine.photo).css('width', '200px').appendTo(whore2);
    $('<div>').addClass('whore-age').text('Возраст: ' + jasmine.age).appendTo(whore2);
    $('<div>').addClass('whore-boobs').text('Размер груди: ' + jasmine.boobs).appendTo(whore2);
    var height = $('<div>').addClass('whore-height').text('Рост:' + jasmine.height);
    whore2.append(height);
    var weight = $('<div>').addClass('whore-weight').text('Вес: ' + jasmine.weight);
    whore2.append(weight);
    var phone = $('<div>').addClass('whore-phone').text(jasmine.phone);
    whore2.append(phone);
    var come = $('<div>').addClass('whore-can-come').text('Выезд: ' + (jasmine.can_come ? '+' : '-'));
    whore2.append(come);
    var teaser = $('<div>').addClass('whore-teaser').text(jasmine.teaser);
    whore2.append(teaser);

    $('.whores-container').append(whore2);
});

$('.b14').click(function() {
    var whore3 =
        '<div class="whore">' +
            '<div class="whore-name">' + jasmine.name + '</div>' +
            '<img src="' + jasmine.photo + '"width="200">' +
            '<div class="whore-age">Возраст: ' + jasmine.age + '</div>' +
            '<div class="whore-boobs">Размер груди: ' + jasmine.boobs + '</div>' +
            '<div class="whore-height">Рост: ' + jasmine.height + '</div>' +
            '<div class="whore-weight">Вес: ' + jasmine.weight + '</div>' +
            '<div class="whore-phone">' + jasmine.phone + '</div>' +
            '<div class="whore-can-come">Выезд: ' + (jasmine.can_come ? '+' : '-') + '</div>' +
            '<div class="whore-teaser">' + jasmine.teaser + '</div>' +
        '</div>';
    $('.whores-container').append(whore3);
});
//
//-----task fish
$('.b15').click(function() {
    var fish = $('.fish');

    if ($('.cat-container-1 .fish').length) {
        $('.cat-container-2').append(fish);
    } else {
        $('.cat-container-1').append(fish);
    }
});
//
//------ task tooth
$('.b16').click(function() {
    $('.tooth').remove();
});

//-----skier
$('.b17').click(function() {
    var skier = $('.skier');
    var x = 0;

    var intervalId = setInterval(function() {
        x += 5;
        skier.css('left', x + 'px');
    }, 16);

    $('.b17-2').click(function() {
        clearInterval(intervalId);
    });
});
//
//-----Mikki
for (var i = 0; i< mikki.length; i++) {
    for (var j = 0; j< mikki[i].length; j++) {
        var tile = $('<div>').addClass('mikki_tile');
        if (mikki[i][j] === 'X') {
            tile.css('background-color', 'black');
        }
        $('.mikki_tiles').append(tile);
    }
}
//
//-----Mario World
$('.b18').click(function() {
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            var tile = $('<div>').addClass('tile');
            tile.css('top', i * 16 + 'px');
            tile.css('left', j * 16 + 'px');

            if (map[i][j] === 'z') {
                tile.addClass('x_z');
            }

            if (map[i][j] === 'k') {
                tile.addClass('x_k');
            }

            if (map[i][j] === 'c') {
                tile.addClass('x_c');
            }

            if (map[i][j] === 't') {
                tile.addClass('x_t');
            }

            if (map[i][j] === 'g') {
                tile.addClass('x_g');
            }

            if (map[i][j] === 'b') {
                tile.addClass('x_b');
            }
            if (map[i][j] === 'd') {
                tile.addClass('x_d');
            }
            if (map[i][j] === 'w') {
                tile.addClass('x_w');
            }

            $('.scene').append(tile);
        }
    }
});
//
//------Slider
$('.pagination .next').on('click', function() {
    var $activeSlide = $('.slider .active');
    if ($activeSlide.next().length) {
        $activeSlide.removeClass('active');
        $activeSlide.next().addClass('active');
    }
});

$('.pagination .previous').on('click', function() {
    var $activeSlide = $('.slider .active');
    if ($activeSlide.prev().length) {
        $activeSlide.removeClass('active');
        $activeSlide.prev().addClass('active');
    }
});
//
//------Questions
// $('.question').each(function(idx, question) {
//     $(question).click(function() {
//         $(this).toggleClass('active');
//     });
// });

$('.question').on('click', function() {
    $(this).toggleClass('active');
});

//------ Tabs
$('.tabs').click(function(e) {
    if (!$(e.target).hasClass('item')) {
        return;
    }

    $('.tabs .active').removeClass('active');
    $('.tabs-content .active').removeClass('active');

    $(e.target).addClass('active');
    $('.tabs-content .item[data-tab="' + $(e.target).data('tab') + '"]').addClass('active');
});
//
//------Login
$('.show-login-pop-up').click(function() {
    $('.overlay').removeClass('hidden');
    $('.pop-up').removeClass('hidden');
});

$('.close').click(function() {
    $('.overlay').addClass('hidden');
    $('.pop-up').addClass('hidden');
});
//
// ------Prevent
$('.link-ebanoe').click(function(e) {
    e.preventDefault();
});
//
//-----Spam
$('.t97 .b97').click(function() {
    $('.t97').css('display', 'none');
    localStorage.setItem('hideAd', 'true');
});

if (localStorage.getItem('hideAd') === 'true') {
    $('.t97').css('display', 'none');
}
