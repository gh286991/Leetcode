const moving = "LR"

var judgeCircle = function(moves) {
    const moveStep = [0,0]
    moving.split('').map((value,index)=>{
        
        switch(value) {
            case 'L':
              moveStep[1] += 1
              break;
            case 'R':
                moveStep[1] += -1
              break;
            case 'U':
                moveStep[0] += 1
              break;
            case 'D':
                moveStep[0] += -1
              break;
            default:
              // code block
          }
    })

    if(moveStep[0] === 0 & moveStep[1] === 0){
        return true
    } else{ return false}
    // console.log(moves)
};

console.log(judgeCircle(moving))