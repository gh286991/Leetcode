// const input = [1,2,3,4,5]
// const input = [3,3,5,0,0,4,1,4]
// const input = [3,3,5,0,0,1,3,4]
// const input = []
// const input = [5,4,3,2,1]
const input = [1,2,4,2,5,7,2,4,9,0]

var maxProfit = function(prices) {
     
    const benfitArray = []
    const benifit = prices.reduce( (acc , curr ,index)=>{

        const nextValue = prices[index+1]

        if( curr < nextValue ){
            return  acc+  nextValue - curr
        }

        benfitArray.push(acc)

        return 0
    },0)


    benfitArray.sort((a,b)=>b-a) 

    console.log('benfitArray' , benfitArray)
    const N = benfitArray.length

    if(N=== 0){
        return 0
    }

    const ans = N >1 ? benfitArray[0]+benfitArray[1] :benfitArray[0]

    return ans

};


const ans = maxProfit(input)

console.log('ans ' , ans )