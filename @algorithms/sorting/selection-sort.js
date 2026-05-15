/**
 * Time complexity - 0(n^2)
 * Space complexity-  0(1)
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

const result = selectionSort([3, 10, 29, 12, 9, 30, 5]);

console.log(result);
