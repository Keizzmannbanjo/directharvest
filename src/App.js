import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Farms from "./pages/Farms";
import Farm from "./pages/Farm";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import MainApp from "./pages/MainApp"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<MainApp />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="farms" element={<Farms />} />
          <Route path="farm" element={<Farm />} />
          <Route path="order" element={<Order />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
  );
}

export default App;
