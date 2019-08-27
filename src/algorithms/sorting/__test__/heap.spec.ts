import sort from "../heap";

describe("bubble sort", () => {
  it("should return a sorted array", () => {
    const inputArr = [1, 5, 2, 3, 4];
    const expectedArr = [5, 4, 3, 2, 1];

    expect(sort(inputArr)).toMatchObject(expectedArr);
  });
});
