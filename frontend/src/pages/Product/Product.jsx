import React, { useState, useEffect } from 'react';
import './Product.css';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const ImageSlider = ({ image }) => {
  return (
    <div className="image-slider">
      <div className="main-image">
        <img src={image} alt="Product" />
      </div>
    </div>
  );
};

const Product = () => {
  const { id } = useParams();
  console.log(id)
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const [image,setImage] = useState('')
  // Fetch product data from backend API
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/product/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProductData(data);
        setImage(data.imageUrl)
      } catch (error) {
        setError(error.message);
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header />
    <div className="product-detail-container">
      <div className="product-content">
        <div className="left-section">
          <ImageSlider image={productData.imageUrl || image} />
        </div>
        <div className="right-section">
          <div className="price-section">
            <div className="price-header">
              <h1>₹ {productData.price}</h1>
              <div className="action-buttons">
                <button className="share-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                    <polyline points="16 6 12 2 8 6"/>
                    <line x1="12" y1="2" x2="12" y2="15"/>
                  </svg>
                </button>
                <button className="favorite-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>
            </div>
            <p className="product-title">
              {productData.title}
            </p>
            <div className="location-date">
              <span>{productData.location}</span>
            </div>
          </div>

          <div className="seller-section">
            <div className="seller-info">
              <div className="seller-details">
                <h3>{productData.sellerName || 'Unknown Seller'}</h3>
              </div>
              <button className="view-profile">❯</button>
            </div>
            <button className="chat-button">Chat with seller</button>
          </div>

          <div className="posted-section">
            <h3>Posted in</h3>
            <p>{productData.location}</p>
          </div>

          <div className="description-section">
            <h3>Description</h3>
            <p>{productData.description}</p>
          </div>

          <div className="ad-id">
            <p>AD ID {productData._id}</p>
            <button className="report-button">REPORT THIS AD</button>
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
  );
};

export default Product;
