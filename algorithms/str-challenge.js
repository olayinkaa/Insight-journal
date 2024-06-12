function StringChallenge(str) {
  // code goes here
  const reductionMap = {
    ab: "c",
    ba: "c",
    ac: "b",
    ca: "b",
    bc: "a",
    cb: "a",
  };

  let varOcg = str;

  let reduced = true;

  // Continue reducing until no more reductions are possible
  while (reduced) {
    reduced = false;
    let newStr = "";
    let i = 0;

    while (i < varOcg.length) {
      if (i < varOcg.length - 1) {
        const pair = varOcg[i] + varOcg[i + 1];
        if (reductionMap[pair]) {
          newStr += reductionMap[pair];
          i += 2;
          reduced = true;
        } else {
          newStr += varOcg[i];
          i++;
        }
      } else {
        newStr += varOcg[i];
        i++;
      }
    }

    varOcg = newStr;
  }

  return varOcg.length;
}
