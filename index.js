//Задание 1

/*let input = prompt("введите значение");
let number = +input;

if (typeof number === "number" && !isNaN(number)) {
    // Проверяем, чётное или нечётное
    if (number % 2 === 0) {
        alert('Чётное число');
    } else {
        alert('Нечётное число');
    }
} else {
    alert('Упс, кажется, вы ошиблись');
}*/


//Задание 2
/*let x = false
if (typeof x === "number") {
    alert("x — число")
} else if (typeof x ==="string") {
    alert("x - строка");
} else if  (typeof x === "boolean") {
    alert("x - логический тип");
} else {
    alert("Тип x не определён");
}
*/

//Задание 3
/*let string = "Hello";
let reversedText = string.split('').reverse().join('');

// Вывод в консоль
console.log(reversedText);*/


//Задание 4
/*let randomNumber = Math.floor(Math.random() * 101);

console.log(randomNumber);*/
//Задание 5
/*const array = [10, 20, 30, 40, 50]; // Произвольный массив

// Вывод количества элементов массива
console.log("Количество элементов массива:", array.length);

// Перебор массива и вывод каждого элемента
array.reduce((_, element) => {
    console.log("Элемент массива:", element);
}, null);*/

//Задание 6
/*let arr = [1,1,1,1,1]

let areAllElementsEqual = true;
arr.forEach(function(item) {
if (item !== arr[0]) {
    areAllElementsEqual = false;
}


});
console.log(areAllElementsEqual)*/
//Задание 7

/*let arr = [1,2,1,3,0,1];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;


arr.forEach(function(item) {
    if (typeof item ==='number' && !isNaN(item)) {
        if (item === 0) {
            zeroCount++;
        } else if (item % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

});
console.log(`Чётные: ${evenCount}`);
console.log(`Нечётные: ${oddCount}`);
console.log(`Нули: ${zeroCount}`);*/


//Задание 8

let myMap = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
]);

for (let key of myMap.keys()) {
    console.log(`Ключ — ${key}`);
}

// Перебираем значения
for (let value of myMap.values()) {
    console.log(`Значение — ${value}`);
}
