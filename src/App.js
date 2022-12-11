import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import MyOrders from "./components/MyOrders";
import "./App.css";
import NewOrder from "./components/NewOrder/NewOrder";

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
