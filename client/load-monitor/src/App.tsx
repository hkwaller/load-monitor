import "./App.css";
import CurrentLoad from "./components/CurrentLoad";
import Graph from "./components/FiveMinuteGraph";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CurrentLoad />
        <Graph title="Graph" />
      </header>
    </div>
  );
};

export default App;
