import promptSync from 'prompt-sync';
const prompt = promptSync();

const NUMBER_OF_NAMES = 7;
const FIX_NUMBER_PREVIEW = 1;

export function reversedOrderList() {
    let allTheNames = [];

    for (let namePosition = 0; namePosition < NUMBER_OF_NAMES; namePosition++) {
        console.log(`Insert the person number ${namePosition + FIX_NUMBER_PREVIEW}.`);
        const names = prompt('>');
        allTheNames.unshift(names);
    }

    console.log(`The names in reverse order are ${allTheNames}.`);
}
reversedOrderList()