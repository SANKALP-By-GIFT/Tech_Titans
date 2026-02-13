import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
}

export default App;
