import "./App.css";
import Pokedex from "./Pokedex";
import Monsters from "./Monsters";

function App() {
  return (
    <div className="App">
      <Pokedex monsters={Monsters} />
    </div>
  );
}

export default App;
