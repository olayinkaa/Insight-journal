/**
 * Time complexity
 * Average case - 0(n^2)
 * Best case - 0(n)
 * Worst case - 0(n^2)
 * 
 * Space complexity-  0(1)
 */
function bubbleSort(arr){
    let swapped 
    do {
        swapped = false
        for(let i=0; i < arr.length - 1; i++){
            if(arr[i]> arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    } while(swapped)

    return arr
}

function bubbleSort2(arr) {
  for(let i=0; i < arr.length -1; i++){
    for(let j=0; j < arr.length - 1 - i; j++){
        if(arr[j] > arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
  }
  return arr
}

const result = bubbleSort2([3,10,29,12,9,30,2,43,55,34])

console.log(result)