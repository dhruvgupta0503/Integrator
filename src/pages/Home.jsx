import React from 'react';
// import AdvertisementSlider from "../Components/AdvertisementSlider.jsx";
import Hero from '../Components/Hero.jsx';
import WhereToSearch from '../Components/WhereToSearch.jsx';
import Footer from '../Components/Footer.jsx'
import Services from '../Components/Services.jsx';
import Download from '../Components/Download.jsx';

const Home = () => {
  return (
    <>
      {/* <AdvertisementSlider /> */}
      <Hero />
      <Services />
      <WhereToSearch />
      <Download />
      <Footer />
    </>
  );
}

export default Home;