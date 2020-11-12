import './App.css';
import Trivia from './Trivia';
import Timer from './Timer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          The Big Lebowski<br></br> Trivia Game 
        </h1>
      </header>
    <Trivia />
    <Timer />
    </div>
  );
}

export default App;
