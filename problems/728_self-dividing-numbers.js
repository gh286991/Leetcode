
const left = 1
const right = 50

var selfDividingNumbers = function(left, right) {
    const Ans = []

    for (let i = left; i < right+1; i++) {
        const digits = (""+i).split("");
        const judge = (  digits.every( value =>{
            const Num = i
            const divN = Number(value)
           
            return  Num % divN === 0
        }))

        if(judge === true){
            Ans.push(i)
        }
    }

   return Ans
};

selfDividingNumbers(left,right)