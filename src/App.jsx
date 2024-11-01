// Importing required components and libraries
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import PurchaseHistory from "./PurchaseHistory";
import AboutUS from "./AboutUS";
import ContactUS from "./ContactUS";

import './App.css';
import { useSelector } from "react-redux";

// Importing icons for visual enhancement
import { FaShoppingCart, FaHome, FaCarrot, FaHistory } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";
import SaveProduct from "./SaveProduct";
import { CiSaveDown1 } from "react-icons/ci";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";
import FacebookLoginComponent from "./FacebookLoginComponent";

// Main App component to set up routes and navigation
function App() {
  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
    <FacebookLoginComponent />
    <GoogleOAuthProvider clientId="648286190550-t7tft0dom2cedajdj3v789uks7jscdbn.apps.googleusercontent.com">
      <GoogleLoginComponent />
    </GoogleOAuthProvider>
    <BrowserRouter>
      <nav className="nav-container">
        <Link to="/" className="nav-link"><FaHome size={20} /> MyShop</Link>
        <Link to="/veg" className="nav-link"><FaCarrot size={20} /> Veg</Link>
        <Link to="/non-veg" className="nav-link"><GiChickenOven size={20} /> NonVeg</Link>
        <Link to="/cart" className="nav-link"><FaShoppingCart size={20} /> Cart ({totalQuantity})</Link>
        <Link to="/purchase-history" className="nav-link"><FaHistory size={20} /> PurchaseHistory</Link>
        <Link to="/save-product" className="nav-link"><CiSaveDown1 size={20} /> Save Product</Link>
        <Link to="/about-us" className="nav-link"><FcAbout size={20} /> About Us</Link>
        <Link to="/contact-us" className="nav-link"><IoIosContact size={20} /> Contact Us</Link>
        
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/non-veg" element={<NonVeg />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchase-history" element={<PurchaseHistory />} />
        <Route path="/save-product" element={<SaveProduct />} />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/contact-us" element={<ContactUS />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

// Exporting the App component for use in other parts of the application
export default App;
