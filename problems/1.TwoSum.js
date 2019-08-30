
const  nums = [3,3]
const  target = 6

var twoSum = function(nums, target) {
    const list =[]
    nums.map( (el , ix) =>{

        const Newnums = nums.filter((e , index)=> ix != index)
        Newnums.map((i)=>{
            const sum = el+i
            if(sum === target){
                list.push(ix)
            }   return null
        })
    })

    return list
};



console.log('Ans',twoSum(nums ,target ))