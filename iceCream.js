// Create stocks object
let stocks = {
    fruits: ["strawberry", "mango", "banana", "cocount"],
    liquids: ["water", "milk", "ice"],
    holder: ["cone", "cup", "stick", "tray"],
    toppings: ["chocolate", "sprinkles", "sauce", "nuts"]
};

let isShopOpen = true;

function time(ms) {
    return new Promise((resolve, reject) => {
// If isShopOpen == true, resolve, timeout is time in milli seconds from time function
        if (isShopOpen) {
            setTimeout(resolve, ms)
// If isShopOpen == false, reject, followed by catch(error) 
        } else {
            reject(console.log("Shop is closed"));
        }
    });
}

async function kitchen() {
    try {
// Await takes time from time function in milliseconds
        await time(2000);
        console.log(`You chose ${stocks.fruits[1]} flavour ice cream`);

        console.log("starting production");

        await time(1000);
        console.log(`Chopping the ${stocks.fruits[1]}`);

        await time(2000)
        console.log(`Adding ${stocks.liquids[0]}, ${stocks.liquids[1]} and ${stocks.liquids[2]}`)

        await time(1000);
        console.log("Starting the machine");

        await time(2000)
        console.log(`Placing ice cream on a ${stocks.holder[0]}`)

        await time(2000);
        console.log(`Topping with ${stocks.toppings[1]} and ${stocks.toppings[2]}`)

        await time(2000)
        console.log("Serving ice cream, Enjoy!")

    } catch (error) {
        console.log("Customer left, error")
// finally will always run at the end 
    } finally {
        console.log("Day ended, customer left")
    }
}

kitchen();