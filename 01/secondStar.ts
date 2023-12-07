// const input = await Deno.readTextFile('./input.txt');
const testInput = await Deno.readTextFile('./smallTestInput.txt');

const letterNumbers = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eigth',
  'nine',
];
const mapLetterToNumbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

// const inputArr = input.split('\n');
const inputArr = testInput.split('\n');

const calibrationValues = inputArr.map((input) => {
  const characterArray = input.split('');
  const numbers = characterArray.map((character, index) => {
    if (isNaN(parseInt(character))) {
      let numberToReturn;
      let string = '';
      for (let i = index; i < characterArray.length; i++) {
        if (!isNaN(parseInt(characterArray[i]))) {
          break;
        }
        string += characterArray[i];
      }
      letterNumbers.forEach((number) => {
        if (string.includes(number)) {
          numberToReturn = mapLetterToNumbers[number];
        }
      });
      return numberToReturn;
    } else {
      return parseInt(character);
    }
  });
  console.log(numbers);
  const firstNumber = numbers[0];
  const lastNumber = numbers[numbers.length - 1];
  return `${firstNumber}${lastNumber}`.toString();
});

const totalCalibration = calibrationValues.reduce((acc, curr) => {
  return parseInt(acc) + parseInt(curr);
});

// console.log(totalCalibration);
