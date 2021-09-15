import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Main />
        </div>;
      </Router>
    </>)
}

export default App;
