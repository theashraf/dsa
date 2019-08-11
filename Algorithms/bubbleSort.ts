import { generateRandomArr } from "../utils/index";

// optimized bubble sort
// O(n^2)
const bubbleSort = (arr: Array<number>): Array<number> => {
  let temp: number, flag: boolean;

  for (let i: number = 0; i < arr.length; ++i) {
    flag = false;

    for (let j: number = 1; j < arr.length; ++j) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        flag = true;
      }
    }

    if (!flag) break;
  }

  return arr;
};

console.log(bubbleSort(generateRandomArr(10000)));
