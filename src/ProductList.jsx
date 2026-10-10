import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css'; // Optional styling file

function ProductList({ onCartClick, onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  // Track which items have been added to disable buttons
  const [addedToCart, setAddedToCart] = useState({});

  // Calculate total number of items for the cart icon badge
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://images.unsplash.com/photo-1598880940371-c756e015ba29?auto=format&fit=crop&w=400&q=80", cost: "$15", description: "Produces oxygen at night, purifying air." },
        { name: "Spider Plant", image: "https://images.unsplash.com/photo-1572688484438-313f0e421c64?auto=format&fit=crop&w=400&q=80", cost: "$12", description: "Great for beginners and pet friendly." },
        { name: "Peace Lily", image: "https://images.unsplash.com/photo-1593482892290-f54922e23dae?auto=format&fit=crop&w=400&q=80", cost: "$18", description: "Beautiful white blooms and excellent air cleaner." },
        { name: "Boston Fern", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80", cost: "$14", description: "Adds lush green foliage to indoor spaces." },
        { name: "Rubber Plant", image: "https://images.unsplash.com/photo-1596746462427-87445229342f?auto=format&fit=crop&w=400&q=80", cost: "$22", description: "Glossy, dark leaves that make a bold statement." },
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80", cost: "$10", description: "Succulent with soothing gel properties." }
      ]
    },
    {
      category: "Low Light Plants",
      plants: [
        { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207215624-777d9129d332?auto=format&fit=crop&w=400&q=80", cost: "$16", description: "Thrives in low light and requires minimal water." },
        { name: "Cast Iron Plant", image: "https://images.unsplash.com/photo-1620127682229-3b0883f360c4?auto=format&fit=crop&w=400&q=80", cost: "$20", description: "Virtually indestructible foliage plant." },
        { name: "Chinese Evergreen", image: "https://images.unsplash.com/photo-1604762524889-3e2fcc1266a3?auto=format&fit=crop&w=400&q=80", cost: "$15", description: "Colorful patterned leaves for shady spots." },
        { name: "Pothos", image: "https://images.unsplash.com/photo-1597055181300-4763666d6d29?auto=format&fit=crop&w=400&q=80", cost: "$11", description: "Trailing vine that adapts to low light easily." },
        { name: "Parlor Palm", image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=400&q=80", cost: "$17", description: "Classic small indoor palm tree." },
        { name: "Philodendron", image: "https://images.unsplash.com/photo-1615996001375-c7ef1329449b?auto=format&fit=crop&w=400&q=80", cost: "$13", description: "Heart-shaped leaves and easy care." }
      ]
    },
    {
      category: "Flowering Plants",
      plants: [
        { name: "African Violet", image: "https://images.unsplash.com/photo-1584589167171-541cef45f1fb?auto=format&fit=crop&w=400&q=80", cost: "$9", description: "Small plant with velvety purple flowers." },
        { name: "Bromeliad", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=400&q=80", cost: "$25", description: "Exotic tropical plant with vibrant center bracts." },
        { name: "Orchid", image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=400&q=80", cost: "$30", description: "Elegant blooms lasting several weeks." },
        { name: "Anthurium", image: "https://images.unsplash.com/photo-1588610344204-45373347c493?auto=format&fit=crop&w=400&q=80", cost: "$21", description: "Glossy heart-shaped red flowers." },
        { name: "Kalanchoe", image: "https://images.unsplash.com/photo-1541675154b51-3bc1b4e3347b?auto=format&fit=crop&w=400&q=80", cost: "$12", description: "Succulent with clusters of bright flowers." },
        { name: "Hibiscus", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=400&q=80", cost: "$24", description: "Large tropical blooms for sunny spots." }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prevState => ({ ...prevState, [plant.name]: true }));
  };

  return (
    <div className="product-list-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={onHomeClick} style={{ cursor: 'pointer' }}>
          <h2>Paradise Nursery</h2>
        </div>
        <div className="navbar-links">
          <button onClick={onHomeClick} className="nav-link-btn">Home</button>
          <button className="nav-link-btn active">Plants</button>
          <button onClick={onCartClick} className="cart-icon-btn">
            🛒 <span className="cart-badge">{totalCartCount}</span>
          </button>
        </div>
      </nav>

      {/* Catalog */}
      <div className="catalog-header">
        <h1>Our Houseplants Collection</h1>
      </div>

      {plantsArray.map((category, index) => (
        <div key={index} className="category-section">
          <h2>{category.category}</h2>
          <div className="plants-grid">
            {category.plants.map((plant, pIndex) => {
              const isAdded = addedToCart[plant.name] || cartItems.some(item => item.name === plant.name);
              return (
                <div key={pIndex} className="plant-card">
                  <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                  <h3>{plant.name}</h3>
                  <p className="plant-price">{plant.cost}</p>
                  <p className="plant-desc">{plant.description}</p>
                  <button 
                    className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={isAdded}
                  >
                    {isAdded ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
