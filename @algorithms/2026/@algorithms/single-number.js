function singleNumber(arr){
    const map = {}
    for(let i=0; i < arr.length; i++){
        let item = arr[i]
        map[item] = (map[item] + 0) + 1
    }
    for(let key in map){
        if(map.hasOwnProperty(key) && map[key] === 1 ){
            return key
        }
    }
}

function singleNumber2(arr){
    const map = {}
    for(let i=0; i < arr.length; i++){
        let item = arr[i]
        if(map[item]) {
            map[item]++
        } else {
            map[item] = 1
        }
    }
    for(let key in map){
        if(map.hasOwnProperty(key) && map[key]===1 ){
            return key
        }
    }
}

function singleNumber3(arr){
    for(let i =0; i < arr.length; i++){
        let item = arr[0]
        arr = arr.slice(1)
        if(arr.indexOf(item)=== - 1){
            return item
        } else {
            arr.splice(arr.indexOf(item),1)
        }
    }
}

function singleNumber4(arr){
    return arr.reduce((a,b)=> a ^ b);
}

const result = singleNumber([4,1,2,1,2,4,3])
console.log(result)