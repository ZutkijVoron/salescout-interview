// Implement a function which takes an array of Product and returns unique products sorted by price

type Product = {
    name: string;
    price: number;
};

function filterAndSortProducts(products: Product[]): Product[] {
    return Array.from(new Set(products.map(product => JSON.stringify(product)))).map(product => JSON.parse(product)).sort((product1, product2) => product1.price - product2.price)
}

module.exports = { filterAndSortProducts }