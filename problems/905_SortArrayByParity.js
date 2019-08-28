const A = [3,1,2,4]

const sortArrayByParity = function(A) {
    const even =[]
    const odd = []
    
    A.map(i=>{
        if(i % 2 === 1){
            odd.push(i)
        }else even.push(i) 
    })

    console.log('odd' , odd)
    console.log('even' , even)

    const ans = even.concat(odd);//
    return ans
};

sortArrayByParity(A)