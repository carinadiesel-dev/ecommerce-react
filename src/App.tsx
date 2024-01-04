import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import ProductsHomePage from "./pages/ProductsHome";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsHomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
