import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import MyOrders from "./components/MyOrders";
import NewOrder from "./components/NewOrder";
import "./App.css";

function App() {
  return (
    <div className="App">
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
