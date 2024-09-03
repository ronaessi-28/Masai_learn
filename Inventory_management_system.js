/*To tackle the Inventory Management System assignment in JavaScript, you'll follow a structured approach involving object-oriented programming principles and array manipulation. Here’s a breakdown of how you can implement each function:


* Item Object Definition
  Each item in the inventory is represented as an object with properties:

* id: Unique identifier
* name: Name of the item
* quantity: Quantity in stock
* price: Price per unit


## Functions Implementation
*/

// 1. Add Item
function addItem(inventory, item) {
    inventory.push(item);
}
// 2. Update Item
function updateItem(inventory, id, newDetails) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory[index] = { ...inventory[index], ...newDetails };
    }
}
//  3. Delete Item
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    }
}
// 4. Get Item
function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
}
//  5. Print Inventory
function printInventory(inventory) {
    console.log("Current Inventory:");
    console.log(JSON.stringify(inventory, null, 2));
}
// Example Usage
// Here's how you can use these functions:

// Example inventory
let inventory = [
    { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
    { id: 2, name: 'Banana', quantity: 20, price: 0.2 }
];

// Adding item
addItem(inventory, { id: 3, name: 'Orange', quantity: 15, price: 0.7 });
printInventory(inventory);

// Updating item
updateItem(inventory, 2, { quantity: 30 });
printInventory(inventory);

// Deleting item
deleteItem(inventory, 2);
printInventory(inventory);

// Getting item
console.log(getItem(inventory, 1));

/*

Explanation:

Add Item: Pushes a new item object into the inventory array.
Update Item: Finds the item by id and updates its properties using spread syntax (...).
Delete Item: Finds the item by id and removes it using splice.
Get Item: Finds and returns the item object with the specified id.
Print Inventory: Logs the current inventory in a readable JSON format.

*/