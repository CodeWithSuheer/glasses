import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userSessionAsync } from "./features/authSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/home/HomePage";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/cart/Cart";
import NotFound from "./components/NotFound";
import Checkout from "./pages/checkout/Checkout";
import MyOrders from "./pages/order/MyOrders";
import Shop from "./pages/shop/Shop";
import SelectedItem from "./pages/selectedItem/SelectedItem";
import UserProfile from "./pages/userProfile/UserProfile";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgetPass from "./auth/ForgetPass";
import OtpChecker from "./auth/OtpChecker";
import ResetPass from "./auth/ResetPass";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import Blogs from "./pages/blog/Blogs";
import { FaArrowUp } from "react-icons/fa6";

function App() {
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(userSessionAsync());
  });

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          {/* ---------- MAIN ROUTES ---------- */}
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/selectedItem/:id" element={<SelectedItem />} />

          {/* ---------- AUTH ROUTES ---------- */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget" element={<ForgetPass />} />
          <Route path="/otp/:id" element={<OtpChecker />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/reset/:id/:value" element={<ResetPass />} />

          {/* ---------- OTHER ROUTES ---------- */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs/:id" element={<Blogs />} />
        </Routes>

        {showButton && (
          <button
            onClick={handleTop}
            className="moveTop rounded-full px-3 py-3 bg-[#252525]"
          >
            <FaArrowUp size={21} className="text-white" />
          </button>
        )}

        <Footer />
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
