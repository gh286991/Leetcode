/* eslint-disable func-names */

const numsInput = [3, 3];
const targetInput = 6;

const twoSum = function (nums, target) {
  const list = [];
  nums.foreach((el, ix) => {
    const Newnums = nums.filter((e, index) => ix !== index);
    Newnums.map((i) => {
      const sum = el + i;
      if (sum === target) {
        list.push(ix);
      } return null;
    });
  });

  return list;
};


// eslint-disable-next-line no-console
console.log('Ans', twoSum(numsInput, targetInput));
