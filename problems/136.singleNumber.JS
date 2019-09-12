
const input = [2,2,1,1,4]

var singleNumber = function(nums) {
    const ans = nums.reduce((a,b)=>{
        return a^b
    })
    
  
    return ans
};

const ans = singleNumber(input)

console.log('ans' , ans)