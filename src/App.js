import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderStatus from './components/OrderStatus';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('menu');
  const [orderPlaced, setOrderPlaced] = useState(null);

  // Recuperar usuario del localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('foodDeliveryUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (username) => {
    setCurrentUser(username);
    localStorage.setItem('foodDeliveryUser', JSON.stringify(username));
    setCurrentPage('menu');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('foodDeliveryUser');
    localStorage.removeItem('cartItems');
    setCartItems([]);
    setOrderPlaced(null);
    setCurrentPage('menu');
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find(
      item => item.id === product.id && 
               JSON.stringify(item.options) === JSON.stringify(product.options)
    );

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item === existingItem
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const updateCartQuantity = (index, quantity) => {
    if (quantity <= 0) {
      removeFromCart(index);
    } else {
      setCartItems(cartItems.map((item, i) =>
        i === index ? { ...item, quantity } : item
      ));
    }
  };

  const handleOrderPlaced = (orderData) => {
    setOrderPlaced(orderData);
    setCartItems([]);
    setCurrentPage('status');
  };

  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🍰 DulceDelivery</h1>
        <div className="header-actions">
          <span className="user-name">Hola, {currentUser}!</span>
          <button onClick={handleLogout} className="logout-btn">Cerrar sesión</button>
        </div>
      </header>

      <nav className="app-nav">
        <button
          className={`nav-btn ${currentPage === 'menu' ? 'active' : ''}`}
          onClick={() => setCurrentPage('menu')}
        >
          📋 Menú
        </button>
        <button
          className={`nav-btn ${currentPage === 'cart' ? 'active' : ''}`}
          onClick={() => setCurrentPage('cart')}
        >
          🛒 Carrito ({cartItems.length})
        </button>
        <button
          className={`nav-btn ${currentPage === 'status' ? 'active' : ''}`}
          onClick={() => setCurrentPage('status')}
        >
          📍 Mi pedido
        </button>
      </nav>

      <main className="app-main">
        {currentPage === 'menu' && <Menu onAddToCart={addToCart} />}
        {currentPage === 'cart' && (
          cartItems.length > 0 ? (
            <Cart
              items={cartItems}
              onRemoveItem={removeFromCart}
              onUpdateQuantity={updateCartQuantity}
              onCheckout={() => setCurrentPage('checkout')}
            />
          ) : (
            <div className="empty-cart">
              <p>Tu carrito está vacío 🛒</p>
              <button onClick={() => setCurrentPage('menu')} className="btn-primary">
                Ir al menú
              </button>
            </div>
          )
        )}
        {currentPage === 'checkout' && (
          <Checkout
            cartItems={cartItems}
            userName={currentUser}
            onOrderPlaced={handleOrderPlaced}
            onCancel={() => setCurrentPage('cart')}
          />
        )}
        {currentPage === 'status' && orderPlaced && (
          <OrderStatus order={orderPlaced} />
        )}
      </main>
    </div>
  );
}

export default App;
