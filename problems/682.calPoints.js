const input = ["-60","D","2","2","2","C","C"]

var calPoints = function(ops) {

    //String to number
    const data = ops.map(el => {
        let n = Number(el);
        return n === 0 ? n : n || el;
      });

    // remove C
    const C_nums = data.filter(v=>v=="C").length
      for (let i = 0; i < C_nums; i++) {
        const C_loaction = data.indexOf("C")
        data.splice(C_loaction-1 ,2)
      }

    // count points
    const points = data.reduce((acc,curr ,idx)=>{
        let temp = 0
        if(curr == 'D'){
            temp = data[idx-1]*2
            data[idx] = temp
        }else if(curr == '+'){
            temp = data[idx-1] +  data[idx-2]
            data[idx] = temp 
        }else{
            temp = curr
        }
        return acc + temp
    } ,0)

    return points
};


const ans = calPoints(input)
console.log(ans)
