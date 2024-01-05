import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import AllProducts from "./pages/ProductPages/AllProducts";
import JewelryPage from "./pages/ProductPages/Jewelry";
import ProductsHomePage from "./pages/ProductPages/index";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsHomePage />} />
          <Route path="/products/all-products" element={<AllProducts />} />
          <Route path="/products/jewelry" element={<JewelryPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
