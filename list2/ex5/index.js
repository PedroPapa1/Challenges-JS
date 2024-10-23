import promptSync from 'prompt-sync';
const prompt = promptSync();

export function rockPaperScissorsGame() {
    const options = ['rock', 'paper', 'scissor'];

    console.log('Chosse one of (rock, paper or scissor).');
    const userChoice = prompt('>');

    if (!options.includes(userChoice)) {
        console.log('Choose a valid option.');
        return;
    }

    const randomCodeChoice = options[Math.floor(Math.random() * options.length)];
    console.log(`You chose ${userChoice}.`);
    console.log(`The code chose ${randomCodeChoice}.`);

    const winsFrom = {
        rock: 'scissor',   
        paper: 'rock',  
        scissor: 'paper' 
    };
    
    if (userChoice === randomCodeChoice) {
        console.log(`Draw! Both chose ${userChoice}.`);
    } else if (winsFrom[userChoice] === randomCodeChoice) {
        console.log(`You won! ${userChoice} beats ${randomCodeChoice}.`);
    } else {
        console.log(`You lost! ${randomCodeChoice} beats ${userChoice}.`);
    }
}
rockPaperScissorsGame();