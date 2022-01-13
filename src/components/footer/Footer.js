// footer with background image
import locationIcon from "../../img/locationIcon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-41" id="footer">
      <div className="group-19">
        <img className="icon" src={locationIcon} alt="location pointer" />
        <div className="address">
          <div className="wisconsin-ave-suite valign-text-middle">
            Switzerland. Singapore. Mauritus
          </div>
        </div>
      </div>
      <hr className="line-44" />
      <div className="copyright">
        <p className="x2021-all-rights-reserved valign-text-middle">
          © 2021 Shenstone Drive Ventures Pte. Lts. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
