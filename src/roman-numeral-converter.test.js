import { numberToRoman } from "./roman-numeral-converter";

test("Number 1 is converted to I", () => {
  expect(numberToRoman(1)).toEqual("I");
});

test("Number 2 is converted to II", () => {
  expect(numberToRoman(2)).toEqual("II");
});

test("Number 3 is converted to III", () => {
  expect(numberToRoman(3)).toEqual("III");
});