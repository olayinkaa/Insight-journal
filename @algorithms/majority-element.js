function majorityElement(arr){
    const map = {}
    let maxNum = 0;
    let majorityElementt;
    for(let i =0; i < arr.length; i++){
        let item = arr[i]
        if(map[item]){
            map[item]++
        } else {
            map[item] = 1
        }
    }

    for(let key in map){
        if(map.hasOwnProperty(key)){
            if(map[key] > maxNum){
                maxNum = map[key]
                majorityElement = key
            }
        }
    }

    return majorityElement;
}

const result = majorityElement([3,2,3])
console.log(result)