export const generateRandomArr = (arrLength: number): Array<number> => {
  const arr: Array<number> = []

  for (let i = 0; i < arrLength; ++i) {
    arr[i] = Math.floor(Math.random() * 100001) // generate random numbers from 0 to 10^5
  }

  return arr
}
