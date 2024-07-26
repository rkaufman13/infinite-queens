import { Square } from "./square";

export const QueenRow = ({ contents, handleClick }) => {
  return contents.map((square) => {
    return (
      <Square
        y={square.y}
        x={square.x}
        selected={square.selected}
        id={square.id}
        key={square.id}
        handleClick={() => handleClick(square.x, square.y)}
        permanent={square.permanent}
      />
    );
  });
};
