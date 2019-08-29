const input = [0, 1, 2, 3]

var sum = input.reduce( (accumulator, currentValue)=> {
    console.log('accumulator= ',accumulator)
    console.log('currentValue= ',currentValue)
    return accumulator + currentValue;
  }, 0);

var reduce = input.reduce((a,b)=>{
     console.log('a= ',a)
    console.log('b= ',b)
    return a+b
})

console.log( 'sum: ',sum)
console.log('reduce: ',reduce)