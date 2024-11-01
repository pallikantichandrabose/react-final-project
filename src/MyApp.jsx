// Importing necessary components and modules from react-router-dom and custom components
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import PurchaseHistory from "./PurchaseHistory";
import AboutUS from "./AboutUS";
import ContactUS from "./ContactUS";

// Main MyApp component to set up routing and navigation
function MyApp() {
  return (
    <>
      <BrowserRouter>
        {/* Navbar setup using Bootstrap classes */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* Logo or brand name with a Link to the homepage */}
            <Link className="navbar-brand" to="/">
              MyShop
            </Link>

            {/* Toggler button for mobile view to expand/collapse navbar */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible part of the navbar containing links to different pages */}
            <div className="collapse navbar-collapse" id="navbarNav">
              {/* Navbar items aligned to the right (ms-auto) */}
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/veg">
                    Veg
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/non-veg">
                    NonVeg
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/purchase-history">
                    Purchase History
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Defining routes for each component */}
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />
          
          {/* Veg products page route */}
          <Route path="/veg" element={<Veg />} />

          {/* NonVeg products page route */}
          <Route path="/non-veg" element={<NonVeg />} />

          {/* Cart page route */}
          <Route path="/cart" element={<Cart />} />

          {/* Purchase history page route */}
          <Route path="/purchase-history" element={<PurchaseHistory />} />

          {/* About Us page route */}
          <Route path="/about-us" element={<AboutUS />} />

          {/* Contact Us page route */}
          <Route path="/contact-us" element={<ContactUS />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Exporting MyApp component as the default export for usage in other files
export default MyApp;