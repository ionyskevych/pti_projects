

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
    document.querySelector('.t3').firstChild.href = 'https://developer.mozilla.org/ru/docs/Web/API';
});

//-----button 4
document.querySelector('.b4').addEventListener('click', function() {
    document.querySelector('img').src = 'images/bro.jpg';
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
    document.querySelector('.t7').innerHTML = '<span>Тест <i>Цветы</i></span>'
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
    document.querySelector('.t99').style.backgroundColor = 'rgb(' + (Math.round(Math.random() * 255)) + ', ' + (Math.round(Math.random() * 255)) + ', ' + (Math.round(Math.random() * 255)) + ')';
});

//-----count
document.querySelector('.t98 input').addEventListener('input', function() {
    document.querySelector('.t98-2').innerText = document.querySelector('.t98 input').value.length;
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
    if (document.querySelector('.cat-container-1 .fish' )) {
        // document.querySelector('.cat-container-1').removeChild(document.querySelector('.fish'));
        document.querySelector('.cat-container-2').appendChild(document.querySelector('.fish'));
    } else {
        // document.querySelector('.cat-container-2').removeChild(document.querySelector('.fish'));
        document.querySelector('.cat-container-1').appendChild(document.querySelector('.fish'));
    }
});

//------ task tooth
document.querySelector('.b16').addEventListener('click', function() {
    // if (document.querySelector('.tooth-container .tooth' )) {
        document.querySelector('.tooth-container').removeChild(document.querySelector('.tooth'));
    // }
});

//-----skier
document.querySelector('.b17').addEventListener('click', function() {
    var obj = document.querySelector('.skier');
    var distance = 0;
    var tempo = setInterval(function() {
        distance += 5;
        obj.style.left = distance + 'px';
    }, 16);

    document.querySelector('.b17-2').addEventListener('click', function() {
       clearInterval(tempo);
    });
});

//-----Mikki
var drawMouse = function(coordinates) {
    coordinates.forEach(str_element => {
        for(var i = 0; i < str_element.length; i++) {
            if (str_element[i] === 'X') {
                // draw black tile
                var blackTile = document.createElement('div');
                blackTile.classList.add('mikki_tile');
                blackTile.style.backgroundColor = 'black';
                document.querySelector('.mikki_tiles').appendChild(blackTile);
            } else {
                // draw white tile
                var whiteTile = document.createElement('div');
                whiteTile.classList.add('mikki_tile');
                whiteTile.style.boxSizing = 'border-box';
                whiteTile.style.border = '1px solid gray';
                document.querySelector('.mikki_tiles').appendChild(whiteTile);
            }
        }

    });
}
drawMouse(mikki)

//-----Mario World
document.querySelector('.b18').addEventListener('click', function() {
    var i = 0;
    while (i < map.length) {
        var j = 0;
        while (j < map[i].length) {
            var element = document.createElement('div');
            element.classList.add('tile');
            element.style.top = (i*16) + 'px';
            element.style.left = (j*16) + 'px';
            if (map[i][j] === 'z') {
                element.classList.add('x_z');
            }
            document.querySelector('.scene').appendChild(element);

            var element2 = document.createElement('div');
            element2.classList.add('tile');
            element2.style.top = (i*16) + 'px';
            element2.style.left = (j*16) + 'px';
            if (map[i][j] === 'k') {
                element.classList.add('x_k');
            }
            document.querySelector('.scene').appendChild(element2);

            var element3 = document.createElement('div');
            element3.classList.add('tile');
            element3.style.top = (i*16) + 'px';
            element3.style.left = (j*16) + 'px';
            if (map[i][j] === 'c') {
                element.classList.add('x_c');
            }
            document.querySelector('.scene').appendChild(element3);

            var element4 = document.createElement('div');
            element4.classList.add('tile');
            element4.style.top = (i*16) + 'px';
            element4.style.left = (j*16) + 'px';
            if (map[i][j] === 't') {
                element.classList.add('x_t');
            }
            document.querySelector('.scene').appendChild(element4);

            var element5 = document.createElement('div');
            element5.classList.add('tile');
            element5.style.top = (i*16) + 'px';
            element5.style.left = (j*16) + 'px';
            if (map[i][j] === 'g') {
                element.classList.add('x_g');
            }
            document.querySelector('.scene').appendChild(element5);

            var element6 = document.createElement('div');
            element6.classList.add('tile');
            element6.style.top = (i*16) + 'px';
            element6.style.left = (j*16) + 'px';
            if (map[i][j] === 'b') {
                element.classList.add('x_b');
            }
            document.querySelector('.scene').appendChild(element6);

            var element7 = document.createElement('div');
            element7.classList.add('tile');
            element7.style.top = (i*16) + 'px';
            element7.style.left = (j*16) + 'px';
            if (map[i][j] === 'd') {
                element.classList.add('x_d');
            }
            document.querySelector('.scene').appendChild(element7);

            var element8 = document.createElement('div');
            element8.classList.add('tile');
            element8.style.top = (i*16) + 'px';
            element8.style.left = (j*16) + 'px';
            if (map[i][j] === 'w') {
                element.classList.add('x_w');
            }
            document.querySelector('.scene').appendChild(element8);
            j++;
        }
        i++;
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
var i = 0;
while (i < questions.length) {
    questions[i].addEventListener('click', function() {
        this.classList.add('active');
    });
    i++;
}

//------ Tabs
document.querySelector('.tabs').addEventListener('click', function(e) {
    document.querySelector('.tabs .active').classList.remove('active');
    document.querySelector('.tabs-content .active').classList.remove('active');
    e.target.classList.add('active');
    var list = document.querySelectorAll('.tabs-content .item');
    list.forEach(tabContentItem => {
        if(tabContentItem.dataset.tab === e.target.dataset.tab) {
            tabContentItem.classList.add('active');
        }
    })
});

//------Login
document.querySelector('.show-login-pop-up').addEventListener('click', function() {
    document.querySelector('.overlay').classList.remove('hidden'); //чому не можна знайти по .overlay .hidden
    document.querySelector('.pop-up').classList.remove('hidden');
    document.querySelector('.close').addEventListener('click', function() {
        document.querySelector('.overlay').classList.add('hidden');
        document.querySelector('.pop-up').classList.add('hidden');
    })
});

// ------Prevent
document.querySelector('.link-ebanoe').addEventListener('click', function(e) {
    e.preventDefault();
});

//-----Spam
document.querySelector('.t97 .b97').addEventListener('click', function() {
    document.querySelector('.t97').style.display = 'none';
    localStorage.setItem('attentionSpam', 'alarm');
});
