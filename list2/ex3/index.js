import promptSync from 'prompt-sync';
const prompt = promptSync();

const DISTANCE_TO_THE_DISCOUNT = 200;
const PRICE_WITH_DISCOUNT = 0.45;
const PRICE_WITHOUT_DISCOUNT = 0.50;

export function travelCostCalculation() {
    console.log('How many km will you travel? (use an INTEGER number)');
    const distance = parseInt(prompt('>'));

    if(distance > DISTANCE_TO_THE_DISCOUNT) {
        const moreThan200kmCalculation = distance * PRICE_WITH_DISCOUNT;
        console.log(`Your trip will cost $${moreThan200kmCalculation} dollars.`);    
    } else {
        const lessThan200kmCalculation = distance * PRICE_WITHOUT_DISCOUNT;
        console.log(`Your trip will cost $${lessThan200kmCalculation} dollars.`)
    }
}
travelCostCalculation();