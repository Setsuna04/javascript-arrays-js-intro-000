var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

var addElementToBeginningOfArray = (array, element) => {return [element, ...array]; }

function destructivelyAddElementToBeginningOfArray(array, element) {array.unshift(element);}

var addElementToEndOfArray = (array , element) => {return [...array, element];}
