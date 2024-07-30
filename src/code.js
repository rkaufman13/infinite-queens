import { solutions } from "./solutions";

const rotateClockwise = (matrix) => {
  return matrix[0].map((val, index) => {
    return matrix.map((row) => row[index]).reverse();
  });
};

const mirrorAlongYAxis = (matrix) => {
  return matrix.map((arr) => {
    return arr.reverse();
  });
};

const checkOneQueenInEachRow = (matrix) => {
  return matrix.every((arr) => {
    if (arr.indexOf(1) === -1) {
      return false;
    }
    if (arr.indexOf(1) !== arr.lastIndexOf(1)) {
      return false;
    }
    return true;
  });
};

export const checkSolution = (matrix) => {
  //one queen in each row
  const rowsAreGood = checkOneQueenInEachRow(matrix);
  //one queen in each column
  const rotatedMatrix = rotateClockwise(matrix);
  const colsAreGood = checkOneQueenInEachRow(rotatedMatrix);
  //check diagonals
  const indices = [
    ...new Set(
      matrix.map((arr) => {
        return arr.indexOf(1);
      })
    ),
  ];
  const diagonalsAreGood = indices.length === 8;
  return rowsAreGood && colsAreGood && diagonalsAreGood;
};

export const generateSolution = () => {
  //generate a solution
  const randomIndex = Math.floor(Math.random() * 6);
  const solution = solutions[randomIndex];

  let matrix = Array.from({ length: 8 }, () =>
    Array.from({ length: 8 }, () => 0)
  );
  for (let i = 0; i < 8; i++) {
    matrix[i][solution[i]] = 1;
  }

  let die = 0;
  //perform some random operations a random number of times
  while (die <= 4) {
    //flip a coin
    const coin = Math.random();
    if (coin > 0.5) {
      matrix = rotateClockwise(matrix);
    } else {
      matrix = mirrorAlongYAxis(matrix);
    }
    die = Math.floor(Math.random() * 6);
  }
  //we have now rotated and flipped the starting queens a few times. now we drop out all but 2-3 starters
  let rows = [0, 1, 2, 3, 4, 5, 6, 7];

  while (rows.length >= 6) {
    rows.splice(rows.length * Math.random(), 1);
  }
  //this should be a list of indices that we can zero out
  for (let index of rows) {
    matrix[index] = new Array(8).fill(0);
  }
  return matrix;
};

const isSelected = (num) => {
  return num === 1;
};

export const generateGame = (solution) => {
  return solution.map((row, idx) => {
    return row.map((space, xidx) => {
      return {
        id: `${xidx},${idx}`,
        x: xidx,
        y: idx,
        selected: isSelected(space),
        permanent: isSelected(space),
      };
    });
  });
};
