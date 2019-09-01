const input = [[1,1],[1,1],[0,1]]

var matrixScore = function(A) {
    const row = A.length
    const col = A[0].length

    // 翻轉第一個
    for (let i = 0; i < row ; i++) {
        const e = A[i][0];
        if(e==0){
            for (let j = 0; j < A[i].length; j++) {
                A[i][j] = A[i][j] ^ 1
    }}}
    
    for (let i = 1; i < col; i++) {
        let zero =0
        for (let j = 0; j < row; j++) {
            const value = A[j][i];
            if(value == 0){
                zero ++
        }}

        if(zero >= Math.round(row/2) ){
            for (let j = 0; j < row; j++) {
                A[j][i] =A[j][i] ^ 1
            }}
    }
    return transToNum(A)
};


const transToNum = (Array)=>{
    const output = Array.reduce((acc,curr)=>{
        const str = curr.join('')
        const Num = parseInt( str,  2 )
        return acc + Num
    },0)

    return output
}

const ans = matrixScore(input)
console.log(ans)

// console.log(transToNum([[1,1],[1,1],[1,0]]))
