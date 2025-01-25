import "./Footer.css";
import olx from "../../assets/olx-seeklogo.svg";
import carWale from "../../assets/carwale.svg";
import cartech from "../../assets/cartrade_tech.svg";
import bikeWale from "../../assets/bikewale.svg";
import cartrade from "../../assets/cartrade.svg";
import mobility from "../../assets/mobility.svg";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-sections">
        <div className="footer-section">
          <h3>POPULAR LOCATIONS</h3>
          <div className="footer-links">
            <div>Kolkata</div>
            <div>Mumbai</div>
            <div>Chennai</div>
            <div>Pune</div>
          </div>
        </div>

        <div className="footer-section">
          <h3>TRENDING LOCATIONS</h3>
          <div className="footer-links">
            <div>Bhubaneshwar</div>
            <div>Hyderabad</div>
            <div>Chandigarh</div>
            <div>Nashik</div>
          </div>
        </div>

        <div className="footer-section">
          <h3>ABOUT US</h3>
          <div className="footer-links">
            <div>Tech@OLX</div>
          </div>
        </div>

        <div className="footer-section">
          <h3>OLX</h3>
          <div className="footer-links">
            <div>Help</div>
            <div>Sitemap</div>
            <div>Legal & Privacy Information</div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="partner-logos">
        <img src={cartech} alt="CarTrade Tech" />
        <img src={olx} alt="OLX" />
        <img src={carWale} alt="CarWale" />
        <img src={bikeWale} alt="BikeWale" />
        <img src={cartrade} alt="CarTrade" />
        <img src={mobility} alt="Mobility Outlook" />
      </div>
      <div className="copyright">All rights reserved © 2006-2025 OLX</div>
    </div>
  </footer>
);

export default Footer;
