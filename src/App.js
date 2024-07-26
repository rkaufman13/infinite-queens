import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { QueenRow } from "./row";
import { WinnerModal } from "./WinnerModal";
import { generateSolution, generateGame, checkSolution } from "./code";

const solution = generateSolution();

function App() {
  const [queens, setQueens] = useState(generateGame(solution));
  const [winner, setWinner] = useState(false);

  const resetGame = () => {
    setWinner(false);
    setQueens(generateGame(generateSolution()));
  };

  const handleClick = (x, y) => {
    const newQueens = [...queens];
    const isSelected = queens[y][x].selected;
    newQueens[y][x].selected = !isSelected;
    setQueens(newQueens);
    checkGameState();
  };

  const checkGameState = () => {
    //convert state of game into matrix
    const maybeSolution = queens.map((row) => {
      return row.map((square) => {
        return square.selected ? 1 : 0;
      });
    });
    if (checkSolution(maybeSolution)) {
      setWinner(true);
    } else {
      setWinner(false);
    }
  };

  return (
    <div className="App">
      <WinnerModal winner={winner} resetGame={resetGame} />
      <header className="App-header">
        <h1>Infinite Queens</h1>
        <p>
          The goal of the game of Queens is to place eight queens on the
          chessboard so that no two queens can capture each other. No queen can
          be in the same row or column as another, nor can any two queens be in
          the same diagonal line. Good luck!
        </p>
      </header>
      <div className="parent-container">
        <Container>
          {queens.map((row, yIndex) => {
            return (
              <Row xs={8} md={8} lg={8}>
                <QueenRow
                  contents={row}
                  checkGameState={checkGameState}
                  key={yIndex}
                  handleClick={handleClick}
                ></QueenRow>
              </Row>
            );
          })}
        </Container>
      </div>
    </div>
  );
}

export default App;
