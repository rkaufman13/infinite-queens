import Col from "react-bootstrap/Col";
import { Queen } from "./queen";

export const Square = ({ selected, permanent, handleClick }) => {
  //const selectedClass = selected ? "selected" : "unselected";
  const permaClass = permanent ? "permanent" : "";
  const classes = `square ${permaClass}`;

  const handleMaybeClick = () => {
    if (!permanent) {
      handleClick();
    } else {
    }
  };

  return (
    <Col className={classes} onClick={handleMaybeClick}>
      {selected && <Queen />}
    </Col>
  );
};
