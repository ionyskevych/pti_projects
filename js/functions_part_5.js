// Создать функции lastIndexOf, shift, getMatrixSum из файла js/functions_part_1 используя цикл for

var lastIndexOf = function(array, value) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
};
// console.log(lastIndexOf([1, 3, 5, 6, 7, 3, 6], 8));

// shift
var shift = function(array) {
    var result = [];
    for (var i = 1; i < array.length; i++) {
        result[result.length] = array[i];
    }
    return result;
};
// console.log(shift([3, 5, 6]));

// getMatrixSum
var getMatrixSum = function(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
};
// console.log(getMatrixSum([[1, 2], [5, 4], [1, 2]]));


// Перепиши вызовы функций ниже используя call и apply:
// [1,3,5,7].includes(3);
// [1,3,5,7].indexOf(5);
// [1,3,5,7].join('/');
// 'Вася любит яблоки'.replace('яблоки', 'Киев');
// 'Киев — столица Украины'.slice(7, 14)

// console.log([].includes.call([1,3,5,7], 3));
// console.log([].includes.apply([1,3,5,7], [3]));

Array.prototype.includes.call([1,3,5,7], 3);
Array.prototype.includes.apply([1,3,5,7], [3]);

// console.log([].indexOf.call([1,3,5,7], 5));
// console.log([].indexOf.apply([1,3,5,7], [5]));

// console.log([].join.call([1,3,5,7], '/'));
// console.log([].join.apply([1,3,5,7], ['/']));

// console.log(''.replace.call('Вася любит яблоки', 'яблоки', 'Киев'));
// console.log(''.replace.apply('Вася любит яблоки', ['яблоки', 'Киев']));

// console.log(' '.slice.call('Киев — столица Украины', 7, 14));
// console.log(' '.slice.apply('Киев — столица Украины', [7, 14]));


// Создать функцию sumOfAllArguments которая принимает произвольное количество чисел и возвращает их сумму.
// Пример работы:
// sumOfAllArguments(2, 2, 3);
// => 7
// sumOfAllArguments(2, 2, 3, 3, 10);
// => 20

var sumOfAllArguments = function() {
    var sum = 0;
    for (i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
};

// Создать функцию trim которая удаляет пробельные символы с начала и конца строки.
// Пример работы:
// trim('   Hello world!   ');
// => 'Hello world!'
var trim = function(string) {
    var i;
    var begin;
    var end;
    var result = '';

    for (i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            begin = i;
            break;
        }
    }

    for (i = string.length - 1; i >= 0; i--) {
        if (string[i] !== ' ') {
            end = i;
            break;
        }
    }

    for (i = begin; i <= end; i++) {
        result += string[i];
    }

    return result;
};

// console.log(trim('   Hello world!    '));


// Познакомиться с работой следующих встроенных свойств, функций и методов
// Math: abs, ceil, floor, max, min, pow, random, round, sqrt, trunc
// JSON: stringify, parse

// Привести примеры использования ниже
// abs

var a = function(number) {
    return Math.abs(number);
};

// console.log(a(-5));

// ceil
// console.log(Math.ceil(24.9875));

//floor
// console.log(Math.floor(24.9875));

// max
// console.log(Math.max(10, 20));

// min
// console.log(Math.min(10, -20));

//pow
// console.log(Math.pow(5, 2));

// random
// console.log(Math.random());

// round
// console.log(Math.round(34.5));
// console.log(Math.round(34.3));

// sqrt
// console.log(Math.sqrt(81));

// trunc
// console.log(Math.trunc(42.84));

// JSON: stringify
var a = {x: 4, y: 6};
// console.log(JSON.stringify(a));

// parse
// console.log(JSON.parse('{"x":4,"y":6}'));