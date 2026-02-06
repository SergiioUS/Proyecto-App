import React, { useState } from 'react';
import '../styles/Checkout.css';
import formatCurrency from '../utils/formatCurrency';

function Checkout({ cartItems, userName, onOrderPlaced, onCancel }) {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    zipCode: '',
    phone: '',
    deliveryTime: 'asap'
  });

  const [step, setStep] = useState('address');

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 20000; // COP
  const finalTotal = total + shipping;

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateAddress = () => {
    if (!formData.address.trim() || !formData.city.trim() || !formData.zipCode.trim() || !formData.phone.trim()) {
      alert('Pon tu dirección');
      return false;
    }
    return true;
  };

  const handlePlaceOrder = () => {
    if (!validateAddress()) return;

    const orderData = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      userName,
      items: cartItems,
      address: formData.address,
      city: formData.city,
      zipCode: formData.zipCode,
      phone: formData.phone,
      deliveryTime: formData.deliveryTime,
      total: finalTotal,
      orderDate: new Date().toLocaleString('es-ES'),
      status: 'confirmado',
      estimatedDelivery: '30-45 minutos'
    };

    onOrderPlaced(orderData);
  };

  return (
    <div className="checkout-container">
      <h2>Finalizar Pedido ✅</h2>

      <div className="checkout-content">
        <div className="checkout-main">
          {step === 'address' && (
            <div className="address-section">
              <h3>📍 Dirección de Envío</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="address">Dirección *</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    placeholder="Calle y número"
                    value={formData.address}
                    onChange={handleAddressChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">Ciudad *</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      placeholder="Tu ciudad"
                      value={formData.city}
                      onChange={handleAddressChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">Código Postal *</label>
                    <input
                      id="zipCode"
                      type="text"
                      name="zipCode"
                      placeholder="Ej: 28001"
                      value={formData.zipCode}
                      onChange={handleAddressChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Teléfono *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+34 666 123 456"
                    value={formData.phone}
                    onChange={handleAddressChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="deliveryTime">Tiempo de entrega</label>
                  <select
                    id="deliveryTime"
                    name="deliveryTime"
                    value={formData.deliveryTime}
                    onChange={handleAddressChange}
                  >
                    <option value="asap">Lo antes posible (30-45 min)</option>
                    <option value="1hour">En 1 hora</option>
                    <option value="2hours">En 2 horas</option>
                  </select>
                </div>
              </form>
            </div>
          )}

          {step === 'payment' && (
            <div className="payment-section">
              <h3>💳 Método de Pago</h3>
              <div className="payment-methods">
                <div className="payment-method selected">
                  <input type="radio" name="payment" checked readOnly />
                  <label>Efectivo en la entrega</label>
                </div>
              </div>
              <p className="payment-info">
                ℹ️ Para esta demostración, el pago se procesa como efectivo en la entrega
              </p>
            </div>
          )}
        </div>

        <div className="checkout-summary">
          <h3>Resumen del Pedido</h3>
          <div className="summary-items">
            {cartItems.map((item, index) => (
              <div key={index} className="summary-item">
                <span>{item.image} {item.name} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="summary-totals">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <div className="summary-row">
              <span>Envío:</span>
              <span>{formatCurrency(shipping)}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total:</span>
              <span>{formatCurrency(finalTotal)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="checkout-actions">
        <button onClick={onCancel} className="btn-secondary">
          ← Volver
        </button>
        {step === 'address' && (
          <button onClick={() => setStep('payment')} className="btn-primary">
            Continuar →
          </button>
        )}
        {step === 'payment' && (
          <button onClick={handlePlaceOrder} className="btn-primary btn-large">
            Confirmar Pedido
          </button>
        )}
      </div>
    </div>
  );
}

export default Checkout;
