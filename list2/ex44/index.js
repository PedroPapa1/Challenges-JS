export function countingStringPropertiesInAnObject() {
  const data = {
    name: "Pedro",
    age: 19,
    city: "São Caetano do Sul",
    email: "pedro.papa@cloudbeds.com",
  };

  let count = 0;
  const stringCount = Object.entries(data);
  stringCount.forEach(([_, value]) => {
    let itIsString = typeof value === "string";
    if (itIsString) {
      count++;
    }
  });
  console.log(JSON.stringify(count));
}
countingStringPropertiesInAnObject();
