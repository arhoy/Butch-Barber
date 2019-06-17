import React from 'react';
import { Link } from 'react-router-dom';
import Button from "components/CustomButtons/Button.jsx";
import PropTypes from 'prop-types';
const Footer = ({backgroundColor}) => {
  return (
    <div className = "Footer" style = {{backgroundColor}}>
        <div>
            <Link className = "Footer__link Footer__link-primary" to = '/'> Butch Barbershop </Link>
        </div>
        <div>
        <ul className = "Footer__ul">
            <li className = "Footer__li">
              <Button
                href="https://twitter.com/"
                color="twitter"
                justIcon
                simple
              >
                <i className="fab fa-twitter Footer__i" />
              </Button>
            </li>
            <li className = "Footer__li">
              <Button
                href="https://instagram.com/"
                color="instagram"
                justIcon
                simple
              >
                <i className="fab fa-instagram Footer__i" />
              </Button>
            </li>
              <li className = "Footer__li">
              <Button
                href="https://facebook.com/"
                color="facebook"
                justIcon
                simple
                className = "Footer__button"
              >
                <i className="fab fa-facebook Footer__i" />
              </Button>
            </li>
          </ul>
        </div>
    </div>
   
  

  );
};

Footer.propTypes = {
  backgroundColor: PropTypes.string
};

Footer.defaultProps = {
  backgroundColor: 'white'
}

export default Footer;