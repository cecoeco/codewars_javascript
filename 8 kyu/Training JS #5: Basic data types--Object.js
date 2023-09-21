function animal(obj) {
  // Extract properties from the obj parameter
  const { name, legs, color } = obj;

  // Construct the desired string using string interpolation
  const result = `This ${color} ${name} has ${legs} legs.`;

  // Return the constructed string
  return result;
}
