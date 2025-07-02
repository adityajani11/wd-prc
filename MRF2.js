// Task: Use `map()` to create a new array with each number doubled.
const numbers = [1, 2, 3, 4, 5];
const mapped = numbers.map(number => number * 2);
console.log("EASY 1 : ", mapped);

// Task: Use `filter()` to return only the even numbers.
const numbers2 = [1, 2, 3, 4, 5, 6];
const filtered = numbers2.filter(number => number % 2 === 0);
console.log("EASY 2 : ", filtered);

// Task: Use `reduce()` to get the total sum.
const numbers3 = [10, 20, 30];
const reduced = numbers3.reduce((a, b) => a + b, 0);
console.log("EASY 3 : ", reduced);

// Task: Use `filter()` and `map()` to get an array of names of active users.
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Carol", active: true }
];
const mapfil = users.filter(user => user.active).map(user => user.name);
console.log("MID 1 : ", mapfil)

// Task: Use `reduce()` to calculate total quantity sold.
const items = [
  { item: "pen", quantity: 3 },
  { item: "pencil", quantity: 5 },
  { item: "notebook", quantity: 2 }
];
const sold = items.reduce((a, b) => a + b.quantity, 0);
console.log("MID 2 : ", sold);

// Task: Use `map()` to capitalize all words (e.g., "apple" → "Apple").
const words = ["apple", "banana", "cherry"];
const cap = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log("MID 3 : ", cap);

// Task: Use `reduce()` to group users by role:
// Output: {
//   admin: ["Alice", "Charlie"],
//   user: ["Bob", "Dave"]
// }

const users2 = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "Dave", role: "user" }
];
const group = users2.reduce((acc, user) => {
    const role = user.role;
    if(!acc[role]) {
        acc[role] = [];
    }

    acc[role].push(user.name);
    return acc;
}, {}); // Start with an empty object
console.log("HARD 1 : ", group);

// Task: Use `reduce()` to find the product with the highest price.
const products = [
  { name: "Laptop", price: 700 },
  { name: "Phone", price: 900 },
  { name: "Monitor", price: 300 }
];
const highest = products.reduce((currentProduct, maxProduct) => {
    return maxProduct.price > currentProduct ? maxProduct.price : currentProduct;
}, 0);
console.log("HARD 2 : ", highest);

// OUTPUTS
// EASY 1 :  [ 2, 4, 6, 8, 10 ]
// EASY 2 :  [ 2, 4, 6 ]
// EASY 3 :  60
// MID 1 :  [ 'Alice', 'Carol' ]
// MID 2 :  10
// MID 3 :  [ 'Apple', 'Banana', 'Cherry' ]
// HARD 1 :  { admin: [ 'Alice', 'Charlie' ], user: [ 'Bob', 'Dave' ] }
// HARD 2 :  900