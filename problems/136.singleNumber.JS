
// const input = [2, 2, 1, 1, 4];

// eslint-disable-next-line func-names
const singleNumber = function (nums) {
  const ans = nums.reduce((a, b) => a ^ b);


  return ans;
};
