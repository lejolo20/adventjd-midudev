/* -------------------------------------------- */
/* ------------------ Reto 1 ------------------ */
/* -------------------------------------------- */

/* function findFirstRepeated(gifts) {
  // Code here

  let arrayWithoutDuplicates = gifts.filter((item, index) => {
    return gifts.indexOf(item) !== index;
  });
  if (arrayWithoutDuplicates.length === 0) return -1;
  return arrayWithoutDuplicates[0];
}

console.log(findFirstRepeated([1, 2, 3, 4])); */

/* -------------------------------------------- */
/* ------------------ Reto 2 ------------------ */
/* -------------------------------------------- */

/* function manufacture(gifts, materials) {
   let newArr = gifts.map((item) => {
    const splited = item.split("");
    return splited;
  });

  let compareArr = newArr.map((item) => {
    let individual = item.map((innerItem) => {
      return materials.includes(innerItem);
    });

    if (individual.every((item) => item == true)) {
      return item;
    } else return null;
  });

  let arrayWithoutNulls = compareArr.filter((item) => {
    if (item != null) {
      return item;
    }
  });

  let responseArr = arrayWithoutNulls.map((item) => {
    return item.join("");
  });

  return responseArr; */

/* Optimizada con GPT */

/* let responseArr = gifts
    .map((item) => {
      const splited = item.split("");
      let individual = splited.map((innerItem) =>
        materials.includes(innerItem)
      );

      if (individual.every((item) => item)) {
        return splited.join("");
      } else {
        return null;
      }
    })
    .filter((item) => item !== null);

  return responseArr;
}

const gifts = ["libro", "ps5"];
const materials = "psli";

console.log(manufacture(gifts, materials)); // ["tren", "oso"]
 */

/* -------------------------------------------- */
/* ------------------ Reto 3 ------------------ */
/* -------------------------------------------- */

/* function findNaughtyStep(original, modified) {
  const originalArr = original.split("");
  const modifiedArr = modified.split("");

  let difference;
  let differenceOriginal = originalArr.filter(
    (letter) => !modifiedArr.includes(letter)
  );
  let differenceModified = modifiedArr.filter(
    (letter) => !originalArr.includes(letter)
  );

  if (
    (originalArr.length > modifiedArr.length) &
    (differenceOriginal.length == 0)
  ) {
    difference = originalArr.at(-1);
  } else if (originalArr.length > modifiedArr.length) {
    difference = differenceOriginal;
  } else if (
    originalArr.length < modifiedArr.length &&
    differenceModified.length == 0
  ) {
    difference = modifiedArr.at(-1);
  } else if (originalArr.length < modifiedArr.length) {
    difference = differenceModified;
  } else {
    difference = "";
  }

  if (difference.length > 0) return difference[0];
  else return (difference = "");
}

const original = "iiiiiii";
const modified = "iiiiii";

let res = findNaughtyStep(original, modified);

console.log(res); */

/* -------------------------------------------- */
/* ------------------ Reto 4 ------------------ */
/* -------------------------------------------- */

function decode(message) {
  const regex = /\(([^()]+)\)/g;

  let messageArr = message.split(" ");
  let newMessageArr;

  if (message.match(regex)) {
    let newMessage = message.match(regex);
    newMessageArr = newMessage.map((item) => {
      let itemWithoutParenthesis = item.slice(1, item.length - 1);
      return itemWithoutParenthesis.split("").reverse().join("");
    });
  }
  console.log(messageArr);
  console.log(newMessageArr);

  
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo
/* const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!
const c = decode("sa(u(cla)atn)s is ch(am(st)ir)s");
console.log(c); // santaclaus
const d = decode("((nta)(sa))");
console.log(d); // santa */
