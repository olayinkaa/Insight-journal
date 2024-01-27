//
function getMaxNum(arr) {
    let max = Number.NEGATIVE_INFINITY;
    for(let i=0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

const result = getMaxNum([5,10,23,-8,45,89]);
console.log(result);
