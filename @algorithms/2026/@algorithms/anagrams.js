function validAnagram(str1, str2) {
  const obj1 = {};
  const obj2 = {};
  for (let val of str1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of str2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

function validAnagram2(str1, str2) {
  const lookup = {};
  for (let val of str1) {
    lookup[val] ? lookup[val]+= 1 : lookup[val] = 1
  }
 
  for (let val of str2) {
    if(!lookup[val]){
        return false
    } else {
        lookup[val] -= 1
    }
  }

  return true;
}

const result = validAnagram2("cinema", "iceman");
console.log(result);
