import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import Detail from "./components/detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail" element={<Detail />}/>
      </Routes>
    </Router>
  );
}

export default App;
