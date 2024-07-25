import { Square } from "./square";

export const Row = ({ yIndex, contents }) => {
  return contents.map((square) => {
    return (
      <div className="row">
        <Square y={square.y} x={square.x} selected={square.selected} />
      </div>
    );
  });
};
