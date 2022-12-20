import { numberToNumeral } from "./roman-numeral-converter";

test("Number 1 converts to I", () => {
  expect(numberToNumeral(1)).toEqual("I");
});