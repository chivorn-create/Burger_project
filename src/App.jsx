import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../template/Nav';
import Home from '../template/Home';
import Burger from '../template/Burger';
import Drink from '../template/Drink';
import Footer from './Footter';
import CartPage from '../template/CartPage'; // ត្រូវ Import CartPage ចូល

function App() {
  const [cart, setCart] = useState([]);

  // មុខងារបន្ថែមទំនិញចូល Cart
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* បញ្ជូន cart ទៅឱ្យ Nav Component */}
        <Nav cart={cart} />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* បញ្ជូន addToCart ទៅឱ្យ Burger & Drink ដើម្បីឱ្យចុច Buy Now បាន */}
            <Route path="/burger" element={<Burger addToCart={addToCart} />} />
            <Route path="/drink" element={<Drink addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;