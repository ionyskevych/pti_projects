// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы




// Создать объект со свойствами: x, getX, changeX. Где значение свойства "x" это число,
// а getX и changeX это методы которые манипулируют значением этого свойства "x".
// getX возвращает значение свойства "x", а changeX принимает в качестве аргумента число
// и результатом работы этого метода является присваивание этого числа свойству "x" объекта.
var obj = {
    x: 5,
    getX: function() {
        return this.x;
    },
    changeX: function(number) {
        this.x = number;
    }
};

// Создать функцию-конструктор Circle которая принимает 3 параметра:
// координаты центра окружности (x, y) и ее радиус (radius).
// Возвращает объект с собственными тремя свойствами (x, y, radius) и унаследованными тремя методами.
// 1. Метод getDiameter возвращает диаметр откружности. Формула расчета диаметра: diameter = 2 * radius
// 2. Метод getPerimeter возвращает длину откружности. Формула расчета длины окружности: perimeter = 3.14 * diameter
// 3. Метод getSquare возвращает площадь откружности. Формула расчета площади окружности: square = 3.14 * (radius в квадрате)
// Пример работы:
// var circle = new Circle(5, 5, 5);
// circle.getDiameter();
// => 10
// circle.getPerimeter();
// => 31.41592653589793
// circle.getSquare();
// => 78.53981633974483
var Circle = function(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
};

Circle.prototype.getDiameter = function() {
    return 2 * this.radius;
};

Circle.prototype.getPerimeter = function() {
    return this.getDiameter() * 3.14;
};

Circle.prototype.getSquare = function() {
    return this.radius * this.radius * 3.14;
};

var circle = new Circle(5, 5, 5);

// console.log(circle.getDiameter());
// console.log(circle.getPerimeter());
// console.log(circle.getSquare());

// console.log(circle);
// console.log(new Circle(8,8,8));

// Создать класс Product который принимает 2-4 параметра в виде объекта:
// название, цена, скидка в % (необязательный) и кэшбэк в % (необязательный)
// Возвращает объект с двумя-четырмя собственными свойствами (title, price, discountRate,
// cashbackRate) и двумя унаследованными методами.
// 1. Метод getPriceWithDiscount возвращает цену с учетом скидки. Формула расчета цены с учетом
// скидки: цена с учетом скидки = price - price * discountRate / 100
// 2. Метод getCashbackAmount возвращает сумму кэшбэка. Формула расчета суммы кэшбэка: сумма
// кэшбэка = price * cashbackRate / 100
// Пример работы:
// var apple = new Product({title: 'Apple', price: 250, discountRate: 10, cashbackRate: 1});
// apple.getPriceWithDiscount();
// => 225
// apple.getCashbackAmount();
// => 2.25
// var pear = new Product({title: 'Pear', price: 650});
// pear.getPriceWithDiscount();
// => 650
// pear.getCashbackAmount();
// => 0
var Product = function(options) {
    this.title = options.title;
    this.price = options.price;
    this.discountRate = options.discountRate || 0;
    this.cashbackRate = options.cashbackRate || 0;
};

Product.prototype.getPriceWithDiscount = function() {
    return this.price - this.price * this.discountRate / 100;
};

Product.prototype.getCashbackAmount = function() {
    return this.price * this.cashbackRate / 100;
};

var apple = new Product({title: 'Apple', price: 250, discountRate: 10, cashbackRate: 1});
console.log(apple.price);
console.log(apple.getPriceWithDiscount());
console.log(apple.getCashbackAmount());

var pear = new Product({title: 'Pear', price: 650});
console.log(pear.getPriceWithDiscount());
console.log(pear.getCashbackAmount());


// Создать функции size, last, getPositiveNumbers, without, min, sum, как методы массивов
// Примеры работы:
// [7, 2, 8].size();
// => 3
Array.prototype.size = function() {
    return this.length;
};

// [5, 4, 3, 2, 1].last();
// => 1
Array.prototype.last = function() {
    return this[this.length - 1];
};
// console.log([5, 4, 3, 2, 1].last());

// [10, -5, 100, -2, 1000].getPositiveNumbers();
// => [10, 100, 1000]
Array.prototype.getPositiveNumbers = function() {
    var result = [];
    var i = 0;
    while (i < this.length) {
        if (this[i] > 0) {
            result[result.length] = this[i];
        }
        i++;
    }
    return result;
};

// [3, 6, 7, 'rere'].without(6);
// => [3, 7, 'rere']
Array.prototype.without = function(value) {
    var result = [];
    var i = 0;
    while (i < this.length) {
        if (this[i] !== value) {
            result[result.length] = this[i];
        }
        i++;
    }
    return result;
};
// console.log([3, 6, 7, 'rere'].without(6));

// [10, 5, 100, 2, 1000].min();
// => 2
Array.prototype.min = function() {
    var result = this[0];
    var i = 1;
    while (i < this.length) {
        if (this[i] < result) {
            result = this[i];
        }
        i++;
    }
    return result;
};
// console.log([10, 5, 100, 2, 1000].min());

