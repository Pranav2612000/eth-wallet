import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Invest from "./components/pages/Invest.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
