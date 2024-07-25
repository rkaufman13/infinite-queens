import "./App.css";
import { Row } from "./row";
import { generateSolution, generateGame } from "./code";

const solution = generateSolution();

const queens = generateGame(solution);
console.log(queens);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Infinite Queens</p>
      </header>
      <div className="parent">
        {queens.map((row, yIndex) => {
          return <Row y={yIndex} contents={row}></Row>;
        })}
      </div>
    </div>
  );
}

export default App;
