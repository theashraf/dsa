const sort = (arr: Array<number>): Array<number> => {
  for (let i = 0; i < arr.length; ++i) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex === i) continue;

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
};

export default sort;
