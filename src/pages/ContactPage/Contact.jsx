import "./style.css";
import { contactSvg } from "../../svg/contactSvg";

export default function Contacts() {
  const emailLink = `mailto:oooNikita87@gmail.com`;

  const mapLink = `https://www.google.com/maps/place/Tokyo`;

  return (
    <section id="contacts-screen" aria-labelledby="contact-title">
      <div className="contacts-wrapper">
        <div className="contacts-welcome">
          <p className="section-label">CONTACT</p>
          <h2 id="contact-title">Let’s discuss your next project</h2>
        </div>

        <div className="contact-info-wrapper">
          <div className="contacts-object">
            <span className="contacts-svg" aria-hidden="true">
              {contactSvg(40).mapSvg}
            </span>
            <div className="contacts-des">
              <p>Location</p>
              <a href={mapLink} target="_blank" rel="noreferrer">
                Tokyo, Japan
              </a>
            </div>
          </div>

          <div className="contacts-object">
            <span className="contacts-svg" aria-hidden="true">
              {contactSvg(40).emailSvg}
            </span>
            <div className="contacts-des">
              <p>Email</p>
              <a href={emailLink}>oooNikita87@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
