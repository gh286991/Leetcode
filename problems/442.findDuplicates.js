const nums = [4, 3, 2, 7, 8, 2, 3, 1];

const findDuplicates = function (nums) {
  repeat = nums.filter((element, index, arr) => arr.indexOf(element) !== index);

  console.log(repeat);
};

findDuplicates(nums);
