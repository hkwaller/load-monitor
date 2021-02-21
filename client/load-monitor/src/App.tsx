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
        {/* 
          borde inte ha allt detta i header. Menar också att charten borde
          vara centrerad i komponenten med settings på sidan av den

          Här använder du också default klasserna som kom med CRA. Fint att
          vara konsekvent i hela appen
        */}
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
