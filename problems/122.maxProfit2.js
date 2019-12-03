const input = [];

const maxProfit = function (prices) {
  const benifit = prices.reduce((acc, curr, index) => {
    const nextValue = prices[index + 1];

    if (curr < nextValue) {
      return acc + nextValue - curr;
    }

    return acc;
  }, 0);

  return benifit;
};


const ans = maxProfit(input);

console.log('ans ', ans);
