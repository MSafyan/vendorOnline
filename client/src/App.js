import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
