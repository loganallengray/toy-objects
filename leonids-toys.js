/*
const toys = [
    {
        id: 1,
        name: "Toy Soldier",
        color: "green",
        material: "plastic",
        amount: 50,
        onSale: true
    },
    {
        id: 2,
        name: "Dolly",
        color: "pink",
        material: "fabric",
        amount: 1,
        onSale: false
    },
    {
        id: 3,
        name: "Toy Robot",
        color: "blue",
        material: "metal",
        amount: 1,
        onSale: true
    } 
];

const newToy1 = {
    id: 4,
    name: "Turtle",
    color: "green",
    material: "fabric",
    amount: 1,
    onSale: false
}

const newToy2 = {
    id: 5,
    name: "Sun",
    color: "yellow",
    material: "plasma",
    amount: 1,
    onSale: true
}

toys.push(newToy1);
toys.push(newToy2);
*/

/*explorer challenge, map

const toyPrices = new Map()

const addPriceToToy = (toyObject, price) => {
    toyPrices.set(toyObject, price);
}

addPriceToToy(toys[0], 9.99);
addPriceToToy(toys[1], 19.99);
addPriceToToy(toys[2], 29.99);
addPriceToToy(toys[3], 24.99);
addPriceToToy(toys[4], 999999999999999.99);

for (const [toy, price] of toyPrices) {
    console.log(`The ${toy.color} ${toy.name} costs $${price}.`);
}
*/

/*
for (const toy of toys) {
    console.log(`The ${toy.color} ${toy.name} costs $${toy.price}.`);
}
*/

// Explorer challenge, sets

const toy1 = {
    id: 1,
    name: "Toy Soldier",
    color: "green",
    material: "plastic",
    amount: 50,
    onSale: true
};

const toy2 = {
    id: 2,
    name: "Dolly",
    color: "pink",
    material: "fabric",
    amount: 1,
    onSale: false
};

const toy3 = {
    id: 3,
    name: "Toy Robot",
    color: "blue",
    material: "metal",
    amount: 1,
    onSale: true
};

const toy4 = {
    id: 4,
    name: "Turtle",
    color: "green",
    material: "fabric",
    amount: 1,
    onSale: false
};

const toy5 = {
    id: 5,
    name: "Sun",
    color: "yellow",
    material: "plasma",
    amount: 1,
    onSale: true
};

const toys = new Set();

toys.add(toy1);
toys.add(toy2);
toys.add(toy3);
toys.add(toy4);
toys.add(toy5);

toys.add(toy3);

for (const toy of toys) {
    console.log(`The ${toy.color} ${toy.name} costs $${toy.price}.`);
}

/*
for (const toy of toys) {
    toy.price += (toy.price * 0.05)
    console.log(`The ${toy.color} ${toy.name} costs $${toy.price}.`);
}
*/

/*
toyToFind = 1;

for (const toy of toys) {
    if (toy.id === toyToFind) {
        console.log(`The ${toy.color} ${toy.name} costs $${toy.price}. It comes in a box of ${toy.amount}`);
    }
}
*/