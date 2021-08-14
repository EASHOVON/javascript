const phones = [
    { name: 'samsung s5', price: 45000, camera: 48, storage: 256 },
    { name: 'redmi note pro', price: 35000, camera: 35, storage: 128 },
    { name: 'pockoo phone', price: 30000, camera: 25, storage: 64 },
    { name: 'opp a2', price: 25000, camera: 19, storage: 64 },
    { name: 'vivo', price: 19000, camera: 15, storage: 32 },
    { name: 'walton primo O+', price: 7000, camera: 10, storage: 16 },
];

let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);