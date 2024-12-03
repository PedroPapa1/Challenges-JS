export function filteringArrayProperties() {
  const data = {
    name: "Pedro",
    age: 19,
    grades: [8.0, 9.5, 5.0, 8.7],
  };

  const arrayOnlyData = Object.fromEntries(Object.entries(data).filter(([_, value]) => Array.isArray(value)));

  console.log(`Array: ${JSON.stringify(arrayOnlyData)}`);
}
filteringArrayProperties();
