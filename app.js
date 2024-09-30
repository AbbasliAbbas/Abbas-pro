// 1. 
let name = "Your Name"; // Replace "Your Name" with your actual name
console.log(name);

// 2. 
let favoriteFruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
console.log(favoriteFruits[0]); // Logs "Apple"

// 3. 
let person = {
    name: "John",
    age: 30,
    job: "Developer"
};
console.log(person.job); // Logs "Developer"

// 4.
function square(num) {
    return num * num;
}
console.log(square(5)); // Logs 25

// 5. 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 6.
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isEvenOrOdd(4)); // Logs "Even"
console.log(isEvenOrOdd(5)); // Logs "Odd"

// 7. 
let colors = ["Red", "Green", "Blue"];
colors.push("Yellow");
console.log(colors); // Logs ["Red", "Green", "Blue", "Yellow"]

// 8. 
const pi = 3.14;


// 9. 
const sum = function(a, b) {
    return a + b;
};
console.log(sum(3, 4)); // Logs 7

// 10. 
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num);
});

// 11. 
let personWithMethod = {
    name: "Alice",
    greet: function() {
        console.log(this.name);
    }
};
personWithMethod.greet(); // Logs "Alice"

// 12. 
let colorArray = ["Red", "Green", "Blue"];
colorArray.shift();
console.log(colorArray); // Logs ["Green", "Blue"]

// 13.
let nameVar = "John";
console.log(`Hello, ${nameVar}!`); // Logs "Hello, John!"

// 14.
let myArray = [1, 2, 3, 4, 5];
console.log(myArray.length); // Logs 5

// 15. 
let a = 10;
let b = 20;
console.log(a, b); // Logs 10 20

// Reassign new values
a = 30;
b = 40;
console.log(a, b); // Logs 30 40

// 16. 
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbersArray.filter(num => num % 2 === 0);
console.log(evenNumbers); // Logs [2, 4, 6, 8, 10]

// 17. 
function sumArray(arr) {
    return arr.reduce((accumulator, current) => accumulator + current, 0);
}
console.log(sumArray(numbersArray)); // Logs 55

// 18. 
let day = 3; // Change this value to test different cases
switch (day) {
    case 1:
        console.log("It's Monday!");
        break;
    case 2:
        console.log("It's Tuesday!");
        break;
    case 3:
        console.log("It's Wednesday!");
        break;
    case 4:
        console.log("It's Thursday!");
        break;
    case 5:
        console.log("It's Friday!");
        break;
    case 6:
        console.log("It's Saturday!");
        break;
    case 7:
        console.log("It's Sunday!");
        break;
    default:
        console.log("Invalid day!");
}

// 19. 
let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}

// 20. 
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax(numbersArray)); // Logs 10

// 21.
let personWithFullName = {
    firstName: "Jane",
    lastName: "Doe",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(personWithFullName.getFullName()); // Logs "Jane Doe"

// 22.
function doubleArray(arr) {
    return arr.map(num => num * 2);
}
console.log(doubleArray(numbersArray)); // Logs [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// 23.
let car = {
    make: "Toyota",
    model: "Corolla",
    start: function() {
        console.log("Car started");
    }
};
car.start(); // Logs "Car started"

// 24. 
let largeNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
let firstGreaterThan50 = largeNumbers.find(num => num > 50);
console.log(firstGreaterThan50); // Logs 60

// 25. 
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(mergeArrays(array1, array2)); // Logs [1, 2, 3, 4, 5, 6]

// 26. 
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello")); // Logs "olleH"

// 27.
function wordLengths(words) {
  return words.map(word => word.length);
}
console.log(wordLengths(["hello", "world", "JavaScript"])); // Logs [5, 5, 10]

// 28. 
function firstThreeElements(arr) {
  return arr.slice(0, 3);
}
console.log(firstThreeElements([1, 2, 3, 4, 5])); // Logs [1, 2, 3]

// 29.
function objectToArray(obj) {
  return Object.entries(obj);
}
console.log(objectToArray({ name: "Alice", age: 25 })); // Logs [["name", "Alice"], ["age", 25]]

// 30. 
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })); // Logs { a: 1, b: 3, c: 4 }

