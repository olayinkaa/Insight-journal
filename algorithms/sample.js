//
function insertionSort(arr) {
    for(let i=1; i < arr.length; i++){
        for(j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
    }
    return arr
}

function selectionSort(arr){
    for(let i= 0; i < arr.length - 1; i++){
        let minIndex = i
        for(let j= i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }

    return arr
}

const result = selectionSort([2,5,10,1, 20, 0, 34, 45,12]);
console.log(result);
