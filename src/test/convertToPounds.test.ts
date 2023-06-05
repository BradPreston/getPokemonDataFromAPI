import { convertToPounds } from "../helpers";

describe("convertToPounds", () => {
  it("converts 6.9 kilograms to 15.2 pounds", () => {
    const result = convertToPounds(69);
    expect(result).toEqual(15.2);
  });

  it("converts 12.4 kilograms to 27.3 pounds", () => {
    const result = convertToPounds(124);
    expect(result).toEqual(27.3);
  });

  it("converts 1.7 kilograms to 3.7 pounds", () => {
    const result = convertToPounds(17);
    expect(result).toEqual(3.7);
  })
});