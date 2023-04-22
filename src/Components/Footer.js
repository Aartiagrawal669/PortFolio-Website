import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <>
      <footer className="footer">
          <div className="footer__container container">
             <div className="footer__social">
                <a href="/" className="footer__social-link" target='blank'>
                    <i class='bx bxl-gmail'></i>
                </a>
                <a href="/" className="footer__social-link" target='blank'>
                    <i class='bx bxl-github'></i> 
                </a>
                <a href="/" className="footer__social-link" target='blank'>
                    <i class='bx bxl-linkedin-square'></i>
                </a>
                <a href="/" className="footer__social-link" target='blank'>
                    <i className="bx bxl-instagram"></i>
                </a>
             </div>
          </div>
      </footer>
      </>
    </div>
  )
}

export default Footer;
