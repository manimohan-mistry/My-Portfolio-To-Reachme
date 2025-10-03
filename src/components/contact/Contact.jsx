import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import locationIcon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import emails from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emails
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message sent successfully");
      })
      .catch((err) => {
        alert(`Something went wrong ${err.text}`);
      });
    e.target.reset();
  }

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I’m a Full Stack Developer currently open to opportunities.
            Actively seeking internship or job roles in full stack development,
            web applications, Frontend Developement And Backend Developement
          </p>
          <div className="contact-details">
            <div className="contack-detail">
              <img src={mail_icon} alt="" />
              <p>mohanmistry666@gmail.com</p>
            </div>
            <div className="contack-detail">
              <img src={call_icon} alt="" />
              <p>8080330928</p>
            </div>
            <div className="contack-detail">
              <img src={locationIcon} alt="" />
              <p>Nagpur, Maharashtra-441501</p>
            </div>
          </div>
        </div>
        <div>
          <form className="contact-right" onSubmit={sendEmail}>
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <label htmlFor="">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
