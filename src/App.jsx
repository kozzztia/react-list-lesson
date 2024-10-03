import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Catalog from "./pages/Catalog";
import Customers from "./pages/Customers";
import Reviews from "./pages/Reviews";
import Sales from "./pages/Sales";

function App() {
  return (
    <Router basename="/react-list-lesson">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
