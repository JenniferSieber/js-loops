console.log('for Loop')
console.log('The for loop is a common loop structure with three parts: initialization, condition, and iteration expression.')
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log('while loop')
console.log("The while loop repeats a block of code as long as a specified condition is true.")
let w = 0;
while (w < 5) {
  console.log(w);
  w++;
}

console.log('do while loop')
console.log("Similar to the while loop, but the condition is evaluated after the block of code is executed, ensuring that the code block is executed at least once.")
let d = 0;
do {
  console.log(d);
  d++;
} while (d < 5);

console.log('for in loop---OBJECT USAGE')
console.log("Iterates over the enumerable properties of an object. It's often used with objects, not arrays. ***Be cautious with using for...in with arrays, as it may iterate over array prototype properties.")
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]);
}

console.log('for of Loop--via ECMAScript 6')
console.log("the for...of loop iterates over iterable objects like arrays, strings, and other built-in iterables.")
const arr = [11,22,33]
for (const value of arr) {
  console.log(value)
}

console.log('forEach() Method---doesnt create new array like .map() method')
console.log("Array method that provides a clean and concise way to iterate over each element of an array.")
const array = [1, 2, 3];
array.forEach(value => {
  console.log(value);
});
