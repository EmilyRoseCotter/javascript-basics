const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(element => element.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(reverse =>
    reverse 
    .split("")
    .reverse()
    .join("")
  );
};

const onlyEven = numbers => {
  return numbers.filter(numbers2 => numbers2 % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  let arrays = array.slice();
  arrays.splice(index, 1);
  return arrays;
};

const elementsStartingWithAVowel = strings => {
  let vowelCheck = /^[aeiou]/i;
   let vowelArray = strings.filter(strings => vowelCheck.test(strings));
   return vowelArray;
};

const removeSpaces = string => {
  let noSpaceString = string.replace(/ /g, "");
  return noSpaceString;
};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b, 0);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1)); 
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
