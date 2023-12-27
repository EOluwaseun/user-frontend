import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './Component/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/OurStore';
import Blog from './pages/Blog';
import Compare from './pages/Compare';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsAndCondition from './pages/TermsAndCondition';
import ShippingPolicy from './pages/ShippingPolicy';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<Store />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="compare" element={<Compare />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shopping-policy" element={<ShippingPolicy />} />
            <Route path="terms-condition" element={<TermsAndCondition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
