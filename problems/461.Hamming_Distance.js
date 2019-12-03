const x = 14;
const y = 99;
// parseInt(1).toString(2);


const hammingDistance = function (x, y) {
  const Num1 = parseInt(x).toString(2).split('');
  const Num2 = parseInt(y).toString(2).split('');
  const dif = Num2.length - Num1.length;

  for (let i = 0; i < Math.abs(dif); i++) {
    if (dif < 0) {
      Num2.unshift('0');
    } else {
      Num1.unshift('0');
    }
  }

  const Ans = Num1.map((value, index) => {
    if (value != Num2[index]) {
      return 1;
    }
    return 0;
  }).reduce((a, b) => (a + b));

  return Ans;
};

hammingDistance(x, y);
