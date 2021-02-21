import LoadContextPovider from "context/loadContext";
import { ToastContainer } from "react-toastify";
import "./App.css";
import CurrentLoad from "./components/CurrentLoad";
import GraphComponent from "./components/graphComponent/GraphComponent";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <div className="App">
      <LoadContextPovider>
        <header className="App-header">
          <CurrentLoad />
          <GraphComponent />
        </header>
      </LoadContextPovider>
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};

export default App;
