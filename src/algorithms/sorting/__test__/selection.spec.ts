import sort from "../selection";

describe("bubble sort", () => {
  it("should return a sorted array", () => {
    const inputArr = [1, 5, 2, 3, 4];
    const expectedArr = [1, 2, 3, 4, 5];

    expect(sort(inputArr)).toMatchObject(expectedArr);
  });
});
