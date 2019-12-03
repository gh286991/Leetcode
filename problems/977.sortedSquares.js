
const A = [-4, -1, 0, 3, 10];

const sortedSquares = function (A) {
  A.map((value, i) => {
    A[i] = Number(Math.pow(value, 2));
  });

  return (A.sort((a, b) => a - b));
};

sortedSquares(A);
