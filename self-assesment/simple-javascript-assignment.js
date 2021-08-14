// --------------------------- Problem-1 Starting ------------------- //

function seerToMon(seer) {
    if (!seer) {
        return "Please Enter a value first"
    } else if (seer <= 0) {
        return "Please Enter a positive value";
    } else {
        let mon = seer / 40;
        return mon;
    } 
}

// const mySeer = 300;
// const toMon = seerToMon(mySeer);
// console.log(toMon);

// --------------------------- Problem-1 Ending ------------------- //



// --------------------------- Problem-2 Starting ------------------- //

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if (shirtQuantity > 0 || pantQuantity > 0 || shoeQuantity > 0) {
        let shirtPriceWithQuantity = shirtQuantity * 100;
        let pantPriceWithQuantity = pantQuantity * 200;
        let shoePriceWithQuantity = shoeQuantity * 500;
        let allSalesPrice = shirtPriceWithQuantity + pantPriceWithQuantity + shoePriceWithQuantity;
        return allSalesPrice;
    } else {
        return "Please enter product quantity";
    }
}

/* const salesAmount = totalSales(3, 4, 5);
console.log(salesAmount); */

// --------------------------- Problem-2 Ending ------------------- //



// --------------------------- Problem-3 Starting ------------------- //

function deliveryCost(quantity) {
    if (quantity <= 0) {
        return "Please enter positive value or enter value first"
    } else {
        const tShirtDeliveryChargeFirst100Quantity = 100;
        const tShirtDeliveryChargeSecond200Quantity = 80;
        const tShirtDeliveryChargeRestQuantity = 50;
        if (quantity <= 100) {
            const cost = quantity * tShirtDeliveryChargeFirst100Quantity;
            return cost;
        } else if (quantity > 100 && quantity <= 200) {
            const firstDeliveryChargeTShirt = 100 * tShirtDeliveryChargeFirst100Quantity;
            const restQuantity = quantity - 100;
            const secondDeliveryChargeTShirt = restQuantity * tShirtDeliveryChargeSecond200Quantity;
            const totalDeliveryCharge = firstDeliveryChargeTShirt + secondDeliveryChargeTShirt;
            return totalDeliveryCharge;
        } else {
            const firstDeliveryChargeTShirt = 100 * tShirtDeliveryChargeFirst100Quantity;
            const secondDeliveryChargeTShirt = 100 * tShirtDeliveryChargeSecond200Quantity;
            const restQuantity = quantity - 200;
            const restDeliveryChargeTShirt = restQuantity * tShirtDeliveryChargeRestQuantity;
            const totalDeliveryCharge = firstDeliveryChargeTShirt + secondDeliveryChargeTShirt + restDeliveryChargeTShirt;
            return totalDeliveryCharge;
        }
        
    }
}

/* const totalChargeOfDelivery = deliveryCost(230);
console.log(totalChargeOfDelivery); */

// --------------------------- Problem-3 Ending ------------------- //



// --------------------------- Problem-4 Starting ------------------- //

function perfectFriend(array) {
    let name;
    for (let i = 0; i < array.length; i++){
        if (array[i].length == 5) {
            name = array[i];
            break;
        }
    }
    if (typeof name == 'undefined') {
        name = "Your array dosen't exist 5 character name";
    }
    return name;
}

/* const friends = ["Shovon", "Shourav", "Tazeen", "Rakibs", "Shojib"];
const fiveWordName = perfectFriend(friends);
console.log(fiveWordName); */

// --------------------------- Problem-4 Ending ------------------- //
