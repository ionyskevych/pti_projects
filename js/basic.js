// ВНИМАНИЕ! Соблюдайте форматирование кода (отступы, переносы)

// 1. Создать 10 литералов представлюящих числа (5 целых и 5 дробных)
10000
200
0.9
2
55
100.2
2000.2222
13.3
33.99999
24.7

// 2. Создать 10 строковых литералов
"Playtech"
'hola!'
'Mi familia'
'JS'
'Tree'
"3+5"
'6'
'lluvia'
'hace frio'
'js;;kjvbkjbvjv;vbajf kjsvkbvkab'

// 3. Создать 10 объектов представляющих объекты реального мира. В каждом объекте должно быть не меньше 4 свойств.
var employee = {
    firstName: "Ivan",
    secondName: "Ivanov",
    age: 30,
    married: false
};

var car = {
    vendor: "Volvo",
    fuelType: "diesel",
    crashed: true,
    price: 15000,
    currency: "USD"
};

var movie = {
    title: "The Lord of the Rings",
    director: "Peter Jackson",
    date: 2003,
    budget: 281
};

var book = {
    title: "The Lord of the Rings",
    author: "Tolkien",
    pages: 950,
    publisher: "Ranok"
};

var device = {
    type: "Laptop",
    os: "Windows",
    cpu: 2100,
    x32: false
};

var room = {
    color: "White",
    hight: 3.2,
    windows: 2,
    floor: "wood"
};

var pupil = {
    firstName: "Ivan",
    secondName: "Ivanov",
    age: 10,
    class: 4
};

var student = {
    firstName: "Ivan",
    secondName: "Ivanov",
    age: 20,
    sex: null
};

var country = {
    name: "Spain",
    language: "Spanish",
    sea: true,
    ocean: true
};

var person = {
    firstName: "Ivan",
    secondName: "Ivanov",
    cell: "+3809556987",
    id: 77777777
};

// 4. Создать 10 массивов представляющих массивы некоторых значений из реальной жизни. В каждом массиве должно быть не меньше 4 элементов.
var fibonacci = [0, 1, 1, 2, 3, 5, 8];
var fruits = ["Allpe", "Plam", "Naranja", "Cherry"];
var cars = ["Volvo", "Nissan", "Audi", "Acura"];
var ageRanges = ["0-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70", "71-80", "81-90", "91-100"];
var colors = ['red', 'blue', 'green', 'yellow'];
var names = ['Valeriia', 'Iuliia', 'Nick', 'Anastasiia'];
var banks = ['mono', 'otp', 'aval', 'ukrsib'];
var countries = ['USA', 'UK', 'Spain', 'Poland'];
var jsTypes = ['numders', 'srtings', 'boolean', 'objects'];
var pl = ['js', 'python', 'c', 'c++'];

// 5. Объявить 5 переменных с произвольным именем.
var cat;
var a;
var name;
var age;
var left;

// 6. Объявить еще 5 переменных и в момент объявления присвоить им значения произвольных типов данных.
var carName = "Volvo";
var a = null;
var name = 'Inna';
var age = 33, married = true;

// 7. Создать массив из элементов, значения которых представлены всеми изученными типами данных в JavaScript.
var array = [1, "number", null, undefined, false, {}, [1, 5, 8]];

// 8. Создать объект из 5 свойств. Три свойства должны иметь значения простых типов данных. Два остальных свойства должны иметь значения составного (объектного) типа данных.
var book = {
    title: "The Lord of the Rings",
    author: "Tolkien",
    pages: 950,
    publisher: {
        city: "Kharkiv",
        year: 2004
    },
    library: {
        city: "Kyiv",
        ID: 238756
    }
};

// 9. Написать выражения использующие все изученные арифметические операторы
var a = 5;
var b = 10;
var c = a + b;
var c = b - a;
var c = b / a;
var c = a * b;
var c = b % a;
var c = a++;
var c = b--;

// 10. Написать выражения использующие все изученные операторы сравнения
var c = a < b;
var c = a > b;
var c = a >= b;
var c = a <= b;
var c = a === b;
var c = a !== b;

// 11. Написать выражения использующие все изученные логические операторы
let a = true;
let b = false;
var c = a && b;
var c = b && b;
var c = a || a;
var c = !a;

// 12. Написать выражение использующее тернарный условный оператор
var time = 20;
var s = (time <= 22) ? "play" : "sleep";

// 13. Написать выражения использующие все изученные операторы присваивания
var a = 0;
a += 1;
a -= 2;
a *= 5;
a /= 2;
a %= 3;

// 14. Создать массив из 10 элементов (чисел) и написать выражения возвращающие значение первого, третьего, пятого и восьмого элемента
let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
fibonacci[0];
fibonacci[2];
fibonacci[4];
fibonacci[7];

// 15. Создать массив и написать 3 выражения меняющие значения его элементов
var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
fibonacci[0] = 100;
fibonacci[4] = 101;
fibonacci[6] = 911;

// 16. Создать объект из 5 свойств и написать 3 выражения возвращающие значения произвольных свойств
var person = {firstName: "Olga", surname: "Kovalenko", age: 33, sex: "Female", married: true};
person.firstName;
person['sex'];
person.age;

// 17. Создать объект и написать 3 выражения меняющие значения его свойств
var person = {
    firstName: "Olga",
    surname: "Kovalenko",
    age: 33,
    sex: "Female",
    married: true
};

person.firstName = "Kolia";
person.sex = "Male";
person.age = 50;