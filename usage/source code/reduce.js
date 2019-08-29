const input = [0, 1, 2, 3]

var sum = input.reduce( (accumulator, currentValue)=> {
    return accumulator + currentValue;
  }, 0);

var reduce = input.reduce((a,b)=>{
    return a+b
})

console.log( 'sum: ',sum)
console.log('reduce: ',reduce)