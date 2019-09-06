const input = [4, [[1,3],[1,4],[2,3],[2,4],[4,3]]]

// const ArrayIndex = (input , target)=>{
//     // const input = [ [1,3],[1,2],[4,5]]
//     // const target = [ [4,5]]

//     const hash ={}
//     for (let i = 0; i < input.length; i++) {
//        hash[input[i]] = i;
//     }

//     if(hash.hasOwnProperty(target)){
//         return hash[target]
//     }
//     return -1
// }

// var findJudge = function(N, trust) {

//     // console.log(N)
//     // console.log(trust)

//     const people = Array.from(new Array(N), (val, index) => index + 1);

//     const trusts = trust.map( (value , index)=>{
//         return value[0]
//     })

//     const judges = people.map( (value,index)=>{
//         if( trusts.indexOf(value)<0){
//             return value
//         } return null
//     }).filter( value => value != null)

   

//     if( judges.length == 0){
//         return -1
//     }


//     const ans = judges.map( (jd,i)=>{

//         const everyTrustArray = []
    
//         people.forEach((value,j)=>{
//             if(value != jd){
//                 everyTrustArray.push([value,jd])
//             }
//         })
     

//         const judge  = everyTrustArray.every((value,index)=>{
//             const find = ArrayIndex(trust , value )
//             return find != -1
//         })

  

//         if(judge == true){
//             return jd
//         } else {return -1}
//     })
    
//     return ans[0]
// };

// const ans = findJudge(input[0] , input[1])
// console.log(ans)




// const test = ArrayIndex(input[0] , input[1])
// console.log(test)


var findJudge = function(N, trust) {
    const trustOthers = new Set(trust.map(v=>v[0]))
    const people = Array.from(new Array(N), (val, index) => index + 1);

    const notrusting = people.filter( v => {
        return !trustOthers.has(v)
    })

    if(notrusting.length != 1){
        return -1
    }

    const L = trust.filter( pair => {
        return pair[1] == notrusting
    })

    if(L.length == N-1){
        return notrusting[0]
    } else { return -1}


};

const ans = findJudge(input[0] , input[1])
console.log(ans)
