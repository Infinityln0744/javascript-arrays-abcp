var chocolateBars
= ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array,element) {
  return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element){
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}

function accessElementInArray(array,element){
}

function destructivelyRemoveElementFromBeginningOfArray(array,element){
  array.shift()
}

function removeElementFromBeginningOfArray(array){
}

function destructivelyRemoveElementFromEndOfArray(array){
}

function removeElementFromEndOfArray(array){
}

