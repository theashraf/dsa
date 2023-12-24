import MaxHeapTree from '../../data-structures/Tree/BinaryTree/HeapTree/MaxHeapTree'

const compareTo = (num1: number, num2: number): number => {
  if (num1 > num2) return 1
  else if (num1 === num2) return 0
  else {
    return -1
  }
}

const sort = (arr: Array<number>): Array<number> => {
  const heap: HeapTree<number> = new MaxHeapTree(compareTo)
  const output = []

  for (let i = 0; i < arr.length; ++i) {
    heap.add(arr[i])
  }

  while (!heap.isEmpty()) {
    output.push(heap.remove())
  }

  return output
}

export default sort
