

//-----button 1
document.querySelector('.b1').addEventListener('click', function() {
    document.querySelector('.t1').style.color = 'green';
});

//-----button 2
document.querySelector('.b2').addEventListener('click', function() {
    document.querySelector('.t2').style.backgroundColor = 'red';
});

//-----button 3
document.querySelector('.b3').addEventListener('click', function() {
    document.querySelector('.t3 a').href = 'https://developer.mozilla.org/ru/docs/Web/API';
});

//-----button 4
document.querySelector('.b4').addEventListener('click', function() {
    document.querySelector('.t4 img').src = 'images/bro.jpg';
});

//-----button 5
document.querySelector('.b5').addEventListener('click', function() {
    document.querySelector('.t5').id = 'cd';
});

//-----button 6
document.querySelector('.b6').addEventListener('click', function() {
    document.querySelector('.t6').innerText = 'Text';
});

//-----button 7
document.querySelector('.b7').addEventListener('click', function() {
    document.querySelector('.t7').innerHTML = '<span>Тест <i>Цветы</i></span>';
});

//-----button 8
document.querySelector('.b8').addEventListener('click', function() {
    document.querySelector('.t8').style.fontSize = '20px';
});

//-----button 9
document.querySelector('.b9').addEventListener('click', function() {
    document.querySelector('.t9').classList.add('hi');
});

//-----button 10
document.querySelector('.b10').addEventListener('click', function() {
    document.querySelector('.t10').classList.remove('hi');
});

//-----button 11
document.querySelector('.b11').addEventListener('click', function() {
    document.querySelector('.t11').classList.toggle('hi');
});

//-----button 12
document.querySelector('body').addEventListener('click', function(e) {
    document.querySelector('.t12').innerText = e.target.className;
});

//-----button 13
document.querySelector('.b13').addEventListener('click', function() {
    document.querySelector('.t13').innerText = document.querySelector('.t13').dataset.en;
});

//-----task 14
window.addEventListener('resize', function() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    document.querySelector('.t99').style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
});

//-----count
document.querySelector('.t98 input').addEventListener('input', function(e) {
    document.querySelector('.t98-2').innerText = e.currentTarget.value.length;
});

//-----whore2
document.querySelector('.b14').addEventListener('click', function() {
    var whore2 = document.createElement('div');
    whore2.classList.add('whore');

    var name = document.createElement('div');
    name.classList.add('whore-name');
    name.innerText = jasmine.name;
    whore2.appendChild(name);

    var photo = document.createElement('img');
    photo.src = jasmine.photo;
    photo.style.width = '200px';
    whore2.appendChild(photo);

    var age = document.createElement('div');
    age.classList.add('whore-age');
    age.innerText = 'Возраст: ' + jasmine.age;
    whore2.appendChild(age);

    var boobs = document.createElement('div');
    boobs.classList.add('whore-boobs');
    boobs.innerText = 'Размер груди: ' + jasmine.boobs;
    whore2.appendChild(boobs);

    var height = document.createElement('div');
    height.classList.add('whore-height');
    height.innerText = 'Рост:' + jasmine.height;
    whore2.appendChild(height);

    var weight = document.createElement('div');
    weight.classList.add('whore-weight');
    weight.innerText = 'Вес: ' + jasmine.weight;
    whore2.appendChild(weight);

    var phone = document.createElement('div');
    phone.classList.add('whore-phone');
    phone.innerText = jasmine.phone;
    whore2.appendChild(phone);

    var come = document.createElement('div');
    come.classList.add('whore-can-come');
    come.innerText = 'Выезд: ' + (jasmine.can_come ? '+' : '-');
    whore2.appendChild(come);

    var teaser = document.createElement('div');
    teaser.classList.add('whore-teaser');
    teaser.innerText = jasmine.teaser;
    whore2.appendChild(teaser);

    document.querySelector('.whores-container').appendChild(whore2);
});

document.querySelector('.b14').addEventListener('click', function() {
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
    document.querySelector('.whores-container').innerHTML += whore3;
});

