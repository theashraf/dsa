import HeapTree from "../DataStructures/Tree/BinaryTree/HeapTree/HeapTree";
import MaxHeapTree from "../DataStructures/Tree/BinaryTree/HeapTree/MaxHeapTree";
import { generateRandomArr } from "../utils/index";

const compareTo = (num1: number, num2: number): number => {
  if (num1 > num2) return 1;
  else if (num1 === num2) return 0;
  else {
    return -1;
  }
};

const heapSort = (arr: Array<number>): Array<number> => {
  const heap: HeapTree<number> = new MaxHeapTree(compareTo);
  const output = [];

  for (let i = 0; i < arr.length; ++i) {
    heap.add(arr[i]);
  }

  while (!heap.isEmpty()) {
    output.push(heap.remove());
  }

  return output;
};

console.log(heapSort(generateRandomArr(100)));
