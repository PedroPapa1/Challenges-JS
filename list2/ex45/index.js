export function countingStringOccurrencesInAnArray() {
  const count = {};
  const fruits = ["banana", "apple", "grape", "banana", "banana", "grape", "watermelon"];

  fruits.forEach((value) => {
    count[value] = (count[value] || 0) + 1;
  });
  console.log(JSON.stringify(count));
}
countingStringOccurrencesInAnArray();
