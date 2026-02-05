import React, { useState } from 'react';
import '../styles/ProductCard.css';

function ProductCard({ product, sauces, onSelectProduct, onAddToCart, isSelected }) {
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0]);
  const [selectedSauce, setSelectedSauce] = useState(sauces[0]);

  const handleAdd = () => {
    onAddToCart(selectedFlavor, selectedSauce);
    setSelectedFlavor(product.flavors[0]);
    setSelectedSauce(sauces[0]);
  };

  return (
    <div className={`product-card ${isSelected ? 'expanded' : ''}`}>
      <div className="product-emoji">{product.image}</div>
      <h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>

      {isSelected && (
        <div className="product-options">
          <div className="option-group">
            <label>Sabor:</label>
            <select
              value={selectedFlavor}
              onChange={(e) => setSelectedFlavor(e.target.value)}
            >
              {product.flavors.map(flavor => (
                <option key={flavor} value={flavor}>{flavor}</option>
              ))}
            </select>
          </div>

          <div className="option-group">
            <label>Salsa:</label>
            <select
              value={selectedSauce}
              onChange={(e) => setSelectedSauce(e.target.value)}
            >
              {sauces.map(sauce => (
                <option key={sauce} value={sauce}>{sauce}</option>
              ))}
            </select>
          </div>

          <button onClick={handleAdd} className="btn-primary btn-add">
            Agregar al carrito
          </button>
          <button
            onClick={() => onSelectProduct(null)}
            className="btn-secondary btn-close"
          >
            Cerrar
          </button>
        </div>
      )}

      {!isSelected && (
        <button
          onClick={() => onSelectProduct(product)}
          className="btn-primary btn-select"
        >
          Seleccionar
        </button>
      )}
    </div>
  );
}

export default ProductCard;
