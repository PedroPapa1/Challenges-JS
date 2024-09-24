function isPrime(num) {
    const ifLessThanOneItsNotPrime = 1;
    const divisor = 2;

    if (num <= ifLessThanOneItsNotPrime) {
        return false;
    }

    for (let currentDivisor = divisor; currentDivisor <= Math.sqrt(num); currentDivisor++) {
        if (num % currentDivisor === 0) {
            return false;
        }
    }
    return true;
}

function findPrimesAbove100(count) {
    const primes = [];
    let startNumber = 101;

    while (primes.length < count) {
        if (isPrime(startNumber)) {
            primes.push(startNumber);
        }
        startNumber++;
    }

    return primes; 
}

console.log(findPrimesAbove100(50));

