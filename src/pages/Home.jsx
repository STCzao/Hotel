import React from "react";
import Hero from "../components/Hero/Hero";
import FeaturedDestination from "../components/FeaturedDestination/FeaturedDestination.jsx";
import ExclusiveOffers from "../components/ExclusiveOffers/ExclusiveOffers.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import NewsLetter from "../components/NewsLetter/NewsLetter.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonial />
      <NewsLetter />
    </div>
  );
};

export default Home;
