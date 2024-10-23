import promptSync from 'prompt-sync';
const prompt = promptSync();

const HOUR_CHECKOUT = 10;
const HOUR_PREMIUM_CHECKOUT = 20;
 
const POINTS_PER_HOUR_FOR_MORE_THAN_10_HOURS = 2;
const POINTS_PER_HOUR_FOR_BETWEEN_10_AND_20_HOURS = 5;
const POINTS_PER_HOUR_FOR_MORE_THAN_20_HOURS = 10;

const POINT_PRICE = 0.05;

export function fitnessRewardsProgram () {
    console.log('How many hours of exercise did you do in a month? (Insert an INTEGER number)');
    const hoursOfExercise = parseInt(prompt('>'));

    function hoursCalculation(hours) {
        let pointsEarned;

        if (hours < HOUR_CHECKOUT) {
            pointsEarned = hours * POINTS_PER_HOUR_FOR_MORE_THAN_10_HOURS;
        } else if (hours >= HOUR_CHECKOUT && hours < HOUR_PREMIUM_CHECKOUT) {
            pointsEarned = hours * POINTS_PER_HOUR_FOR_BETWEEN_10_AND_20_HOURS;
        } else {
            pointsEarned = hours * POINTS_PER_HOUR_FOR_MORE_THAN_20_HOURS;
        }

        return pointsEarned * POINT_PRICE;
    }

    const earn = hoursCalculation(hoursOfExercise);
    console.log(`CONGRATS!! You earn $${earn} dollars for your exercises.`);
}
fitnessRewardsProgram();