import { numberToNumeral, numeralToNumber } from "./roman-numeral-converter";

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
  expect(() => numberToNumeral(3000)).toThrowError(
    "Number out of range (must be between 1 and 3000)"
  );
  expect(() => numberToNumeral(-1)).toThrowError(
    "Number out of range (must be between 1 and 3000)"
  );
});

test("Invalid argument type errors", () => {
  expect(() => numberToNumeral("Gerbil")).toThrowError(
    "Value passed in not a number"
  );
  expect(() => numberToNumeral(1.54)).toThrowError(
    "Value passed in not a number"
  );
  expect(() => numberToNumeral([1, 2])).toThrowError(
    "Value passed in not a number"
  );
});

test("I roman numeral returns 1", () => {
  expect(numeralToNumber("I")).toBe(1);
});

test("II roman numeral returns 2", () => {
  expect(numeralToNumber("II")).toBe(2);
});

test("III roman numeral returns 3", () => {
  expect(numeralToNumber("III")).toBe(3);
});

test("IV roman numeral returns 4", () => {
  expect(numeralToNumber("IV")).toBe(4);
});

test("V roman numeral returns 5", () => {
  expect(numeralToNumber("IV")).toBe(4);
});

test("VIII roman numeral returns 8", () => {
  expect(numeralToNumber("VIII")).toBe(8);
});

test("MCMXCIX roman numeral returns 1999", () => {
  expect(numeralToNumber("MCMXCIX")).toBe(1999);
});

test("MM roman numeral returns 2000", () => {
  expect(numeralToNumber("MM")).toBe(2000);
});

test("Error: Numeral evaluated to more that 3000", () => {
  expect(() => numeralToNumber("MMMM")).toThrowError(
    "The roman numeral cannot be reliably converted"
  );
});

test("Numeral argument errors", () => {
  // expect(numeralToNumber("MUM")).toBe(undefined);
  expect(() => numeralToNumber("MADEUP")).toThrowError(
    "Numeral contains invalid roman numeral character"
  );
  expect(() => numeralToNumber(-1)).toThrowError(
    "Numeral argument must be a valid numeral string"
  );
  expect(() => numeralToNumber(["MM"])).toThrowError(
    "Numeral argument must be a valid numeral string"
  );
});
