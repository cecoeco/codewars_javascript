function testEven(n) {
    // Check if the number is an integer
    if (Number.isInteger(n)) {
        // Use the modulo operator to check if it's even
        return n % 2 === 0;
    } else {
        // If it's not an integer, consider it as UNeven
        return false;
    }
}
