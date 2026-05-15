// efficient when the data is almost sorted
/**
 * Time complexity
 * Average case - 0(n^2)
 * Best case - 0(n)
 * Worst case - 0(n^2)
 * 
 * Space complexity-  0(1)
 */
function insertionSort(arr) {
  for(let i =1; i <arr.length; i++){
    for(let j= i; j > 0; j--){
      if(arr[j] < arr[j-1]){
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
      } else {
        break;
      }
    } 
  }
  return arr
}

const result = insertionSort([3, 10, 29, 12, 9, 30, 5,15]);

console.log(result);
