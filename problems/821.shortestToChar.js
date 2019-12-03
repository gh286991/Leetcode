
const input = {
  S: 'loveleetcode',
  C: 'e',

};


const shortestToChar = function (S, C) {
  const sArray = S.split('');

  const dis = sArray.map((str, index) => {
    const lastTarget = sArray.lastIndexOf(C, index);
    const targetIndex = sArray.indexOf(C, index);

    const before = index - lastTarget;
    const after = targetIndex - index;


    if (lastTarget == -1) {
      return after;
    }
    if (targetIndex == -1) {
      return before;
    }
    return Math.min(after, before);
  });
  return dis;
};

const ans = shortestToChar(input.S, input.C);
console.log(ans);
