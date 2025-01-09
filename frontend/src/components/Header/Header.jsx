import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; // Adjust the path as per your file structure
import {
  SearchIcon,
  HeartIcon,
  PlusIcon
} from '../../components/Icons/Icons';
import './Header.css';

const Header = () => {
  const { loginState, logout, login } = useContext(AuthContext); // Access loginState and logout from context
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (loginState) {
      logout();
      localStorage.clear();
      sessionStorage.clear();
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <div className="logo">OLX</div>
        </Link>
        <div className="location-selector">
          <select>
            <option>India</option>
          </select>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="" />
        <span className="search-icon"><SearchIcon /></span>
      </div>
      <div className="nav-right">
        <button className="icon-button"><HeartIcon /></button>
        <button className="login-button" onClick={handleAuthAction}>
          {loginState ? 'Logout' : 'Login'}
        </button>
        {loginState && (
          <Link to="/add-advertisement">
            <button className="sell-button">
              <PlusIcon />
              <span>SELL</span>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
