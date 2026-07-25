// smaller number than current
function smallerNumberThanCurrent(arr){
    let output = []
    for(let i=0; i < arr.length; i++){
        output[i] = 0
        for(let j=0; j < arr.length; j++){
            if(arr[i] !== arr[j] && arr[i] > arr[j]){
                output[i]++
            }
        }
    }
    return output
}

function smallerNumberThanCurrent2(arr) {
  let output = Array(arr.length).fill(0)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j] && arr[i] > arr[j]) {
        output[i]++;
      }
    }
  }
  return output;
}

function smallerNumberThanCurrent3(arr) {
  let sortedArray = [...arr].sort((a,b)=> a - b)
  let output = []
  for(let i=0; i < arr.length;i++){
    output.push(sortedArray.indexOf(arr[i]))
  }
  return output
}

const result = smallerNumberThanCurrent3([8,1,2,2,3])
console.log(result)