
function romanNumeralToNumber(num){
    const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;
    for(let i=0; i < num.length; i++){
        const cur = obj[num[i]]
        const next = obj[num[i+1]]
        if(next > cur){
            let output = next - cur
            result+= output;
            i++
        } else {
            result+=cur
        }
    }
    return result
}

const result = romanNumeralToNumber("XXIV")
console.log(result)