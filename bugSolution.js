function myFunction(a, b) {
  // Explicit type checking before addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    // Handle non-number inputs appropriately, e.g., throw an error or return a default value
    console.error('Invalid input: Both arguments must be numbers.');
    return NaN; // or some other appropriate default
  }
}

console.log(myFunction(5, 5)); // Output: 10
console.log(myFunction(5, "5")); // Output: Invalid input: Both arguments must be numbers.