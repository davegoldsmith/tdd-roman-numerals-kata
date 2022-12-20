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

test("8 returns VIII", () => {
  expect(numberToNumeral(8)).toEqual("VIII");
});


test("2000 return MM", () => {
  expect(numberToNumeral(2000)).toEqual("MM");  
});

test("40 return XL", () => {
  expect(numberToNumeral(40)).toEqual("XL");
});

test("1999 return MCMXCIX", () => {
  expect(numberToNumeral(1999)).toEqual("MCMXCIX");
});

test("range error conditions", () => {
  expect(() => numberToNumeral(3000)).toThrowError("Number out of range (must be between 1 and 3000)");
  expect(() => numberToNumeral(-1)).toThrowError("Number out of range (must be between 1 and 3000)");
  
});

test("Invalid argument type errors", () => {
  expect(() => numberToNumeral("Gerbil")).toThrowError("Value passed in not a number");
  expect(() => numberToNumeral(1.54)).toThrowError("Value passed in not a number");
  expect(() => numberToNumeral([1, 2])).toThrowError("Value passed in not a number");
});