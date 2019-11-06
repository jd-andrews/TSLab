"use strict";
console.log("test");
let mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(mountainArray) {
    let tallestMountain = { name: "", height: 0 };
    for (let mountain of mountainArray) {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    }
    return tallestMountain.name;
}
console.log(findNameOfTallestMountain(mountains));
console.log("test");
let products = [
    { name: "fuji400", price: 5 },
    { name: "cinestill", price: 10 },
    { name: "tri-x", price: 6 },
    { name: "ilford800", price: 12 }
];
function calcAverageProductPrice(products) {
    let sum = 0;
    products.forEach(function (product) {
        sum += product.price;
    });
    return sum / products.length;
}
console.log(calcAverageProductPrice(products));
console.log("test");
let inventory = [
    { product: { name: "motor", price: 10.0 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1.0 }, quantity: 20 }
];
function calcInventoryValue(items) {
    let inventoryTotal = 0;
    items.forEach(item => (inventoryTotal += item.product.price * item.quantity));
    let i = 0;
    do {
        inventoryTotal += items[i].product.price * items[i].quantity;
        i++;
    } while (i < items.length);
    return inventoryTotal;
}
console.log(calcInventoryValue(inventory));
