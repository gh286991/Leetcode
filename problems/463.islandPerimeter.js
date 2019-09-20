
const input = [
    [0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]
]


var islandPerimeter = function(grid) {

    const count = grid.reduce( (acc,curr ,index) =>{

           const sides = curr.map( (value,idx) =>{

                const side = value*4
            
                const left = curr[idx-1] == undefined ? 0 : curr[idx-1]
                const right = curr[idx+1] == undefined ? 0 : curr[idx+1]

                const up = grid[index-1] == undefined ? 0 : grid[index-1][idx]
                const down = grid[index+1] == undefined ? 0 : grid[index+1][idx]

                const repeat = [left , right ,up, down]
                const point = side-repeat.reduce((a,b)=> a+b)
                if(point < 0){
                    return 0
                } else return point
           }).reduce((a ,b) => a+b)
           return acc+sides
    },0 )

    return count
};

const ans = islandPerimeter(input)
console.log('ans = ' , ans)