const input = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]

var matrixScore = function(A) {
    const row = A.length
    const col = A[0].length

    // 翻轉第一個
    for (let i = 0; i < row ; i++) {
        const e = A[i][0];
        if(e==0){
            for (let j = 0; j < A[i].length; j++) {
                const value = A[i][j];
                A[i][j] = A[i][j] ^ 1
            }
        }
    }
    
    for (let i = 1; i < col; i++) {
        // const e = A[i];
        
        // console.log( 'A[i]' , A[i])
        for (let j = 0; j < row; j++) {
            const value = A[j][i];
            
            console.log(['23232' ,value])

            let zero 
        }
        
        console.log('-----')
    }
    printArray(A)
};

const printArray = (Array)=>{
    Array.forEach( e => {
        console.log(e)
    });
}

const transToNum = (Array)=>{
    const output = Array.reduce((acc,curr)=>{
        const str = curr.join('')
        const Num = parseInt( str,  2 )
        return acc + Num
    },0)

    return output
}

// console.log(parseInt( 1111,  2 ))
// const test = [1,1,1,1].join('')
// const Num = parseInt( test,  2 )
// console.log(Num)

// const ans = transToNum(input)
// console.log(ans)

const ans = matrixScore(input)
console.log(ans)

// console.log(printArray(input))