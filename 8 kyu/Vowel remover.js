function shortcut(string) {
  // Use the replace method with a regular expression to remove lowercase vowels
  return string.replace(/[aeiou]/g, '');
}
