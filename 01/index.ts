const input = await Deno.readTextFile('./input.txt');
// const testInput = await Deno.readTextFile('./testInput.txt');

// const inputArr = input.split('\n');
const inputArr = input.split('\n');

const calibrationValues = inputArr.map((input) => {
  const characterArray = input.split('');
  const numbers = characterArray.filter((character) => !isNaN(character));
  const firstNumber = numbers[0];
  const lastNumber = numbers[numbers.length - 1];
  return `${firstNumber}${lastNumber}`.toString();
});

const totalCalibration = calibrationValues.reduce((acc, curr) => {
  return parseInt(acc) + parseInt(curr);
});

console.log(totalCalibration);
