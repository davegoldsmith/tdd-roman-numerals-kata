import { numberToNumeral } from "./roman-numeral-converter";

test("Number 1 converts to I", () => {
  expect(numberToNumeral(1)).toEqual("I");
});

test("Number 2 converts to II", () => {
  expect(numberToNumeral(2)).toEqual("II");
});

test("Number 3 converts to III", () => {
  expect(numberToNumeral(3)).toEqual("III");
});

test("Number 4 converts to IV", () => {
  expect(numberToNumeral(4)).toEqual("IV");
});

test("Number 5 converts to V", () => {
  expect(numberToNumeral(5)).toEqual("V");
});