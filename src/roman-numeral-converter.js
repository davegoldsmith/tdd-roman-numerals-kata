/**
 * List of possible roman numerals and corresponding number values
 */
const romanNumeralList = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

/**
 * Converts a number between 1 and 3000 into a roman numeral
 * @param {number} number number to convert
 * @returns roman numeral equivalent
 */
export const numberToNumeral = (number) => {
  let result = "";
  if (typeof number !== "number" || Number.isInteger(number) !== true) {
    // we can only convert numbers
    throw new Error("Value passed in not a number");
  } else if (number >= 3000 || number <= 0) {
    // can only convert numbers in the range 1 to 3000
    throw new Error("Number out of range (must be between 1 and 3000)");
  } else {
    for (let key in romanNumeralList) {
      const value = romanNumeralList[key];
      // handles cases like MM, II where the number can be divided
      // by the value a number of times
      for (; number >= value; number -= value) {
        result += key;
      }
    }
  }
  return result;
};
