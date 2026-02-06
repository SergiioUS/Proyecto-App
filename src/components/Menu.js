import React, { useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/Menu.css';

function Menu({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const desserts = [
    {
      id: 1,
      name: 'Producto1',
      price: 5990,
      description: 'Nada',
      image: '',
      flavors: ['Nada', 'Nada']
    },
    {
      id: 2,
      name: 'Producto1',
      price: 7990,
      description: 'descripcion producto',
      image: '',
      flavors: ['Nada', 'Nada']
    },
    {
      id: 3,
      name: 'Producto1',
      price: 8990,
      description: 'descripcion producto',
      image: '',
      flavors: ['Nada', 'Nada', 'Nada', 'Nada']
    },
    {
      id: 4,
      name: 'Producto1',
      price: 6990,
      description: 'descripcion producto',
      image: '',
      flavors: [' Nada', ' Nada', ' Nada']
    },
    {
      id: 5,
      name: 'Producto1',
      price: 5490,
      description: 'descripcion producto',
      image: '',
      flavors: ['Nada', 'Nada', 'Nada']
    },
    {
      id: 6,
      name: 'Producto1',
      price: 4990,
      description: 'descripcion producto',
      image: '',
      flavors: ['Nada', 'Nada', 'Nada']
    },
    {
      id: 7,
      name: 'Producto1',
      price: 6490,
      description: 'descripcion producto',
      image: '',
      flavors: ['Nada', 'Nada', 'Nada', 'Nada', 'Nada']
    },
    {
      id: 8,
      name: 'Producto1',
      price: 7490,
      description: 'descripcion producto',
      image: '',
      flavors: ['Nada', 'Nada']
    },
    {
      id: 9,
      name: 'Producto1',
      price: 4990,
      description: 'descripcion producto',
      image: '',
      flavors: ['Nada', 'Nada', 'Nada', 'Nada']
    },
    {
      id: 10,
      name: 'Producto1',
      price: 5990,
      description: 'descripcion producto',
      image: '',
      flavors: ['Nada', 'Nada', 'Nada']
    },
    {
      id: 11,
      name: 'Producto1',
      price: 3990,
      description: 'descripcion producto',
      image: '',
      flavors: ['Nada', 'Nada', 'Nada']
    },
    {
      id: 12,
      name: 'Producto1',
      price: 8490,
      description: 'descripcion producto',
      image: '',
      flavors: ['Nada', 'Nada', 'Nada']
    }
  ];

  const sauces = ['Salsa 1', 'Salsa 1', ' Salsa 1', 'Salsa 1'];

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
      <h2>Postres</h2>
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
