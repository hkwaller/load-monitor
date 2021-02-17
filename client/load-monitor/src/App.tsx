import LoadContextPovider from "context/loadContext";
import "./App.css";
import CurrentLoad from "./components/CurrentLoad";
import Graph from "./components/FiveMinuteGraph";

const App = () => {
  return (
    <div className="App">
      <LoadContextPovider>
        <header className="App-header">
          <CurrentLoad />
          <Graph title="Five minute average" />
        </header>
      </LoadContextPovider>
    </div>
  );
};

export default App;