//-----task fish
document.querySelector('.b15').addEventListener('click', function() {
    var fish = document.querySelector('.fish');

    if (document.querySelector('.cat-container-1 .fish' )) {
        document.querySelector('.cat-container-2').appendChild(fish);
    } else {
        document.querySelector('.cat-container-1').appendChild(fish);
    }
});

//------ task tooth
document.querySelector('.b16').addEventListener('click', function() {
    var tooth = document.querySelector('.tooth');

    if (tooth) {
        document.querySelector('.tooth-container').removeChild(tooth);
        //tooth.remove();
    }
});

//-----skier
document.querySelector('.b17').addEventListener('click', function() {
    var skier = document.querySelector('.skier');
    var x = 0;

    var intervalId = setInterval(function() {
        x += 5;
        skier.style.left = x + 'px';
    }, 16);

    document.querySelector('.b17-2').addEventListener('click', function() {
       clearInterval(intervalId);
    });
});

//-----Mikki
for (var i = 0; i< mikki.length; i++) {
    for (var j = 0; j< mikki[i].length; j++) {
        var tile = document.createElement('div');
        tile.classList.add('mikki_tile');
        if (mikki[i][j] === 'X') {
            tile.style.backgroundColor = 'black';
        }
        document.querySelector('.mikki_tiles').appendChild(tile);
    }
}

//-----Mario World
document.querySelector('.b18').addEventListener('click', function() {
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            var tile = document.createElement('div');
            tile.classList.add('tile');
            tile.style.top = i * 16 + 'px';
            tile.style.left = j * 16 + 'px';

            if (map[i][j] === 'z') {
                tile.classList.add('x_z');
            }

            if (map[i][j] === 'k') {
                tile.classList.add('x_k');
            }

            if (map[i][j] === 'c') {
                tile.classList.add('x_c');
            }

            if (map[i][j] === 't') {
                tile.classList.add('x_t');
            }

            if (map[i][j] === 'g') {
                tile.classList.add('x_g');
            }

            if (map[i][j] === 'b') {
                tile.classList.add('x_b');
            }
            if (map[i][j] === 'd') {
                tile.classList.add('x_d');
            }
            if (map[i][j] === 'w') {
                tile.classList.add('x_w');
            }

            document.querySelector('.scene').appendChild(tile);
        }
    }
});

//------Slider
document.querySelector('.pagination .next').addEventListener('click', function(){
    var activeSlide = document.querySelector('.slider .active');
    if (activeSlide.nextElementSibling) {
        activeSlide.classList.remove('active');
        activeSlide.nextElementSibling.classList.add('active');
    }
});

document.querySelector('.pagination .previous').addEventListener('click', function(){
    var activeSlide = document.querySelector('.slider .active');
    if (activeSlide.previousElementSibling) {
        activeSlide.classList.remove('active');
        activeSlide.previousElementSibling.classList.add('active');
    }
});

//------Questions
var questions = document.querySelectorAll('.question');
questions.forEach(function(question) {
    question.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

//------ Tabs
document.querySelector('.tabs').addEventListener('click', function(e) {
    if (!e.target.classList.contains('item')) {
        return;
    }

    document.querySelector('.tabs .active').classList.remove('active');
    document.querySelector('.tabs-content .active').classList.remove('active');

    e.target.classList.add('active');
    document.querySelector('.tabs-content .item[data-tab="' + e.target.dataset.tab + '"]').classList.add('active');
});

//------Login
document.querySelector('.show-login-pop-up').addEventListener('click', function() {
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.pop-up').classList.remove('hidden');
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.pop-up').classList.add('hidden');
});

// ------Prevent
document.querySelector('.link-ebanoe').addEventListener('click', function(e) {
    e.preventDefault();
});

//-----Spam
document.querySelector('.t97 .b97').addEventListener('click', function() {
    document.querySelector('.t97').style.display = 'none';
    localStorage.setItem('hideAd', 'true');
});

if (localStorage.getItem('hideAd') === 'true') {
    document.querySelector('.t97').style.display = 'none';
}
