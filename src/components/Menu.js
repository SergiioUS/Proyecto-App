import React, { useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/Menu.css';

function Menu({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const desserts = [
    {
      id: 1,
      name: 'Producto1',
      price: 5.99,
      description: 'Brownie de chocolate oscuro casero',
      image: '',
      flavors: ['Chocolate oscuro', 'Chocolate con leche']
    },
    {
      id: 2,
      name: 'Producto1',
      price: 7.99,
      description: 'descripcion producto',
      image: '',
      flavors: ['Tradicional', 'Con cacao extra']
    },
    {
      id: 3,
      name: 'Producto1',
      price: 8.99,
      description: 'descripcion producto',
      image: '',
      flavors: ['Original', 'Fresa', 'Frambuesa', 'Mango']
    },
    {
      id: 4,
      name: 'Producto1',
      price: 6.99,
      description: 'descripcion producto',
      image: '',
      flavors: ['Con azúcar', 'Con miel', 'Con chocolate']
    },
    {
      id: 5,
      name: 'Producto1',
      price: 5.49,
      description: 'descripcion producto',
      image: '',
      flavors: ['Chocolate oscuro', 'Chocolate blanco', 'Chocolate con menta']
    },
    {
      id: 6,
      name: 'Producto1',
      price: 4.99,
      description: 'descripcion producto',
      image: '',
      flavors: ['Clásico', 'Con vainilla', 'Con café']
    },
    {
      id: 7,
      name: 'Producto1',
      price: 6.49,
      description: 'descripcion producto',
      image: '',
      flavors: ['Vainilla', 'Chocolate', 'Fresa', 'Pistacho', 'Caramelo']
    },
    {
      id: 8,
      name: 'Producto1',
      price: 7.49,
      description: 'descripcion producto',
      image: '',
      flavors: ['Limón', 'Limón con merengue']
    },
    {
      id: 9,
      name: 'Producto1',
      price: 4.99,
      description: 'descripcion producto',
      image: '',
      flavors: ['Azúcar', 'Chocolate', 'Fresa', 'Vainilla']
    },
    {
      id: 10,
      name: 'Producto1',
      price: 5.99,
      description: 'descripcion producto',
      image: '',
      flavors: ['Café clásico', 'Café caramelo', 'Café vainilla']
    },
    {
      id: 11,
      name: 'Producto1',
      price: 3.99,
      description: 'descripcion producto',
      image: '',
      flavors: ['Frutas', 'Chocolate', 'Neutral']
    },
    {
      id: 12,
      name: 'Producto1',
      price: 8.49,
      description: 'descripcion producto',
      image: '',
      flavors: ['Berries', 'Frutas tropicales', 'Frutas del bosque']
    }
  ];

  const sauces = ['Chocolate derretido', 'Caramelo', 'Frutos rojos', 'Caramelo salado'];

  const handleAddToCart = (flavor, sauce) => {
    if (selectedProduct) {
      onAddToCart({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        image: selectedProduct.image,
        options: {
          flavor,
          sauce
        }
      });
      setSelectedProduct(null);
    }
  };

  return (
    <div className="menu-container">
      <h2>Nuestros Postres 🍪</h2>
      <div className="menu-grid">
        {desserts.map(dessert => (
          <ProductCard
            key={dessert.id}
            product={dessert}
            sauces={sauces}
            onSelectProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
            isSelected={selectedProduct?.id === dessert.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
