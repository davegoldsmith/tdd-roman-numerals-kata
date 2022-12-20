const romanNumeralList = { XI: 9, V: 5, IV: 4, I: 1};

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