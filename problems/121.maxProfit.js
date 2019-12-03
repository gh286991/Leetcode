
const input = [];


const maxProfit = function (prices) {
  let min = Infinity;

  if (prices.length === 0) {
    return 0;
  }

  const result = prices.map((value) => {
    if (value < min) {
      min = value;
    }
    return value - min;
  });

  return Math.max(...result);
};

const ans = maxProfit(input);

console.log('ans ', ans);
