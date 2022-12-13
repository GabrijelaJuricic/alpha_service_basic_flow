import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MyOrders from "./pages/MyOrders";
import NewOrder from "./pages/NewOrder";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/new-order" element={<NewOrder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
