import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MaskGroup from "./pages/MaskGroup";
import LoginPage from "./pages/LoginPage";
import LandlordPagePropertyTab from "./pages/LandlordPagePropertyTab";
import Group from "./pages/Group";
import LandlordPagePropertyTab1 from "./pages/LandlordPagePropertyTab1";
import TenantPagePropertyTab from "./pages/TenantPagePropertyTab";
import TenantPagePropertyTab1 from "./pages/TenantPagePropertyTab1";
import TenantPageLandlordTab from "./pages/TenantPageLandlordTab";
import TenantPageRentTab from "./pages/TenantPageRentTab";
import Frame from "./pages/Frame";
import LoginPage1 from "./pages/LoginPage1";
import LandlordPageTenantTab from "./pages/LandlordPageTenantTab";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/landlord-page-property-tab":
        title = "";
        metaDescription = "";
        break;
      case "/group-26086374":
        title = "";
        metaDescription = "";
        break;
      case "/landlord-page-property-tab-add-edit-property":
        title = "";
        metaDescription = "";
        break;
      case "/tenant-page-property-tab1":
        title = "";
        metaDescription = "";
        break;
      case "/tenant-page-property-tab":
        title = "";
        metaDescription = "";
        break;
      case "/tenant-page-landlord-tab":
        title = "";
        metaDescription = "";
        break;
      case "/tenant-page-rent-tab":
        title = "";
        metaDescription = "";
        break;
      case "/frame-26086479":
        title = "";
        metaDescription = "";
        break;
      case "/login-page1":
        title = "";
        metaDescription = "";
        break;
      case "/landlord-page-tenant-tab":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route
        path="/landlord-page-property-tab"
        element={<LandlordPagePropertyTab />}
      />
      <Route path="/group-26086374" element={<Group />} />
      <Route
        path="/landlord-page-property-tab-add-edit-property"
        element={<LandlordPagePropertyTab1 />}
      />
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
      <Route path="/frame-26086479" element={<Frame />} />
      <Route path="/login-page1" element={<LoginPage1 />} />
      <Route
        path="/landlord-page-tenant-tab"
        element={<LandlordPageTenantTab />}
      />
    </Routes>
  );
}
export default App;
