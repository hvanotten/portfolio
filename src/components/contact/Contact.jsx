import "./contact.css";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import { SocialIcon } from 'react-social-icons';


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
      emailjs.sendForm(
          'service_5zc3eaa',
          'template_apavsu5',
          formRef.current,
          'user_CgVZO8SnQs9vaUeejbmUJ'
      )
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };


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
          method='POST'
          name='contactForm'
          className='contactForm'>

          <input
            type='text'
            name='name'
            placeholder='Enter your name' />

          <input
            type='email'
            name='email'
            placeholder='Enter your email' />

          <textarea
            name='message'
            placeholder='Message'></textarea>

          <button type='submit'>Submit</button>

           </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;