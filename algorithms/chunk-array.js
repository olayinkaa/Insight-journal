// 
function chunkedArray(arr, num){
    let chunked = [ ]
    let index = 0;
    while(index < arr.length){
        let result = arr.slice(index, index+num)
        chunked.push(result)
        index+=num
    }
    return chunked;
}

const result = chunkedArray([3,4,1,6,7,8,9,0,4],2)
console.log(result)
