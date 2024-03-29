import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Farms from "./pages/Farms";
import Farm from "./pages/Farm";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import MainApp from "./pages/MainApp";
import { Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import CreateFarm from "./pages/CreateFarm";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<MainApp />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="farms" element={<Farms />} />
        <Route path="farm/:farmId" element={<Farm />} />
        <Route path="orders" element={<Orders />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="farm" element={<Farm />} />
        <Route path="createfarm" element={<CreateFarm />} />
        <Route path="addproduct" element={<AddProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
