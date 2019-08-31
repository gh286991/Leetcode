const input = [0, 1, 2, 3]

const sum = input.reduce( (accumulator, currentValue)=> {
    return accumulator + currentValue;
  }, 0);

const reduce = input.reduce((a,b)=>{
    return a+b
})

console.log( 'sum: ',sum)
console.log('reduce: ',reduce)

const Demo = [[1,2,3] ,[4,5,6]]

const horizontalValue=(data)=>{
 const outPut = data.map( (value ,index)=>{
    return value.map( Element => {
      console.log(Element)
    } )
 })
 return outPut
}

const horizontalMax =(data)=>{
  const outPut = data.reduce((acc,curr) => {
    const max =  Math.max(...curr) 
    return acc + max
  },0)
  return outPut
}

const verticalMax =(data)=>{
  const outPut = data[0].reduce((acc,curr,index) => {
    const vertical =  data.map(value =>{
      return value[index]
    })
    const max =  Math.max(...vertical) 
    return acc + max
  },0)
  return outPut
}

console.log(horizontalValue(Demo))
console.log(horizontalMax(Demo))
console.log(verticalMax(Demo))