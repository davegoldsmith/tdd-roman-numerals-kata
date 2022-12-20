import { numberToRoman } from "./roman-numeral-converter";

test("Number 1 is converted to I", () => {
  expect(numberToRoman(1)).toEqual("I");
});