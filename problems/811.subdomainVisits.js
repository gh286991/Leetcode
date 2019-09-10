const input =  ["9001 discuss.leetcode.com", "90 test.com" ,'100 yahoo.test.com']


var subdomainVisits = function(cpdomains) { 
    const accObject = cpdomains.reduce((acc,curr,indx)=>{
        const splitArray = curr.split(' ')
        const vistTimes = Number(splitArray[0])
        const domains =splitArray[1].split('.').reverse()

        let subDomains = ''
        for (let i = 0; i < domains.length; i++) {
            if(i == 0){
                subDomains =   domains[i] +subDomains
            }else{
                subDomains =  domains[i]  + '.' + subDomains
            }
            
            let accPoint = 0
                if (acc[subDomains] != undefined) {
                accPoint = Number(acc[subDomains]);
                }

            acc[subDomains] = accPoint + vistTimes
            
        }

        return acc
    },{})
    const domains = Object.keys(accObject)
    const ans = Object.values(accObject).map((v,index)=>{
        return v+ ' ' +domains[index] 
    })
    return ans

};

const ans = subdomainVisits(input)
console.log('ans' , ans)