function isPrime(num){
    if(num <= 1) return false
    if(num <= 3) return true
    for(let i=2; i < num; i++){
        if(num % i === 0) return false
    }
    return true
}

const result = isPrime(25)
console.log(result)