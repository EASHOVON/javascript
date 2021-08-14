const products = [
    { name: 'samsung s3 phone', price: 12000 },
    { name: 'asus laptop d34', price: 32000 },
    { name: 'apple smart watch', price: 18000 },
    { name: 'boshundhora binding paper', price: 200 },
    { name: 'lg smart phone', price: 12000 },
    { name: 'old granny land phone', price: 12000 },
];

function searchProducts(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(name);
        }
    }
    return matched;
}

const matched = searchProducts(products, 'Laptop');
console.log(matched);