
const input = [3,4,1,2,1]

var heightChecker = function(heights) {

    const sortHeights = heights.concat().sort((a,b)=>(a-b))

    const diff = heights.map((value,index)=>{
        const sort = sortHeights[index]
        if(value === sort) {
            return 0
        } return 1
    }).reduce((a,b)=>(a+b))

    return diff
};

console.log(heightChecker(input))