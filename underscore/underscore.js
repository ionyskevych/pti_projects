// Написать примеры использование функций из cheatsheets/cheat_sheet_underscore.txt
// Коллекции
// each
_.each([3, 2, 1], function(el, index) {
    console.log(el * index);
});
 // => [0, 2, 2]

// map
_.map({one: 1, two: 2, three: 3}, function(num, key) {
    return num * 5;
});
// => [5, 10, 15]

// reduce
_.reduce([1, 2, 3], function(memo, num) {
    return memo + num;
}, 0);
// => 6

// reduceRight
var list = [[0, 1], [2, 3], [15, 20]];
var flat = _.reduceRight(list, function(memo, array) {
    return memo.concat(array);
}, []);
// => [15, 20, 2, 3, 0, 1]

// find
_.find([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 === 0;
});
// => 2

// filter
_.filter([1, 2, 3, 4, 5, 6], function(num) {
    return !num % 2 === 0;
});
// => [1, 3, 5]

// where
var cars = [
    {audi: 'red', year: 2020, fuel: '-'},
    {acura: 'green', year: 2020, fuel: '-'},
    {bmw: 'red', year: 2018, fuel: '-'},
    {audi: 'red', year: 2010, fuel: '-'}
];
_.where(cars, {year: 2020, fuel: '-'});
// => [{audi: 'red', year: 2020, fuel: '-'},
//     {acura: 'green', year: 2020, fuel: '-'}]

// findWhere
var movies = [
    { title: 'Крёстный отец', director: 'Фрэнсис Форд Коппола', year: '1972', budget: 6000000 },
    { title: 'Крёстный отец 2', director: 'Фрэнсис Форд Коппола', year: '1974', budget: 13000000 },
    { title: 'Тёмный рыцарь', director: 'Кристофер Нолан', year: '2008', budget: 185000000 },
    { title: 'Побег из Шоушенка', director: 'Фрэнк Дарабонт', year: '1994', budget: 25000000 },
    { title: 'Криминальное чтиво', director: 'Квентин Тарантино', year: '1994', budget: 8000000 }
];
// console.log(_.findWhere(movies, {year: '2008'}));
// => { title: 'Тёмный рыцарь', director: 'Кристофер Нолан', year: '2008', budget: 185000000 },

// reject
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 === 0; });
// => [1, 3, 5]

// every
_.every([2, 4, 5], function(num) { return num % 2 === 0; });
// => false

// some
_.some([2, 4, 5], function(num) { return num % 2 === 0; });
// => true

// contains
_.contains([1, 2, 3], 3);
// => true

// pluck
var persons = [
    {name: 'Anna', age: 40},
    {name: 'Hanna', age: 50},
    {name: 'Inna', age: 60}
];
_.pluck(persons, 'name');
//=> ["Anna", "Hanna", "Inna"]

// max
_.max([1, 3, 5, 900, 2, 1000]);
// => 1000

// min
_.min([1, 3, 5, 900, 2, 1000]);
// => 1

// sortBy
var stooges = [
    {color: 'red', quantity: 2},
    {color: 'blue', quantity: 4},
    {color: 'green', quantity: 6}
];
_.sortBy(stooges, 'color');
//=> [{color: 'blue', quantity: 4}, {color: 'green', quantity: 6}, {color: 'red', quantity: 2}];

// shuffle
_.shuffle([1, 2, 3, 4, 5, 6]);
//=> [4, 1, 6, 3, 5, 2]

// sample
_.sample([1, 2, 3, 4, 5, 6], 3);
// => [1, 6, 2]

// toArray
(function() {return _.toArray(arguments).slice(1); })(1, 2, 7, 8);
// => [2, 7, 8]

// size
_.size({red: 1, blue: 2, yellow: 3});
// => 3

// partition
var isOdd = function(n) { return n % 2 === 0 };
_.partition([0, 3, 2, 5, 4, 1], isOdd);
// => [[3, 5, 1], [0, 2, 4]]

// Массивы
// first
_.first([5, 4, 3, 2, 1], 3);
// => [5, 4, 3]

// last
_.last([5, 4, 3, 2, 1]);
// => 1

// rest
_.rest([5, 1, 2, 2, 1]);
// => [1, 2, 2, 1]

// compact
_.compact([0, 1, undefined, 2, NaN, 3]);
// => [1, 2, 3]

// flatten
_.flatten([1, [2], [3, [[4]]]]);
// => [1, 2, 3, 4];

// without
_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
// => [2, 3, 4]

// union
_.union([5, 7, 3, 1, 2], [101, 2, 1, 10], [2, 1]);
//=> [5, 7, 3, 1, 2, 101, 10]

