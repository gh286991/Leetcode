
const input = ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'];

const numUniqueEmails = function (emails) {
  const ansArray = emails.map((value, index) => {
    const email = value.split('@');
    const user = email[0].replace(/\./g, '');
    const adress = email[1];
    const end = user.length;
    const plus = user.indexOf('+');
    if (plus < 0) {
      return `${user}@${adress}`;
    }
    const remove = user.slice(plus, end);
    const ans = user.replace(remove, '');

    return `${ans}@${adress}`;
  });
  const deduped = Array.from(new Set(ansArray));

  return deduped.length;
};

console.log(numUniqueEmails(input));
// numUniqueEmails(input)
