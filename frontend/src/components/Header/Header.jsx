import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SearchIcon, HeartIcon, PlusIcon } from "../../components/Icons/Icons";
import "./Header.css";

const Header = () => {
  const { loginState, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (loginState) {
      logout();
      localStorage.clear();
      sessionStorage.clear();
    } else {
      navigate("/login");
    }
  };

  const handleSellClick = () => {
    if (!loginState) {
      navigate("/login");
    } else {
      navigate("/add-advertisement");
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
        <span className="search-icon">
          <SearchIcon />
        </span>
      </div>
      <div className="nav-right">
        <button className="icon-button">
          <HeartIcon />
        </button>
        <button className="login-button" onClick={handleAuthAction}>
          {loginState ? "Logout" : "Login"}
        </button>
        <button className="sell-button" onClick={handleSellClick}>
          <PlusIcon />
          <span>SELL</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
