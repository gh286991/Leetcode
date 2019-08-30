const input = [1,8,3,2,4,7]

var arrayPairSum = function(nums) {

    const ans = nums.sort((a,b)=>(a-b)).map((value,index)=>{
        if(index%2 == 0 ){
            return value
        }else return 0
    }).reduce((a,b)=>(a+b))
    

    return ans
};

arrayPairSum(input)