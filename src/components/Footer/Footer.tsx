import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Car</h3>
          <p>Your trusted partner for quality vehicles nationwide.</p>
          <div className="social-icons">
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Inventory</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">New Cars</a></li>
            <li><a href="#">Used Cars</a></li>
            <li><a href="#">Financing</a></li>
            <li><a href="#">Car Insurance</a></li>
            <li><a href="#">Maintenance</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p><Mail size={16} /> email.com</p>
            <p><Phone size={16} /> 0098765321</p>
            <p><MapPin size={16} /> Location</p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;