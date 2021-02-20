import HighLoadMonitor from "components/HighLoadMonitor";
import LoadContextPovider from "context/loadContext";
import { ToastContainer } from "react-toastify";
import "./App.css";
import CurrentLoad from "./components/CurrentLoad";
import Graph from "./components/FiveMinuteGraph";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <div className="App">
      <LoadContextPovider>
        <header className="App-header">
          <CurrentLoad />
          <Graph title="Five minute average" />
          <HighLoadMonitor />
        </header>
      </LoadContextPovider>
      <ToastContainer />
    </div>
  );
};

export default App;
