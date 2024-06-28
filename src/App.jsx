import { Routes, Route } from "react-router-dom";
import Login from "./components/landloard/login";
import Signup from "./components/landloard/signUp";
import LandLord from "./components/landloard/landlord.jsx";
import TenantList from "./components/landloard/TenantList";
import PropertyTab from "./components/landloard/landlordPropertTab";
import Login1 from "./components/tenant/login";
import LandlordList from "./components/tenant/LandlordList";
import TenantTab from "./components/tenant/TenantPropertList";
import Payment from "./components/tenant/paymentdue";
import Property from "./components/tenant/property";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandLord />} />
      <Route path="/tenant-list" element={<TenantList />} />
      <Route path="/property-list" element={<PropertyTab />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login1" element={<Login1 />} />
      <Route path="/list" element={<TenantTab />} />
      <Route path="/landlord-list" element={<LandlordList/>} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/property" element={<Property />} />
    </Routes>
  );
}

export default App;
