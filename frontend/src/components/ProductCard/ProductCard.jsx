import './ProductCard.css' 
import { Link } from 'react-router-dom';

const ProductCard = ({ image, price, title, location, date, productId }) => (
    <div className="product-card">
        <Link to={`/product/${productId}`} className="product-link">
          <div className="product-image">
            <img src={image} alt={title} />
          </div>
          <div className="product-info">
            <div className="price">₹ {price}</div>
            <div className="title">{title}</div>
            <div className="details">
              <span className="location">{location}</span>
              <span className="date">{date}</span>
            </div>
          </div>
        </Link>
    </div>
);

export default ProductCard;