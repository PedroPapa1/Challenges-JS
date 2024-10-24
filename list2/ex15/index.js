import promptSync from 'prompt-sync';
const prompt = promptSync();

const QUANTITY_OF_NUMBERS = 10;
const DIVIDER = 2;
const REMAINDER = 0;

export function evenNumbersInAnArray() {
    const allTheNumbers = [];
    const evenNumbers = [];

    for (let i = 0; i < QUANTITY_OF_NUMBERS; i++) {
        console.log(`Insert 10 INTEGER numbers, stored numbers (${i}).`);
        const numbers = parseInt(prompt('>'));

        allTheNumbers.push(numbers);
    }

    for (let numberPosition = 0; numberPosition < allTheNumbers.length; numberPosition++) {
        if (allTheNumbers[numberPosition] % DIVIDER === REMAINDER) {
            evenNumbers.push({ number: allTheNumbers[numberPosition], position: numberPosition });
        }
    }

    if (evenNumbers.length > 0) {
        console.log('Even numbers found:');
        evenNumbers.forEach(even => {
            console.log(`Number ${even.number} in position ${even.position}.`) 
        });
    } else {
        console.log("No even numbers found.");
    }
}
evenNumbersInAnArray();