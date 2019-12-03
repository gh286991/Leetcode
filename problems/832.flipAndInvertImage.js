const A = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];


const flipAndInvertImage = function (A) {
  const reverse = [];
  A.forEach((i) => reverse.push(i.reverse()));

  reverse.map((i) => {
    i.map((value, index) => {
      // console.log(i[index])
      if (value === 0) {
        i[index] = 1;
      } else {
        i[index] = 0;
      }
    });
  });

  return reverse;
};

flipAndInvertImage(A);
