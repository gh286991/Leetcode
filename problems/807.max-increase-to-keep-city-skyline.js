test = [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]];

const rowSkykine = ((data) => {
  const max = data.map((value) => Math.max(...value));
  return max;
});

const columnSkykine = ((data) => {
  const newArray = [];
  const result = [];

  data[0].forEach((v, i) => {
    newArray.push(data.map((value, k) => value[i]));
    result.push(Math.max(...newArray[i]));
  });

  return result;
});

const maxIncreaseKeepingSkyline = function (grid) {
  const checkrow = rowSkykine(grid);
  const checkColum = columnSkykine(grid);

  const newData = [];
  const result = grid.map((array, i) => {
    let sum = 0;
    newData.push(array.map((value, k) => {
      let judgeValue;

      if (checkColum[k] < checkrow[i]) {
        judgeValue = checkColum[k];
      } else {
        judgeValue = checkrow[i];
      }

      if (array[k] < judgeValue) {
        // console.log('judgeValue' , judgeValue)
        sum = sum + judgeValue - array[k];
        array[k] = judgeValue;
      }


      // console.log(sum)
      return sum;
    }));
    return sum;
  });
  const ans = result.reduce((a, b) => (a + b));
  return ans;
};


console.log(maxIncreaseKeepingSkyline(test));
