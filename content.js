import React from 'react';

const landingPageContent = [
  {
    id: 1,
    heading: 'Welcome to the Future of Travel',
    paragraph:
      'Skyjet, the fastest growing private airline, provides passengers with luxurious experiences at unbeatable prices. Book now and fly like never before!',
  },
  {
    id: 2,
    heading: 'Your Destination is Our Passion',
    paragraph:
      'At Skyjet, we take pride in ensuring that every destination we serve is well researched and catered to. We want your trip to be nothing but exceptional.',
  },
  {
    id: 3,
    heading: 'Exceptional Customer Service',
    paragraph:
      'Our highly trained team is committed to providing you with exceptional customer service. They will guide you through every step of your journey, ensuring your needs are met.',
  },
];

const LandingPage = (id) => {

  return (

    <div className="landing-page">
      {landingPageContent.map((content) => (
        <div key={content.id} className="landing-page-content">
          <h2>{content.heading}</h2>
          <p>{content.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;