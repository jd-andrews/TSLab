//Moutains TS tests
interface Mountain {
  name: string;
  height: number;
}
console.log("test");
let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

function findNameOfTallestMountain(mountainArray: Mountain[]): string {
  let tallestMountain: Mountain = { name: "", height: 0 };
  for (let mountain of mountainArray) {
    if (mountain.height > tallestMountain.height) {
      tallestMountain = mountain;
    }
  }
  return tallestMountain.name;
}

console.log(findNameOfTallestMountain(mountains));

//// Products Tests

console.log("test");

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "fuji400", price: 5 },
  { name: "cinestill", price: 10 },
  { name: "tri-x", price: 6 },
  { name: "ilford800", price: 12 }
];

function calcAverageProductPrice(products: Product[]): number {
  let sum: number = 0;
  products.forEach(function(product) {
    sum += product.price;
  });
  return sum / products.length;
}

console.log(calcAverageProductPrice(products));

//Inventory Typescript Tests
console.log("test");

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 }
];

function calcInventoryValue(items: InventoryItem[]): number {
  let inventoryTotal: number = 0;
  ///////////-----------for each
  // items.forEach(item => (inventoryTotal += item.product.price * item.quantity));
  ///////////-----------for of
  // for (let item of items) {
  //   inventoryTotal += item.product.price * item.quantity;
  // }
  ///////////-----------for
  // for (let i = 0; i < items.length; i++) {
  //   inventoryTotal += items[i].product.price * items[i].quantity;
  // }
  ///////////-----------superlong
  //   inventoryTotal = items[0].product.price * items[0].quantity;
  //   inventoryTotal += items[1].product.price * items[1].quantity;
  //   inventoryTotal += items[2].product.price * items[2].quantity;
  /// etc.
  //////////------------do/while
  let i: number = 0;
  do {
    inventoryTotal += items[i].product.price * items[i].quantity;
    i++;
  } while (i < items.length);

  return inventoryTotal;
}

console.log(calcInventoryValue(inventory));
