import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import AllProducts from "./pages/ProductPages/AllProducts";
import ElectronicsPage from "./pages/ProductPages/Electronics";
import JewelryPage from "./pages/ProductPages/Jewelry";
import MensClothingPage from "./pages/ProductPages/MensClothing";
import ProductsHomePage from "./pages/ProductPages/index";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsHomePage />} />
          <Route path="/products/all-products" element={<AllProducts />} />
          <Route path="/products/electronics" element={<ElectronicsPage />} />
          <Route path="/products/jewelry" element={<JewelryPage />} />
          <Route
            path="/products/mens-clothing"
            element={<MensClothingPage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
