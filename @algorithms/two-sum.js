//
function twoSum(arr, target) {
    const obj = {}
    for(let i=0; i < arr.length; i++){
        const complement = target - arr[i]
        if(obj.hasOwnProperty(complement)){
            return [obj[complement], i]
        }
        obj[arr[i]] = i
    }
    return "No result"
}

const result = twoSum([3,2,5,4,1,9,0],8);
console.log(result);
