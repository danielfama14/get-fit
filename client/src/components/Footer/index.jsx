import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 100 pixels (adjust as needed)
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`w-100 m-auto bg-dark p-3 text-sm ${isScrolled ? 'hidden' : 'fixed-bottom'}`}>
      <div className="container text-center text-white mb-1">
        {/* {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )} */}
        <h4 className="text-sm">
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the fitness-for-all team:
        </h4>
        <div className="d-flex flex-row justify-content-center">
          {/* Render GitHub profiles here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
