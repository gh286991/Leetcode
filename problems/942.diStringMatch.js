const input = 'IDID';
// D>>>先取最大的
// I>>>先取最小的

const diStringMatch = function (S) {
  const lists = Array(S.length + 1).fill().map((value, index) => index);
  const input = S.split('');
  input.push('');

  const ans = input.map((v) => {
    if (v === 'I') {
      const num = Math.min.apply(null, lists);
      const index = lists.indexOf(num);
      lists.splice(index, 1);
      return num;
    } if (v === 'D') {
      const num = Math.max.apply(null, lists);
      const index = lists.indexOf(num);
      lists.splice(index, 1);
      return num;
    } return lists[0];
  });

  return ans;
};

diStringMatch(input);
