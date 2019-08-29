const input = [[1,2],[3,4],[5,6]]

var projectionArea = function(grid) {
    const xy = grid.map(value=>value.length).reduce((a,b)=>(a+b))

    const yz = grid.reduce((acc,curr)=> acc += Math.max(...curr),0)
    const yztest = grid.reduce((acc,curr)=> {
        console.log('acc' , acc)
        console.log('curr' ,curr)
        const array = []
        array.push(...curr)
        console.log('array:', Math.max(...curr))
        return acc+Math.max(...curr)
        
    },0)

    console.log(yztest)
    // const xz = grid[0].reduce((acc,curr,i)=> {
    //     const newArray = grid.map(arr=>arr[i])
    //     console.log('acc' ,acc)
    //     console.log(newArray)
    //     console.log(Math.max(...newArray))
    //     acc = acc + Math.max(...newArray)
    //     console.log(acc)
            
    // })
    // console.log(xz)

    // const test = [[1,2,3] ,[4,5,6],[7,8,9]]
    
    // const xz2 = test[0].reduce( (a,b,i)=>{
    //     console.log(i)
    //     const test = grid.map(arr=>arr[i])
    //     let array = []
    //     array.push(...test)
    //     console.log('test', array)
    //     return a+b
    // })
    // console.log(xz2)
    // return xy+yz+xz
};

const ans = projectionArea(input)
// console.log(ans)