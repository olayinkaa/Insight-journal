// time complexity of 0(n)
function mergeSort(arr){
    if(arr.length <=1 ) return arr
    let middleIndex = Math.ceil(arr.length/2)
    let leftArr = arr.slice(0, middleIndex)
    let rightArr = arr.slice(middleIndex)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr){
    let output = []
    let leftIndex = 0;
    let rightIndex = 0
    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        if(leftArr[leftIndex] < rightArr[rightIndex]){
            output.push(leftArr[leftIndex])
            leftIndex++
        } else {
            output.push(rightArr[rightIndex])
            rightIndex++
        }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

const result = mergeSort([2,0, 5, 10, 45, 13, 12, 9, 6, 23, 34])
console.log(result)