import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social Media Icons
import { BsFillEnvelopeFill } from "react-icons/bs"; // Email Icon

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Brand and Description Section */}
          <div className="col-md-3 mb-4">
            <h3 className="fw-bold text-uppercase">Your Hotel</h3>
            <p>
              Providing luxury rooms and exceptional service at unbeatable
              prices. Your perfect getaway starts here.
            </p>
            <div className="social-icons">
              <a href="#" className="text-white me-3" aria-label="Facebook">
                <FaFacebook size={30} />
              </a>
              <a href="#" className="text-white me-3" aria-label="Twitter">
                <FaTwitter size={30} />
              </a>
              <a href="#" className="text-white me-3" aria-label="Instagram">
                <FaInstagram size={30} />
              </a>
              <a href="#" className="text-white" aria-label="LinkedIn">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/rooms" className="text-white text-decoration-none">
                  Our Rooms
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white text-decoration-none">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>
              <BsFillEnvelopeFill /> Email:{" "}
              <a href="mailto:contact@yourhotel.com" className="text-white">
                contact@yourhotel.com
              </a>
            </p>
            <p>Phone: +91 123 456 7890</p>
            <p>Address: 123 Luxury St, Your City, India</p>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Subscribe to Our Newsletter</h5>
            <p>Stay updated with our latest offers and deals.</p>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Email Address"
                  required
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="row mt-4 text-center">
          <div className="col">
            <p>&copy; 2025 Your Hotel. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
