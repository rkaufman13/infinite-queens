import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const WinnerModal = ({ winner, resetGame }) => {
  return (
    <Modal show={winner}>
      <Modal.Dialog>
        <Modal.Body>You win!</Modal.Body>
        <Modal.Footer>
          <Button onClick={resetGame}>Play again?</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};
