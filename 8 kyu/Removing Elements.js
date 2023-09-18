function removeEveryOther(arr) {
  // Initialize a new array to store the result
  var result = [];
  
  // Iterate through the original array
  for (var i = 0; i < arr.length; i += 2) {
    // Add every second element to the result array
    result.push(arr[i]);
  }
  
  return result;
}
