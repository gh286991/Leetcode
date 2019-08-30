const input = ["cat","bt","hat","tree", "aaa"]
const chars = "atach"

var countCharacters = function(words, chars) {
    const ans = words.map((value,index)=>{
        let char = chars

        const alphabet = value.split('').every((letter)=>{
            const judge = char.indexOf(letter)
            char = char.replace(letter,'')
            return judge > -1
        })

    if(alphabet){
        return value.length
    }else return 0

    }).reduce((a,b)=>(a+b))

   return ans
};

countCharacters(input,chars)