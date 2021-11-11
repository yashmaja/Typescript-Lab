"use strict";
exports.__esModule = true;
var M1 = {
    name: "Kilimanjaro",
    height: 19341
};
var M2 = {
    name: "Everest",
    height: 29029
};
var M3 = {
    name: "Denali",
    height: 20310
};
var mountains = [M1, M2, M3];
function findNameOfTallestMountain(mountainsArr) {
    var tallestMountain = {
        name: "",
        height: 0
    };
    mountainsArr.forEach(function (M) {
        if (M.height > tallestMountain.height) {
            tallestMountain = M;
        }
    });
    return tallestMountain.name;
}
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
;
var P1 = {
    name: "Cafe au lait",
    price: 4.59
};
var P2 = {
    name: "Cafe bourbon",
    price: 5.31
};
var P3 = {
    name: "Chips",
    price: 2.00
};
var Products = [P1, P2, P3];
function calcAverageProductPrice(productsArr) {
    var sum = 0;
    var numOfProducts = 0;
    productsArr.forEach(function (P) {
        sum += P.price;
        numOfProducts++;
    });
    return (sum / numOfProducts);
}
var average = calcAverageProductPrice(Products);
console.log(average);
;
var Item1 = {
    product: {
        name: "motor",
        price: 10.00
    },
    quantity: 10
};
var Item2 = {
    product: {
        name: "sensor",
        price: 12.50
    },
    quantity: 4
};
var Item3 = {
    product: {
        name: "LED",
        price: 1.00
    },
    quantity: 20
};
var Inventory = [Item1, Item2, Item3];
function calcInventoryValue(inventoryItemsArr) {
    var sum = 0;
    inventoryItemsArr.forEach(function (I) {
        sum += I.quantity * I.product.price;
    });
    return sum;
}
var inventoryValue = calcInventoryValue(Inventory);
console.log(inventoryValue);
