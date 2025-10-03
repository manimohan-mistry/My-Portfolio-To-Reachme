import "./Footer.css";
import footerLogo from "../../assets/nav_underline.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div style={{display:"flex", flexDirection:"column", alignItems:"start"}}>
            <div className="mylogo">
              <h1 className="myheading">Mohan</h1>
              <img src={footerLogo} />
            </div>
          </div>
          <p>
            I am a Full Stack developer, I am looking for full time job roles or
            internship oppurtunity
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user image" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Join</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">All rights reserve @copyright</p>
        <div className="footer-bottom-right">
          <p>Terms of services</p>
          <p>Privacy & Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </div>
  );
};
export default Footer;
