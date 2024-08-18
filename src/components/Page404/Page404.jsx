import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.css';
import carImage from '../../assets/car404.png';

const Page404 = () => {
  return (
    <div className="page-404-container">
      <div className="error-code">404</div>
      <div className="error-message">PAGE NOT FOUND</div>
      <img src={carImage} alt="Electric car" className="car-image" />
      <div className="error-subtext">Page doesn't exist in this website</div>
      <Link to="/" className="home-link">Go Back to Home</Link>
    </div>
  );
};

export default Page404;