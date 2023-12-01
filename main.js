/* let main = document.getElementById("root"); */

function findFirstRepeated(gifts) {
  // Code here

  let arrayWithoutDuplicates = gifts.filter((item, index) => {
    return gifts.indexOf(item) !== index;
  });
  if (arrayWithoutDuplicates.length === 0) return -1;
  return arrayWithoutDuplicates[0];
}

console.log(findFirstRepeated([1, 2, 3, 4]));
