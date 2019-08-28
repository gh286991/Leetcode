
const test = "1.1.1.1"

var defangIPaddr = function(address) {

    const result = address.replace(/\./g,'[.]');

    return result

};



defangIPaddr(test)