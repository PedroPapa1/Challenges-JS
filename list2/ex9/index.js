import promptSync from 'prompt-sync';
const prompt = promptSync();

export function salaryAndGenderReport() {
    let continueLoop;
    let totalMenSalary = 0;
    let totalFemaleSalary = 0;

    const gender = {
        female: 'F',
        male:'M',
      }

    do {
        console.log('What is the gender of the employee? (Insert M to Male, and F to Female)');
        const genderPrompt = prompt('>').toUpperCase();

        if(!Object.values(gender).includes(genderPrompt)) {
            console.log('Insert M to Male, and F to Female. Try Again!');
            return;
        }

        console.log('What is the salary of the employee?');
        const salaryPrompt = parseFloat(prompt('>'));

        if (isNaN(salaryPrompt)) {
            console.log('Insert a number to the salary.');
            return;
        }

        if (genderPrompt === gender.male) {
            totalMenSalary += salaryPrompt;
        } else if (genderPrompt === gender.female) {
            totalFemaleSalary += salaryPrompt;
        }
        

        console.log('1. Continue the loop.');
        console.log('0. Exit.');
        continueLoop = parseInt(prompt('>'));

    } while (continueLoop === 1);

    console.log(`That's the total male salary $${totalMenSalary}.`);
    console.log(`That's the total female salary $${totalFemaleSalary}.`);
}
salaryAndGenderReport();