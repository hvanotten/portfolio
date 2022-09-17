import "./contact.css";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext,} from "react";

import { ThemeContext } from "../../context";

import { SocialIcon } from 'react-social-icons';


const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-social">
              <SocialIcon url="https://www.linkedin.com/in/hillary-v-804438114/" label="LinkedIn"  />
            </div>
            <div className="c-social">
              <SocialIcon url="https://github.com/hvanotten" label="github" />
            </div>
            <div className="c-social">
              <SocialIcon url="https://twitter.com/VanCodes1" label="twitter" />
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="email" />
              contact@vancodes.dev
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="address" />
               Bend, Oregon USA 97701
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc-title">
            <b>Let's Collaborate!</b>
          </p>
          <p className="c-desc">
            I believe your website should celebrate what makes your business unique connect you with new people who will love what you do, and foster stronger relationships with your current customers.
            I'd love to hear about your project.
          </p>

          <form
      name="contact v2"
      method="post"
      data-netlify="true"
      onSubmit="submit"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact v4" />

      <div hidden>
        <input name="bot-field" />
      </div>

      <div>
        <label style={{backgroundColor: darkMode && "#333"}} > Name<br />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" name="first-name" />
        </label>
      </div>

      <div>
        <label  style={{backgroundColor: darkMode && "#333"}}  htmlFor="email" >Email</label><br />
        <input style={{backgroundColor: darkMode && "#333"}} id="email" type="email" name="email" />
      </div>

      <div>
        <label style={{backgroundColor: darkMode && "#333"}} > Message: <br />
          <textarea style={{backgroundColor: darkMode && "#333"}}  name="comments"></textarea>
        </label>
      </div>

      <button type="submit">Send Message</button>

    </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;