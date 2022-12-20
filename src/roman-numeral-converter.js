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

export const numberToNumeral = ((number) => {
  let result = "";
  for (let key in romanNumeralList) {
    const value = romanNumeralList[key];
    for (; number >= value; number -= value) {
      result += key;
    }
  }
  return result;
});