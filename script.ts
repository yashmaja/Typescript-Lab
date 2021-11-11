export{};

//_________________________________________________________________________________
//---------------------------------TALLEST MOUNTAIN--------------------------------
//_________________________________________________________________________________

interface Mountain {
    name: string;
    height: number;
}

let M1 : Mountain = {
    name: "Kilimanjaro",
    height: 19341
};
let M2 : Mountain = {
    name: "Everest",
    height: 29029
};
let M3 : Mountain = {
    name: "Denali",
    height: 20310
};

let mountains: Mountain[] = [M1, M2, M3];

function findNameOfTallestMountain(mountainsArr : Mountain[]):string {
    let tallestMountain: Mountain = {
        name: "",
        height: 0
    };
    mountainsArr.forEach(function (M:Mountain) {
        if (M.height > tallestMountain.height) {
            tallestMountain = M;
        }
    });
    return tallestMountain.name;
}

let tallestMountain : string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

//_________________________________________________________________________________
//------------------------------------PRODUCTS-------------------------------------
//_________________________________________________________________________________

interface Product {
    name : string;
    price : number;
};

let P1 : Product = {
    name: "Cafe au lait",
    price: 4.59
};
let P2 : Product = {
    name: "Cafe bourbon",
    price: 5.31
};
let P3 : Product = {
    name: "Chips",
    price: 2.00
};

let Products : Product[] = [P1, P2, P3];

function calcAverageProductPrice(productsArr : Product[]) : number {
    let sum : number = 0;
    let numOfProducts : number = 0;
    
    productsArr.forEach(function (P:Product) {
        sum += P.price;
        numOfProducts ++;
    });

    return (sum/numOfProducts);
}

let average : number = calcAverageProductPrice(Products);
console.log(average);

//_________________________________________________________________________________
//-----------------------------------INVENTORY-------------------------------------
//_________________________________________________________________________________

interface InventoryItem {
    product : Product;
    quantity : number;
};

let Item1 : InventoryItem = {
    product: {
        name : "motor",
        price : 10.00
    },
    quantity : 10
};

let Item2 : InventoryItem = {
    product: {
        name : "sensor",
        price : 12.50
    },
    quantity : 4
};

let Item3 : InventoryItem = {
    product: {
        name : "LED",
        price : 1.00
    },
    quantity : 20
};

let Inventory : InventoryItem[] = [Item1, Item2, Item3];

function calcInventoryValue(inventoryItemsArr : InventoryItem[]) : number {
    let sum : number = 0;

    inventoryItemsArr.forEach( function(I:InventoryItem) {
        sum += I.quantity * I.product.price;
    });

    return sum;
}

let inventoryValue : number = calcInventoryValue(Inventory);
console.log(inventoryValue);