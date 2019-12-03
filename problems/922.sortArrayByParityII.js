const input = [4, 2, 5, 7];

const sortArrayByParityII = function (A) {
  const even = [];
  const odd = [];

  A.forEach((value, index) => {
    if (value % 2 == 0) {
      even.push(value);
    } else {
      odd.push(value);
    }
  });

  const Ans = [];
  for (let i = 0; i < A.length; i++) {
    if (i % 2 == 0) {
      Ans.push(even[i / 2]);
    } else {
      Ans.push(odd[(i - 1) / 2]);
    }
  }

  return Ans;
};

const ans = sortArrayByParityII(input);
console.log(ans);
