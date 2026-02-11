import React, { useState, useEffect } from 'react';
import '../styles/OrderStatus.css';
import formatCurrency from '../utils/formatCurrency';

function OrderStatus({ order }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { name: 'Confirmado', emoji: '', delay: 0 },
    { name: 'Preparando', emoji: '', delay: 2000 },
    { name: 'Listo', emoji: '', delay: 4000 },
    { name: 'En camino', emoji: '', delay: 6000 },
    { name: 'Entregado', emoji: '', delay: 8000 }
  ];

  useEffect(() => {
    const timers = steps.map((step, index) => {
      if (index === 0) {
        setCurrentStep(0);
        return null;
      }
      return setTimeout(() => setCurrentStep(index), step.delay);
    });

    return () => timers.forEach(timer => timer && clearTimeout(timer));
  }, []);

  return (
    <div className="order-status-container">
      <div className="order-header">
        <h2>Estado de tu Pedido 📍</h2>
        <p className="order-id">Pedido #{order.id}</p>
      </div>

      <div className="order-info-grid">
        <div className="info-card">
          <span className="info-label"> 📌Dirección</span>
          <p>{order.address}</p>
          <p>{order.city}, {order.zipCode}</p>
        </div>
        <div className="info-card">
          <span className="info-label">📞 Teléfono</span>
          <p>{order.phone}</p>
        </div>
        <div className="info-card">
          <span className="info-label"> 💰Total</span>
          <p className="price">{formatCurrency(order.total)}</p>
        </div>
        <div className="info-card">
          <span className="info-label">⏱️ Estimado</span>
          <p>{order.estimatedDelivery}</p>
        </div>
      </div>

      <div className="timeline">
        <h3>Progreso del Pedido</h3>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${index <= currentStep ? 'completed' : ''} ${
                index === currentStep ? 'current' : ''
              }`}
            >
              <div className="step-circle">{step.emoji}</div>
              <p className="step-name">{step.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="order-items">
        <h3>Artículos del Pedido</h3>
        <ul className="items-list">
          {order.items.map((item, index) => (
            <li key={index} className="order-item">
               <img className="item-emoji" src={item.image} alt={item.name} />
              <div className="item-info">
                <strong>{item.name}</strong>
                <small>Sabor: {item.options.flavor} | Salsa: {item.options.sauce}</small>
              </div>
              <div className="item-qty">x{item.quantity}</div>
              <span className="item-price">{formatCurrency(item.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="order-message">
        {currentStep < steps.length - 1 ? (
          <p> Tu pedido está en camino. ¡Gracias por tu compra!</p>
        ) : (
          <p>🎉 ¡Tu pedido ha sido entregado! Esperamos que disfrutes tus postres.</p>
        )}
      </div>

      <div className="order-timestamp">
        <small>Pedido realizado el: {order.orderDate}</small>
      </div>
    </div>
  );
}

export default OrderStatus;
