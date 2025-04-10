import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page1DetailsA } from "./components/Page1DetailsA";
import { Page1DetailsB } from "./components/Page1DetailsB";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />}>
          <Route path="/detailsA" element={<Page1DetailsA />} />
          <Route path="/detailsB" element={<Page1DetailsB />} />
        </Route>
        <Route path="/page2" element={<Page2 />} />
      </Routes>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/page1">PAGE1</Link>
      <br />
      <Link to="/page2">PAGE2</Link>
    </div>
  );
}
