import React from "react";
import landingImage from "../assets/landing_WIP.png";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

const Home = () => {
  return (
    <main>
      <div className="container text-center mt-5">
        {/* Welcome Text */}
        <h1 className="display-4 mb-4">Welcome to the World's Greatest Fitness App!</h1>
        <p>Please Log in or Sign up and start your fitness Journey.</p>
        <div className="image-container">
          <img src={landingImage} alt="Landing Page" className="landing-image" />
        </div>

        <MDBContainer className="mt-5">
          <MDBRow>
            {/* App Usage Container */}
            <MDBCol>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>App Usage</MDBCardTitle>
                  <MDBCardText>
                    Welcome to Get-Fit, your ultimate fitness companion! 🏋️‍♂️✨ Get ready
                    to embark on a journey towards a healthier and happier you. Start by
                    creating your account to unlock a world of fitness possibilities. Set
                    personalized goals that align with your aspirations. Our intuitive
                    interface makes tracking your fitness progress a breeze – log your
                    activities and monitor your achievements. But that's not all! Explore our dynamic search
                    engine for a treasure trove of exercise routines tailored to your
                    preferences. Discover engaging workouts and helpful tips to keep your fitness routine exciting and effective. At Get-Fit,
                    we believe in making fitness fun, accessible, and personalized just for
                    you. Join our vibrant community of fitness enthusiasts, and let's crush
                    those goals together! 💪🌟 Welcome aboard!
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Fitness-For-All</MDBCardTitle>
                  <MDBCardText>
                    Our journey to create this app was born out of a collective passion for
                    promoting holistic well-being. As a team of dedicated individuals, we
                    understand the challenges that come with maintaining a healthy lifestyle
                    in today's fast-paced world. The vision for this app emerged from a
                    shared commitment to make fitness accessible, enjoyable, and tailored to
                    individual needs. In overcoming the hurdles of development, we've poured
                    our hearts into creating an application that not only tracks activities
                    and sets goals but also fosters a sense of community and motivation. Our
                    mission is to empower individuals to take charge of their health,
                    providing a platform that not only supports physical fitness but also
                    encourages mental and emotional well-being. Through the highs and lows of
                    development, our team has remained steadfast in the belief that this app
                    can be a catalyst for positive change in the lives of many. We invite you
                    to join us on this exciting journey towards a healthier, happier, and
                    more vibrant you. Together, let's make wellness a way of life! 🌟💚
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </main>
  );
};

export default Home;
