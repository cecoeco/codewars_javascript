function multipleOfIndex(array) {
  // Use the filter method to create a new array based on the condition
  return array.filter((element, index) => element % index === 0);
}
