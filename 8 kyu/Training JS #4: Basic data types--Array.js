function getLength(arr){
  // Return length of arr
  return arr.length;
}

function getFirst(arr){
  // Return the first element of arr
  return arr[0];
}

function getLast(arr){
  // Return the last element of arr
  return arr[arr.length - 1];
}

function pushElement(arr){
  var el = 1;
  // Push el to arr
  arr.push(el);
  return arr;
}

function popElement(arr){
  // Pop an element from arr (remove the last element)
  arr.pop();
  return arr;
}
