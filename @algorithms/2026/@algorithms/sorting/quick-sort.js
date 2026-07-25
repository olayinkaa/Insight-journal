/**
 * Use for large dataset
 * 
 * Time complexity
 * Average case - 0(nlogn)
 * Best case - 0(nlogn)
 * Worst case - 0(n^2)
 * 
 * Space complexity
 * Average case - 0(logn)
 * Worst case - 0(n)
 */
function quickSort(arr){
    if(arr.length <= 1) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i=0; i < arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot ,...quickSort(right)]
}

const result = quickSort([3,10,5,20,45,23,9,34, 1, 0])
console.log(result)