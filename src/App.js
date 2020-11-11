import './App.css';
import Trivia from './Trivia';
import Timer from './Timer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          The Big Lebowski Trivia Game. 
        </p>
      </header>
    <Trivia />
    <Timer />
    </div>
  );
}

export default App;
