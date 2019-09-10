const input =  ["9001 discuss.leetcode.com", "90 test.com"]


var subdomainVisits = function(cpdomains) { 
    const ans = cpdomains.reduce((acc,curr,indx)=>{
        const splitArray = curr.split(' ')
        const vistTimes = Number(splitArray[0])
        const domains =splitArray[1].split('.').reverse()

        console.log('curr' , splitArray)
        console.log('domains' , domains)
        console.log('vistTimes' , vistTimes)
        
        let subDomains = ''
        for (let i = 0; i < domains.length; i++) {
            subDomains += '.' +domains[i]
            // console.log('subDomains' , subDomains)
            
            acc[subDomains] +=  vistTimes
            
        }
        console.log('acc[subDomains]' , acc)
        return acc
        // console.log('subDomains' , subDomains)
        // return acc
    },{})



    console.log(ans)
    // const splitArray = cpdomains[0].split(' ')

    // cpdomains.map((value,index)=>{

    // const splitArray = value.split(' ')
    // const domains =splitArray[1].split('.').reverse()
    // const vistTimes = Number(splitArray[0])
    // const reduce = domains.reduce((acc ,curr,indx)=>{

    //     for (let i = 0; i < indx; i++) {
    //         curr += '.' +domains[i]
    //     }

    //     console.log('curr' , curr)
    //     acc[curr] = vistTimes
    //    return  acc

    // },{})

    // console.log('reduce' , reduce)
    // })
    
    // const domains =splitArray[1].split('.').reverse()
    // const vistTimes = Number(splitArray[0])
    // const reduce = domains.reduce((acc ,curr,indx)=>{

    //     for (let i = 0; i < indx; i++) {
    //         curr += '.' +domains[i]
    //     }

    //     console.log('curr' , curr)
    //     acc[curr] = vistTimes
    //    return  acc

    // },{})

    // console.log('reduce' , reduce)

};

const ans = subdomainVisits(input)
console.log('ans' , ans)