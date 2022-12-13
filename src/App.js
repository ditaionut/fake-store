import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products/:productID" element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
