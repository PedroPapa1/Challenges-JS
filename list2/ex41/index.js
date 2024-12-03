import promptSync from "prompt-sync";
const prompt = promptSync();

export function accessingAndModifyingObjectProperties() {
  let person = {
    name: "Pedro",
    age: 19,
  };

  console.log(person.age);

  console.log("What's your e-mail?");
  person.email = prompt(">");

  console.log(JSON.stringify(person));
}
accessingAndModifyingObjectProperties();
