import React from 'react';
import landingImage from '../assets/landing_WIP.png'; // Adjust the path as necessary

const Home = () => {
  return (
    <main>
      <div className="container text-center mt-5">
        <div className="image-container">
          <img src={landingImage} alt="Landing Page" className="landing-image" />
        </div>
        <p className="lead">
          This is your all-in-one solution for tracking fitness activities and
          achieving your health goals. Whether you're a seasoned athlete or
          just starting your fitness journey, our app is designed to help you
          monitor your progress, set personalized fitness objectives, and stay
          motivated every step of the way. Get ready to embark on a
          transformative experience towards a healthier and fitter you!
        </p>
      </div>
    </main>
  );
};

export default Home;