// [2, 2, 3].sum();
// => 7
Array.prototype.sum = function() {
    var i = 0;
    var result = 0;
    while (i < this.length) {
        result += this[i];
        i++;
    }
    return result;
};
// console.log([2, 2, 3].sum());




// Создать функции keys, values, pairs, extend, как методы объектов
Object.prototype.keys = function() {
    var result = [];
    for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
            result[result.length] = prop;
        }
    }
    return result;
};
// console.log({one: 1, two: 2, three: 3}.keys());

// TODO: add functions

// Создать функцию charAt которая принимает строку и индекс и возвращает указанный символ из строки.
// Пример работы:
// charAt('March', 0);
// => 'M'
var charAt = function(string, index) {
    return string[index];
};
// console.log(charAt('March', 0));



// Создать функцию join которая принимает массив и возвращает строку состоящую из его элементов разделенных запятой (по-умолчанию) или любым другим разделителем (строкой) указанным во втором аргументе вызываемой функции.
// Пример работы:
// join([1, 'lol', 5, 'dro']);
// => "1,lol,5,dro"
// join([1, 'lol', 5, 'dro'], '+');
// => "1+lol+5+dro"
var join = function(array, separator) {
    var i = 0;
    var str = '';
    separator = separator || ',';
    while (i < array.length - 1) {
        str += array[i] + separator;
        i++;
    }
    return str + array[array.length - 1];
};
// console.log(join([1, 'lol', 5, 'dro'], '+'));
// console.log(join([1, 'lol', 5, 'dro']));



// Познакомиться с возможностями базовых (встроенных) классов
// Number
//     Number.prototype: toFixed
// String
//     String.prototype: charAt, concat, includes, indexOf, lastIndexOf, repeat, replace, slice, split,
//         substr, substring, toLowerCase, toUpperCase, trim
// Array
//     Array.prototype: concat, forEach, includes, indexOf, join, lastIndexOf, pop, push, reverse,
//         shift, slice, splice, unshift, length, sort, map, filter, every, some, reduce, reduceRight
// Object: keys, values, create, assign, entries
//     Object.prototype: hasOwnProperty
// Function
//     Function.prototype: apply, call, bind

// Привести примеры использования ниже

// Number toFixed
var number = 10.954589;
// console.log(number.toFixed());
// console.log(number.toFixed(1));
// console.log(number.toFixed(5));

// String charAt
// console.log('Spanish'.charAt(2));

// concat
var hi = 'Hi! ';
// console.log(hi.concat('My name is Iuliia.'));

// includes
var string = 'It is not my best day';

// console.log(string.includes('is'));
// console.log(string.includes('bad'));
// console.log(string.includes('best day'));
// console.log(string.includes('not'));

// indexOf
var string = 'Bla bla car';
// console.log(string.indexOf('l'));

// lastIndexOf
var string = 'Bla bla car';
// console.log(string.lastIndexOf('l'));


// repeat
var string = 'Window';
// console.log(string.repeat(5));

// replace
var sentence = 'The big fat cat is ill';
// console.log(sentence.replace('cat', 'dog'));

// slice
var string = 'Yo vivo in Kyiv.';
// console.log(string.slice(11,15));

// split
var string = 'Yo vivo in Kyiv';
// console.log(string.split(''));
// console.log(string.split('i'));


// substr
var str1 = 'Valencia Shmalencia'
var str2 = str1.substr(2);
// console.log(str1);
// console.log(str2);


// substring
var str1 = 'Valencia Shmalencia'
var str2 = str1.substring(0, 3);
// console.log(str1);
// console.log(str2);
// console.log('Valensia'.substring(0, 5));

// toLowerCase
// console.log('MMMM Phhh OOP'.toLowerCase());

// toUpperCase
// console.log('mmmm phhh oop'.toUpperCase());

// trim
var string = '   The wather is nice!   ';
// console.log(string.trim());



// Array
//concat
var array1 = [1, 2, 3];
var array2 = [4, 5, 6, 7];
var array3 = array1.concat(array2);
// console.log(array3);

// forEach
// array1.forEach(function (par1, par2, par3) {
//     console.log(par1);
//     console.log(par2);
//     console.log(par3);
//     console.log('end of iteration');
//
//     console.log('for element ' + elem + ' index is: ' + idx);
//     console.log(something);
// });

// includes
var array = [5, 6, 7, 9];

// console.log(array.includes(4));
// console.log(array.includes(5));


// indexOf
var array = [5, 6, 7, 9];
// console.log(array.indexOf(7));

// join
var array = [5, 6, 7, 9];
// console.log(array.join());

// lastIndexOf
var array = [5, 6, 7, 9, 7, 7];
// console.log(array.lastIndexOf(7));


// pop
var array = [5, 6, 7, 9];
array.pop();
// console.log(array);

// push
var array = [5, 6, 7, 9];
array.push(6);
// console.log(array);

// reverse
var array = [5, 6, 7, 9];
// console.log(array.reverse());


