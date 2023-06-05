import { convertToInches } from "../helpers";

describe("convertToInches", () => {
  it("converts 1.5 meters to 59 inches", () => {
    const result = convertToInches(15);
    expect(result).toEqual(59);
  });

  it("converts 2.2 meters to 87 inches", () => {
    const result = convertToInches(22);
    expect(result).toEqual(87);
  });

  it("converts .1 meter to 4 inches", () => {
    const result = convertToInches(1);
    expect(result).toEqual(4);
  })
});