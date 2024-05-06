// 
function chunkedArray(arr, num){
    let chunked = []
    let index = 0;
    while(index < arr.length){
        let result = arr.slice(index, index+num)
        chunked.push(result)
        index+=num
    }
    return chunked;
}

function chunkedArray2(arr, n) {
  let chunk = [];
  for (let i = 0; i < arr.length; i += n) {
    let result = arr.slice(i, i + n);
    chunk.push(result);
  }
  return chunk;
}

const result = chunkedArray([3,4,1,6,7,8,9,0,4],2)
console.log(result)
