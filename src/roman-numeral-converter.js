export const numberToRoman = ((number) => {
  let result = "";
  for (let i = 1; i <= number; i++) {
    result += "I";
  }

  return result;
});