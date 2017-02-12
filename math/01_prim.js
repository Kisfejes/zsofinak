// Usage: node prim.js 25 -> print out the first 25 prim number

// Eead primCount -> how many prim number do we want to print out
// if process.argv[2] is not given, it will use 10 for default
const primCount = process.argv[2] ? process.argv[2] : 10;

// primTest will tell us if it is a primTest
// For example:
// primTest(1) -> false
// primTest(16) -> false
// primTest(19) -> true
function primTest(n) {
  // Handle special cases 0 and 1 is not a prim
  if (n === 0 || n === 1) {
    return false;
  }
  // 2 is a prim
  if (n === 2) {
    return true;
  }

  // Let's try to divide the given number with all possible value
  // % -> modulo operator, which tell us the remainder
  // 5 % 2 = 1
  // 6 % 2 = 0
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      // if we find a number with dividing the modulo is 0 then it is not a prim
      return false;
    }
  }
  // if we didnt find a divider, then its a prim
  return true;
}

// Store the current finded prim count
let currPrimCount = 0;
// we will iterate with 'i'
let i = 0;
while (currPrimCount < primCount && i < 1000) {
  // If we find a prim, print it out to console
  if (primTest(i)) {
    console.log(`Prim number: ${i}`);
    // Increment the current prim count
    currPrimCount++;
  }
  // Increment the 'i' iterating value
  i++;
}
