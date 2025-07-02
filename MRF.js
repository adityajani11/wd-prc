const data = [
    {"item": "apple", "price": 1.2, "quantity": 10},
    {"item": "banana", "price": 0.8, "quantity": 5},
    {"item": "cherry", "price": 2.5, "quantity": 0},
    {"item": "date", "price": 3.0, "quantity": 7},
    {"item": "elderberry", "price": 1.5, "quantity": 3}
]

// Filter items with quantity > 0
const filteredQuantity = data.filter(i => i.quantity > 0);
console.log(filteredQuantity);
/* OUTPUT
[
  { item: 'apple', price: 1.2, quantity: 10 },
  { item: 'banana', price: 0.8, quantity: 5 },
  { item: 'date', price: 3, quantity: 7 },
  { item: 'elderberry', price: 1.5, quantity: 3 }
]
*/

// Map each item to its revenue: price * quantity
const mappedData = filteredQuantity.map(i => i.price * i.quantity)
console.log(mappedData);
// OUTPUT [ 12, 4, 21, 4.5 ]

// Reduce to get the total revenue
const reducedData = mappedData.reduce((a, b) => a + b, 0);
console.log(reducedData);
// OUTPUT 41.5