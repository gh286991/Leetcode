const nums = [4,3,2,7,8,2,3,1]

var findDuplicates = function(nums) {
    repeat = nums.filter((element, index, arr)=> {
        return arr.indexOf(element) !== index;
    });

    console.log(repeat)
};

findDuplicates(nums)