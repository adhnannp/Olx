import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './Home.css';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import loading_gif from "../../assets/loading.gif";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoadingGif, setShowLoadingGif] = useState(true);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          toast.error("Failed to fetch products.");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("An error occurred while fetching products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Ensure the loading GIF shows for at least 3 seconds
    setTimeout(() => {
      setShowLoadingGif(false);
    }, 1500);
  }, []);

  if (loading || showLoadingGif) {
    return (
      <div className="loading-screen">
        <img src={loading_gif} alt="Loading..." className="loading-gif" />
      </div>
    );
  }

  return (
    <>
      <ToastContainer theme="dark" />
      <div className="app">
        <Header />
        <main className="main-content">
          <h2>Fresh recommendations</h2>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                productId={product._id} //
                image={product.imageUrl} // Dynamically render image from backend
                price={product.price}
                title={product.title}
                location={product.location}
                date={product.date}
              />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
