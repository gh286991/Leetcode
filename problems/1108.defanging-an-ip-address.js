
const test = '1.1.1.1';

const defangIPaddr = function (address) {
  const result = address.replace(/\./g, '[.]');

  return result;
};


defangIPaddr(test);
