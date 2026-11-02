console.log("=== ЗАДАНИЕ 1: Числа ===");

// 1. Создаем массив из 5 чисел
let numbers = [10, 3, 7, 15, 2];
console.log("Исходный массив:", numbers);

numbers.push(42);
numbers.shift();
console.log("После push и shift:", numbers);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Только чётные:", evenNumbers);

let multipliedNumbers = numbers.map(num => num * 5);
console.log("Умноженные на 5:", multipliedNumbers);

let sum = numbers.reduce((acc, num) => acc + num, 0);
let average = sum / numbers.length;
console.log("Среднее арифметическое:", average);

numbers.sort((a, b) => a - b);
console.log("Отсортированные:", numbers);


console.log("\n=== ЗАДАНИЕ 2: Знаменитости ===");

// 2. Создаем массив объектов
const celebritiesList = [
    { name: "Michael Jackson", age: 50, role: "singer" },
    { name: "Keanu Reeves", age: 61, role: "actor" },
    { name: "Billie Eilish", age: 24, role: "singer" },
    { name: "Tom Holland", age: 29, role: "actor" },
    { name: "Zendaya", age: 29, role: "actress" },
    { name: "Lionel Messi", age: 38, role: "footballer" },
    { name: "Cristiano Ronaldo", age: 41, role: "footballer" },
    { name: "Taylor Swift", age: 36, role: "singer" },
    { name: "Emma Watson", age: 35, role: "actress" },
    { name: "Justin Bieber", age: 32, role: "singer" }
];

const names = celebritiesList.map(person => person.name);
console.log("Только имена:", names);

const descriptions = celebritiesList.map(person => `${person.name} is a ${person.role}`);
console.log("Описания:", descriptions);

const sortedByAge = [...celebritiesList].sort((a, b) => a.age - b.age);
const youngest = sortedByAge[0];
const oldest = sortedByAge[sortedByAge.length - 1];
console.log(`Самый младший: ${youngest.name}, Самый старший: ${oldest.name}. Разница: ${oldest.age - youngest.age} лет`);

const hasMinor = celebritiesList.some(person => person.age < 18);
console.log("Есть несовершеннолетние?", hasMinor);

const olderThan20 = celebritiesList.filter(person => person.age > 20);
console.log("Старше 20 лет:", olderThan20);