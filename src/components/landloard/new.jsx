
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route
        path="/landlord-page-property-tab"
        element={<LandlordPagePropertyTab />}
      />
      <Route
        path="/landlord-page-property-tab-add-edit-property"
        element={<LandlordPagePropertyTab1 />}
      />
      <Route
        path="/footer"
        element={<Footer/>}
      />
      <Route
        path="/landlord-page-tenant-tab"
        element={<LandlordPageTenantTab />}
      />
      <Route path="/login-page" element={<LoginPage />} />
      <Route
        path="/tenant-page-property-tab1"
        element={<TenantPagePropertyTab />}
      />
      <Route
        path="/tenant-page-property-tab"
        element={<TenantPagePropertyTab1 />}
      />
      <Route
        path="/tenant-page-landlord-tab"
        element={<TenantPageLandlordTab />}
      />
      <Route path="/tenant-page-rent-tab" element={<TenantPageRentTab />} />
      <Route path="/frame-26086479" element={<Frame1 />} />
      <Route path="/login-page1" element={<LoginPage1 />} />
      <Route path="/group-26086374" element={<Group />} />
    </Routes>
  );
}
export default App;
