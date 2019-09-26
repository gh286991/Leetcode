
const input = [2,2]

var lastStoneWeight = function(stones) {
    
    while (stones.length != 1) {

        stones.sort((a,b)=> b-a)
        const diff = stones[0] - stones[1]
        
        if(diff == 0){
            stones.splice(0,2)
        }else {
            stones.splice(0,2 ,diff)
        }
        
        if(stones.length == 0){
            stones.push(0)
        }
    }
   
    return stones
};


const ans = lastStoneWeight(input)
console.log('ans ' , ans )