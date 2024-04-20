import React from 'react';
import './NavigationStyle/Footer.css';
import message from './NavigationStyle/message.png';
import phone from './NavigationStyle/phone.png';
import location from './NavigationStyle/location.png';
import email from './NavigationStyle/email.png';

const Footer = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "41f4a1b4-b94c-4535-a26e-61d1f11a932d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your Message Submited Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    };

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <h3>Send Us a Message 
                        <img src={message} alt="" />
                    </h3>
                    <p className='footer-q'>Questions? Assistance needed? 
                        <br />Contact Health Harbor! Reach our friendly support team via email at support@healthharbor.com or through our website's contact form. Your satisfaction is our priority. Let's keep you on the path to wellness together!</p>

                    <ul>
                        <li>
                            <img src={email} alt="" />
                            support@healthharbor.com
                        </li>
                        <li>
                            <img src={phone} alt="" />
                            011 234 5678
                        </li>
                        <li>
                            <img src={location} alt="" />    
                            No 10 <br />
                            Park Street <br />
                            Colombo 02 <br />
                            Sri Lanka
                        </li>
                    </ul>
                </div>
                <div className="footer-right">
                    <form onSubmit={onSubmit  }>
                        <label>Your Name</label>
                        <input type="text" name='name' placeholder="Enter your name" required/>

                        <label>Your Email</label>
                        <input type="email" name='email' placeholder="Enter your Email Address" required/>

                        <label>Write Your Message Here</label>
                        <textarea name="message" rows="6" placeholder="Write your message here" required></textarea>

                        <button type="submit" className='submit-btn'>Send Message</button>
                    </form>

                    <span>{result}</span>
                </div>

            </div>

            <hr />

            <div className="footer-bottom">
                <p  className='footer-q'>&copy; 2024 Health Harbor. All Rights Reserved.</p>
                <ul>
                    <li>Terms of Services</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;