import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const WinnerModal = ({ winner, resetGame }) => {
  return (
    <Modal
      show={winner}
      size="sm"
      centered="true"
      className="text-danger bg-secondary"
    >
      <Modal.Dialog>
        <Modal.Body>
          <p>You win!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={resetGame}>Play again?</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};
