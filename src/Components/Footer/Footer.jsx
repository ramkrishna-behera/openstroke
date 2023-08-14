import React from 'react';
import logo from "../../Assets/Logo/cleanos.svg";
import stripe from "../../Assets/Logo/stripe.svg"
import './style.css';


const Footer = () => {
  return (
    <div className='footer'>     
       <div className='content'>
            <div class="item">
                <img src={logo} alt="logo SVG" width="137.75" height="30" />
                <div className='description'>OpenStroke.io icons library is designed for millions of designers, developers, and content creators who care for attention to details. OpenStroke.io offering an quality 35,776 icons collection across 68 categories and having 4 unique styles including brand logos, and emojis. We are committed to expands our library.</div>
            </div>
            <div class="item end">
                <div className='box'>
                    <div class="column">
                        <span>Pricing</span> <br />
                        <span>FAQs</span> <br />
                        <span>Icon Request</span> <br />
                        <span>Report Icon</span> <br />
                        <span>Contact Us</span>
                    </div>
                </div>
                <div className='box'>
                    <div class="column">  
                        <span>Dribbble</span> <br />
                        <span>LinkedIn</span> <br />
                        <span>Twitter</span> <br />
                        <span>Terms of Use</span> <br />
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
       </div>
       <div className='seperator'>
            <div className='seperatorholder'>
                <div className='divider'>
                </div>
            </div>
       </div>
       <div className='company'>
            <div class="system start">© Sketchish Designer, Llp.</div>
            <div class="system center">Made with &#x2764;&#xFE0F; in India</div>
            <div class="system end"><img src={stripe} alt="Secure Payment Image" width="49" height="30"/><span>Secure payment with</span> </div>
       </div>
    </div>
  )
}

export default Footer;