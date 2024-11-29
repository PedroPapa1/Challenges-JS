import promptSync from "prompt-sync";
const prompt = promptSync();

const MAX_NUMBERS = 13;
const BETTING_PLAYERS = 100;

function luckyLotteryNumbers() {
  const luckyNumbers = [];

  while (luckyNumbers.length < MAX_NUMBERS) {
    const number = Math.floor(Math.random() * 100) + 1;

    if (!luckyNumbers.includes(number)) {
      luckyNumbers.push(number);
    }
  }
  return luckyNumbers;
}

export function lotteryTicketChecker() {
  const luckyNumbers = luckyLotteryNumbers();
  console.log(`Lucky numbers: ${luckyNumbers}`);

  for (let bettingPlayer = 0; bettingPlayer < BETTING_PLAYERS; bettingPlayer++) {
    const playerNumbers = [];

    for (let playerNumberChoice = 0; playerNumberChoice < MAX_NUMBERS; playerNumberChoice++) {
      let input = parseInt(
        prompt(`Player ${bettingPlayer + 1}, insert your Lucky Number (${playerNumberChoice + 1}): `)
      );
      playerNumbers.push(input);
    }

    const correctNumbers = luckyNumbers.filter((value) => playerNumbers.includes(value));

    if (correctNumbers.length === MAX_NUMBERS) {
      console.log("Congratulations, you are the WINNER.");
    } else {
      console.log(`Player ${bettingPlayer + 1}, you have ${correctNumbers.length} correct numbers: ${correctNumbers}`);
    }
  }
}
lotteryTicketChecker();
