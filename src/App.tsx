import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Home />} />
        <Route path="/item-details" element={<Home />} />
        <Route path="/cart" element={<Home />} />
        <Route path="/wishlist" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
