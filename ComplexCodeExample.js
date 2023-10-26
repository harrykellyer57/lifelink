/* 
   Filename: ComplexCodeExample.js
   Description: This code is a complex example demonstrating various JavaScript concepts and techniques.
*/

// Define a class called "Car"
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Define a method to display car details
  displayDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

// Create an array of Car objects
const cars = [
  new Car("Toyota", "Camry", 2020),
  new Car("Honda", "Accord", 2019),
  new Car("Ford", "Mustang", 2021)
];

// Iterate over the cars array and display details
cars.forEach((car) => {
  car.displayDetails();
});

// Define a function to calculate fibonacci series up to a given number
function fibonacciSeries(limit) {
  const series = [0, 1];
  
  for (let i = 2; i < limit; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }

  return series;
}

// Call the fibonacciSeries function
const fibSeries = fibonacciSeries(10);
console.log("Fibonacci Series:");
console.log(fibSeries);

// Define an async function which fetches data from an API
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log('Fetched data:');
    console.log(data);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

// Call the fetchData function
fetchData();

// Create a function to calculate the sum of two numbers
function sum(a, b) {
  return a + b;
}

// Call the sum function
const result = sum(5, 3);
console.log('Sum Result:', result);

// Define an arrow function that returns the square of a number
const square = (num) => num * num;

// Call the square function
const sqrResult = square(9);
console.log('Square Result:', sqrResult);

// Define a function to filter even numbers from an array
function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// Call the filterEvenNumbers function
const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log('Even Numbers:');
console.log(evenNumbers);

// Define a closure function to create custom counters
function createCounter() {
  let count = 0;

  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count
  };
}

// Create two counters using the createCounter function
const counter1 = createCounter();
const counter2 = createCounter();

// Perform various operations on counters
console.log('Counter 1:');
console.log('Initial Count:', counter1.getCount());
counter1.increment();
counter1.increment();
counter1.decrement();
console.log('Updated Count:', counter1.getCount());

console.log('Counter 2:');
console.log('Initial Count:', counter2.getCount());
counter2.increment();
console.log('Updated Count:', counter2.getCount());

// Define a generator function to generate integers in a range
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// Use the range generator to iterate over a range of numbers
console.log('Numbers in Range:');
for (const num of range(1, 5)) {
  console.log(num);
}