// 31. 
function flattenArray(arr) {
  return arr.reduce((flat, current) => flat.concat(current), []);
}
console.log(flattenArray([[1, 2], [3, 4], [5]])); // Logs [1, 2, 3, 4, 5]

// 32. 
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Logs 120

// 33. 
function allPositive(arr) {
  return arr.every(num => num > 0);
}
console.log(allPositive([1, 2, 3])); // Logs true
console.log(allPositive([-1, 2, 3])); // Logs false

// 34. 
function filterByProperty(arr, key, value) {
  return arr.filter(obj => obj[key] === value);
}
const objectsArray = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 1, name: "Charlie" }];
console.log(filterByProperty(objectsArray, 'id', 1)); // Logs [{ id: 1, name: "Alice" }, { id: 1, name: "Charlie" }]

// 35.
function sortByProperty(arr, key) {
  return arr.sort((a, b) => a[key] - b[key]);
}
const sortedArray = sortByProperty(objectsArray, 'id');
console.log(sortedArray); // Logs sorted array by id

// 36. 
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 == null || obj2 == null) {
      return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
          return false;
      }
  }
  return true;
}
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // Logs true
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // Logs false

// 37. 
function mostFrequentCharacter(str) {
  const charMap = {};
  let maxChar = '';
  let maxCount = 0;

  for (let char of str) {
      charMap[char] = (charMap[char] || 0) + 1;
      if (charMap[char] > maxCount) {
          maxCount = charMap[char];
          maxChar = char;
      }
  }
  return maxChar;
}
console.log(mostFrequentCharacter("abccdeefff")); // Logs "f"

// 38.
function uniqueValues(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log(uniqueValues([1, 2, 3], [3, 4, 5])); // Logs [1, 2, 3, 4, 5]

// 39. 
function countCharacter(str, char) {
  return str.split('').filter(c => c === char).length;
}
console.log(countCharacter("hello world", 'o')); // Logs 2

// 40.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

function getPrimesUpTo100() {
  let primes = [];
  for (let i = 1; i <= 100; i++) {
      if (isPrime(i)) primes.push(i);
  }
  return primes;
}
console.log(getPrimesUpTo100()); // Logs all prime numbers from 1 to 100

// 41.
function rotateArray(arr, n) {
  n = n % arr.length; // To handle cases where n > arr.length
  return arr.slice(-n).concat(arr.slice(0, arr.length - n));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Logs [4, 5, 1, 2, 3]

// 42.
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
}
console.log(shuffleArray([1, 2, 3, 4, 5])); // Logs a shuffled array

// 43.
function groupByProperty(arr, key) {
  return arr.reduce((result, obj) => {
      (result[obj[key]] = result[obj[key]] || []).push(obj);
      return result;
  }, {});
}
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Alice", age: 35 }
];
console.log(groupByProperty(people, 'name')); // Logs grouped objects by name

// 44. 
function arrayIntersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}
console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Logs [2, 3]

// 45. 
function longestWord(str) {
  return str.split(' ').reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
  }, '');
}
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // Logs "jumps"

// 46. 
function generateRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(generateRandomHexColor()); // Logs a random hex color code

// 47. .
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}
console.log(fibonacci(10)); // Logs 55 (10th Fibonacci number)

// 48. 
function removeDuplicates(arr) {
  return arr.reduce((acc, current) => {
      if (!acc.includes(current)) acc.push(current);
      return acc;
  }, []);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Logs [1, 2, 3, 4, 5]

// 49.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
  }
  return -1; // Target not found
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); // Logs 3 (index of 4)

// 50. 
function areAnagrams(str1, str2) {
  const sortedStr1 = str1.replace(/\s+/g, '').split('').sort().join('');
  const sortedStr2 = str2.replace(/\s+/g, '').split('').sort().join('');
  return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("listen", "silent")); // Logs true
console.log(areAnagrams("hello", "world")); // Logs false
