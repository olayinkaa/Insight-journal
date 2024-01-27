// smaller number than current
function smallerNumberThanCurrent(arr){
    let result = []
    for(let i=0; i < arr.length; i++){
        result[i] = 0
        for(let j=0; j < arr.length; j++){
            if(arr[i] !== arr[j] && arr[i] > arr[j]){
                result[i]++
            }
        }
    }
    return result
}

const result = smallerNumberThanCurrent([8,1,2,2,3])
console.log(result)