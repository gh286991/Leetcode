
const input = [3,2,6,5,0,3]


var maxProfit = function(prices) {
    let min 
    let minIndex
    const filPrices = prices.filter( i => i != 0)
    
    min =  Math.min(...filPrices)
    minIndex =  filPrices.indexOf(min)

    if( filPrices.length === 0  ||filPrices.length === 1 ){
        return 0
    }

    if(minIndex === filPrices.length-1){
        filPrices.splice( minIndex , 1)
    }

    // console.log('prices' , prices)

    min =  Math.min(...filPrices)
    minIndex =  filPrices.indexOf(min)
    prices.splice(0 , minIndex)

    // console.log('prices' , prices)
    const max = Math.max(...filPrices)

    return  max-min
};

const ans = maxProfit(input)

console.log('ans ' , ans)