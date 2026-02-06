import React from 'react';
import '../styles/Cart.css';
import formatCurrency from '../utils/formatCurrency';

function Cart({ items, onRemoveItem, onUpdateQuantity, onCheckout }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 20000; // valor por defecto en COP
  const finalTotal = total + shipping;

  return (
    <div className="cart-container">
      <h2>Tu Carrito </h2>
      
      <div className="cart-items">
        {items.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="item-info">
              <span className="item-emoji">{item.image}</span>
              <div className="item-details">
                <h4>{item.name}</h4>
                <p className="item-flavor">
                  Sabor: <strong>{item.options.flavor}</strong>
                </p>
                <p className="item-sauce">
                  Salsa: <strong>{item.options.sauce}</strong>
                </p>
                <p className="item-price">{formatCurrency(item.price)}</p>
              </div>
            </div>

            <div className="item-controls">
              <div className="quantity-control">
                <button
                  onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                  className="qty-btn"
                >
                  −
                </button>
                <span className="qty-display">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => onRemoveItem(index)}
                className="btn-remove"
              >
                Eliminar
              </button>
              <p className="subtotal">
                Subtotal: {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>{formatCurrency(total)}</span>
        </div>
        <div className="summary-row">
          <span>Envío:</span>
          <span>{formatCurrency(shipping)}</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>{formatCurrency(finalTotal)}</span>
        </div>
        <button onClick={onCheckout} className="btn-primary btn-large">
          Proceder al Pago
        </button>
      </div>
    </div>
  );
}

export default Cart;
