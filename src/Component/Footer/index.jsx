import React from "react";
import "./style.scss";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-container" id="footer">
        <div className="background-footer active"></div>
        <div className="container-flex">
          <div className="start-project-container active">
            <div className="title">Get the sweet scoop</div>
            <p>
              Sign up to receive exclusive offers and be the first to know about
              seasonal specials, brand new treats, events and more!
            </p>
            <div className="text-btn">
              <input type="text" className="btn active" />
              <button className="btn-signup">SignUp</button>
            </div>
          </div>

          <div className="footer-details active">
            <div className="motto">
              Have feedback about our products or service? Please contact Susie
              directly at: cafeplum@dummymail.com
            </div>
            <div className="hero-socials active">
              <Link to="https://fb.com/delliorra" target="_blank">
                <BsFacebook />
              </Link>
              <Link to="https://t.me/jowzu" target="_blank">
                <AiFillTwitterCircle />
              </Link>
              <Link to="https://github.com/jozu2" target="_blank">
                <FaTiktok />
              </Link>
              <Link
                to="https://www.linkedin.com/in/joshua-melendres-155814264/"
                target="_blank"
              >
                <AiOutlineInstagram />
              </Link>
            </div>
            <div className="email">Contact: webdevjozu@gmail.com</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
