import { Queen } from "./queen";
export const Square = ({ selected }) => {
  const selectedClass = selected ? "selected" : "unselected";
  const classes = `square ${selectedClass}`;
  return <div className={classes}>{selected && <Queen />}</div>;
};