// shift
var array = [5, 6, 7, 9];
// console.log(array.shift());
// console.log(array);

// slice
var array = [5, 6, 7, 9, 5, 6, 3, 6, 9, 3];
// console.log(array.slice(3,8));

// splice
var colors = ['green', 'red', 'azul', 'black'];
colors.splice(2, 0, 'blue');
colors.splice(2, 3, 'blue');
// console.log(colors);

// unshift
var colors = ['green', 'red', 'azul', 'black'];
// console.log(colors.unshift('rojo'));
// console.log(colors);

// length
// console.log(colors.length);

// sort
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
// console.log(fruits);

// map
[1, 2, 3, 4].map(function(n) { return n * n; });


// filter
function biggerThenTen(value) {
    return value >= 10;
}
// console.log([100, 2, 38, 49, 5, 68].filter(biggerThenTen));

// every
function big(element, index, array) {
    return element >= 10;
}
// console.log([12, 5, 8, 130, 44].every(big));
// console.log([12, 54, 18, 130, 44].every(big));


// some
function big(element, index, array) {
    return element >= 10;
}
// console.log([2, 5, 8, 1, 4].some(big));
// console.log([12, 54, 18, 130, 44].some(big));


// reduce
var result = [1, 2, 3, 4].reduce(function(memo, n) {
    //return memo * n;
    return memo + n;
});
// console.log(result);

// reduceRight
var array = [1, 2, 3];
// var sum = array.reduceRight(function (prevElement, currElement) {
//     console.log({prevElement, currElement});
//     return prevElement + currElement;
// });
// console.log(array.sum());

// Object
// keys

var car = {
    color: 'red',
    sits: 7,
    electro: true
};
// console.log(Object.keys(car));

// values
// console.log(Object.values(car));

// create
var protoPerson = { name: 'Ivan', secondName: 'Ivanenko', age: 30 };
var person = Object.create(protoPerson);
// console.log(person);
// console.log(protoPerson);


// assign
// console.log(Object.assign({x: 2, y: 2, z: 2}, {z: 4, radius: 5}));

// entries
var person = { name: 'Ivan', secondName: 'Ivanenko', age: 10 };
// console.log(Object.entries(person));

// Object.prototype: hasOwnProperty
// console.log(person.hasOwnProperty('k'));
// console.log(person.hasOwnProperty('name'));


// Function
var book = {
    year: 1984,
    name: 'Unknown'
};
var book2 = {
    year: 1984,
    name: 'Timmy'
};
var func = function(before, after) {
    before = before === undefined ? '' : before;
    after = after === undefined ? '' : after;
    console.log(before + 'Год ' + this.year + ' Автор ' + this.name + after);
};

func.apply(book, ['-> ', '!!']);
func.apply(book2);
func.call(book, '=> ', '??');

var newFunc = func.bind(book);


// Создать функцию reduce...
// Пример работы:
// reduce([1, 2, 3], function(memo, num) { return memo + num; }, 0);
// => 6
var reduce = function(list, iteratee, memo) {
    for (var i = 0; i < list.length; i++) {
        memo = iteratee(memo, list[i]);
    }
    return memo;
};
// console.log(reduce([1, 2, 3], function(memo, num) { return memo + num; }, 0));



// Создать функцию uniq... Принимает массив значений и возвращает массив уникальных значений.
// Можно использовать любые изученные встроенные методы
// Пример работы:
// uniq([2, 6, 2, 5, 2]);
// => [2, 6, 5]
var uniq = function(list) {
    return list.reduce((memo, item) => {
        if (!(memo.includes(item))) {
            memo.push(item);
        }
        return memo;
    }, []);
};
// console.log(uniq([2, 6, 2, 5, 2]));


// Создать функцию count... Принимает массив значений и возвращает объект где ключи это уникальные
// значения, а значения это их количество.
// Пример работы:
// count(['apple', 'plum', 'apple', 'banana', 'pear', 'pear']);
// => {apple: 2, plum: 1, banana: 1, pear: 2}
var count = function(list) {
    return list.reduce((memo, item) => {
        if (memo[item] === undefined) {
            memo[item] = 1;
        } else {
            memo[item] += 1;
        }
        return memo;
    }, {});
};
// console.log(count(['apple', 'plum', 'apple', 'banana', 'pear', 'pear']));



// Написать функцию преобразования getSearchParams которая принимает строку вида
// '?a=1&b=2&c=3&d=4' и возвращает объект вида {a: '1', b: '2', c: '3', d: '4'}
// Можно использовать любые изученные встроенные методы
// Пример работы:
// getSearchParams('');
// => {}
// getSearchParams('?a=6&b=9');
// => {a: '6', b: '9'}

// TODO: wrong code
var getSearchParams = function(text){
    var result = {};
    var re = /[a-z]=[0-9]/g;
    var list = text.match(re);
    for (var i = 0; i < list.length; i++) {
        result[list[i][0]] = list[i][2];
    }
    return result;
};
// console.log(getSearchParams('?a=1&b=2&c=3&d=4'));
