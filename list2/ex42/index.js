export function filteringArrayProperties() {
  const data = {
    name: "Pedro",
    age: 19,
    grades: [8.0, 9.5, 5.0, 8.7],
  };

  const data2 = {};

  const justArray = Object.entries(data);
  justArray.forEach(([key, value]) => {
    let isItArray = Array.isArray(value);
    if (isItArray) {
      data2[key] = value;
    }
  });

  console.log(`Array: ${JSON.stringify(data2)}`);
}
filteringArrayProperties();
