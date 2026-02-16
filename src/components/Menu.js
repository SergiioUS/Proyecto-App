import React, { useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/Menu.css';

function Menu({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const desserts = [
    {
      id: 1,
      name: 'Torta Chocolate Oscuro',
      price: 20.000,
      description: 'Torta de chocolate oscuro ganache con corazón de chocolate suave',
        image: '/images/desserts/1.jpg',
      flavors: ['Oscuro 70%', 'Extra Oscuro', 'Con Frambuesa']
    },
    {
      id: 2,
      name: 'Cheesecake NY',
      price: 12.000,
      description: 'Auténtico cheesecake de Nueva York con base de galleta crunch',
        image: '/images/desserts/2.jpg',
      flavors: ['Nature', 'Fresa', 'Arándano', 'Limón']
    },
    {
      id: 3,
      name: 'Tiramisu Italiano',
      price: 16.000,
      description: 'Tiramisu auténtico con mascarpone cremoso y cacao',
      image: '/images/desserts/3.jpg',
      flavors: ['Clásico', 'Con Café', 'Con Limoncello']
    },
    {
      id: 4,
      name: 'Brownies Calientes',
      price: 20.000,
      description: 'Brownie de chocolate con centro derretido y nueces',
      image: '/images/desserts/4.jpg',
      flavors: ['Original', 'Con Nueces', 'Con Caramelo']
    },
    {
      id: 5,
      name: 'Frambuesero',
      price: 10.000,
      description: 'Postre con frambuesas frescas, mousse y biscocho',
      image: '/images/desserts/5.jpg',
      flavors: ['Frambuesa', 'Frambuesa-Chocolate', 'Frambuesa-Blanco']
    },
    {
      id: 6,
      name: 'Flan Casero',
      price: 8.000,
      description: 'Flan tradicional con caramelo tostado y crema suave',
      image: '/images/desserts/6.jpg',
      flavors: ['Nature', 'Vainilla', 'Dulce de Leche']
    },
    {
      id: 7,
      name: 'Pavlova Merengue',
      price: 14.000,
      description: 'Merengue crujiente con frutas frescas y crema batida',
      image: '/images/desserts/7.jpg',
      flavors: ['Mixto Frutas', 'Fresa', 'Frambuesa', 'Moras']
    },
    {
      id: 8,
      name: 'Mousse Chocolate Blanco',
      price: 16.000,
      description: 'Mousse ligero de chocolate blanco con ganache',
      image: '/images/desserts/8.jpg',
      flavors: ['Blanco Puro', 'Blanco-Frambuesa', 'Blanco-Pistacho']
    },
    {
      id: 9,
      name: 'Pannetone Artesanal',
      price: 19.000,
      description: 'Pannetone casero con frutas confitadas y pasas de calidad',
      image: '/images/desserts/9.jpg',
      flavors: ['Tradicional', 'Con Chocolate', 'Con Nueces']
    },
    {
      id: 10,
      name: 'Macarons Franceses',
      price: 11.000,
      description: 'Macarons artesanales de importación con sabores variados',
      image: '/images/desserts/10.jpg',
      flavors: ['Frambuesa', 'Pistacho', 'Chocolate', 'Vainilla']
    },
    {
      id: 11,
      name: 'Helado Gourmet',
      price: 13.000,
      description: 'Helado artesanal con ingredientes naturales y frutas frescas',
      image: '/images/desserts/11.jpg',
      flavors: ['Vainilla Madagascar', 'Chocolate Belga', 'Fresa', 'Pistacho']
    },
    {
      id: 12,
      name: 'Tarta Manzana Canela',
      price: 8.000,
      description: 'Tarta de manzana con crema pastelera y canela',
      image: '/images/desserts/12.jpg',
      flavors: ['Manzana Verde', 'Manzana Roja', 'Con Caramelo']
    }
  ];

  const sauces = ['Caramelo Caliente', 'Chocolate Derretido', 'Frutos Rojos', 'Mermelada'];

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
