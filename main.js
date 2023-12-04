/* Reto 1 */

/* function findFirstRepeated(gifts) {
  // Code here

  let arrayWithoutDuplicates = gifts.filter((item, index) => {
    return gifts.indexOf(item) !== index;
  });
  if (arrayWithoutDuplicates.length === 0) return -1;
  return arrayWithoutDuplicates[0];
}

console.log(findFirstRepeated([1, 2, 3, 4])); */

/* Reto 2 */

function manufacture(gifts, materials) {
  /* let newArr = gifts.map((item) => {
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
  let responseArr = gifts
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