// intersection
_.intersection([5, 6, 2, 3], [101, 5, 6, 10], [6, 5]);
// => [5, 6]

// difference
_.difference([ 10, 1, 2, 3, 4, 5], [5, 2, 10]);
// => [1, 3, 4]

// uniq
_.uniq([1, 2, 1, 3, 1, 4]);
// => [1, 2, 3, 4]

// indexOf
_.indexOf([1, 2, 3], 5);
// => -1

// lastIndexOf
_.lastIndexOf([1, 7, 3, 1, 7, 3], 7);
// => 4

// findIndex
_.findIndex(cars, function(car) { return car.audi === 'red' });
//=> 0

// findLastIndex
_.findLastIndex(cars, {audi: 'red'});
// => 3

// Функции
// bind
var guy = {
    name: 'John'
};
var greeting = function(text) {
    console.log(text + ', ' + this.name);
};
var greetingBind = _.bind(greeting, guy);
greetingBind('Welcome');
greetingBind('Chao');
// => Welcome, John
// => Chao, John

// throttle
var optimization = _.throttle(function() {
    console.log('!');
}, 3000);
window.addEventListener('resize', optimization);
// => функция будет выводить '!' только раз в 300 милисикунд

// compose
var f1 = function(n) {
    return n + 1;
};
var f2 = function(n) {
    return n * 4;
};
var f3 = function(n) {
    return n - 5;
};
var pipe = _.compose(f3, f2, f1);
pipe(5);
// => 19

// Объекты
// keys
_.keys({one : 1, two : 2, three : 3});
// => ["one", "two", "three"]

// values
_.values({one : 1, two : 2, three : 3});
// => [1, 2, 3]

// pairs
var fruitsPairs = _.pairs({apple: 10, melon: 20, potato: 30, tomato: 50 });
//[['apple', 10], ['melon', 20], ['three', 30], ['tomato', 50]]

// invert
_.invert({red: 'apple', green: "kiwi", yellow: 'lemon'});
//=> {apple: 'red', kiwi: 'green', lemon: 'yellow'};

// create
var proto = {red: 'apple', green: 'kiwi', yellow: 'lemon'};
_.create(proto, {violet: 'grape'});
// => {violet: 'grape'}
// _proto_:
//     red: apple
//     green: kiwi
//     yellow: lemon

// extend
_.extend({name : 'Iuliia'}, {age : 33});
// => {name : 'Iuliia', age : 33}

// pick
 _.pick(fruits, ['melon', 'tomato']);
 // => {melon: 20, tomato: 50}

// omit
_.omit({red: 'apple', green: 'kiwi', yellow: 'lemon'}, 'yellow');
// => {red: 'apple', green: 'kiwi'}

// defaults
var newFruit = {yellow: 'lemon'};
_.defaults(newFruit, {yellow: "apple", green: 'kiwi'});
// => {yellow: 'lemon', green: 'kiwi'}

// has
_.has({red: 'apple', green: 'kiwi', yellow: 'lemon'}, 'red');
// => true

// isEqual
var fruit = {red: 'apple'};
var redFruit  = {red: 'apple'};
fruit === redFruit;
_.isEqual(fruit, redFruit);
// => true

// isMatch
var fruits = {red: 'apple', green: 'kiwi', yellow: 'lemon'};
_.isMatch(fruits, {red: 'apple'});
// => true

// isEmpty
_.isEmpty([]);
// => true

// isArray
_.isArray([4, 5]);
// => true

// isObject
_.isObject({red: 'apple', green: 'kiwi', yellow: 'lemon'});
// => true

// isFunction
_.isFunction(alert);
// => true

// isString
_.isString(5);
// => false

// isNumber
_.isNumber(10 + 5);
// => true

// isBoolean
_.isBoolean(7);
// false

// isNull
_.isNull(null);
// => true

// isUndefined
_.isUndefined(window.missingVariable);
// => true

// Утилиты
// noConflict
var underscore = _.noConflict();
//=> Отвяжет переменную _ от объекта Underscore. Вернёт ссылку на объект

// noop
_.noop();
//=> function() {}; - функция заглушка, всегда возвращает undefined

// random
_.random(0, 100);
//=> рандомное число от 0 до 100 включительно

// uniqueId
_.uniqueId('contact_');
// => 'contact_104' Генерирует абсолютно уникальные ID
// для на клиентской стороне

// result
var obj = {x: 2, getX: function() { return this.x; }};
_.result(obj, 'x');
// or
_.result(obj, 'getX');
// => 2

// now
_.now();
// => время в милисикундах от 01/01/1970
