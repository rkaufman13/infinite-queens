const rotateClockwise = (matrix) => {
  return matrix[0].map((val, index) =>
    matrix.map((row) => row[index]).reverse()
  );
};

const mirrorAlongYAxis = (matrix) => {
  return matrix.forEach((arr) => {
    arr.reverse();
  });
};

const checkOneQueenInEachRow = (matrix) => {
  return matrix.every((arr) => {
    if (arr.indexOf(1) == -1) {
      return false;
    }
    if (arr.indexOf(1) != arr.lastIndexOf(1)) {
      return false;
    }
    return true;
  });
};

const checkSolution = (matrix) => {
  let winning = false;
  //one queen in each row
  winning = checkOneQueenInEachRow(matrix);
  //one queen in each column
  const rotatedMatrix = rotateClockwise(matrix);
  winning = checkOneQueenInEachRow(rotatedMatrix);
  //check diagonals
  const indices = [
    ...new Set(
      matrix.map((arr) => {
        return arr.indexOf(1);
      })
    ),
  ];
  winning = indices.length === 8;
  return winning;
};

const solution = [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
];

export const generateSolution = () => {
  //generate a solution
  return solution;
};

const isSelected = (num) => {
  return num === 1;
};

export const generateGame = (solution) => {
  return solution.map((row, idx) => {
    return row.map((space, xidx) => {
      return {
        x: xidx,
        y: idx,
        selected: isSelected(space),
        permanent: true,
      };
    });
  });
};
