import React from 'react';
import AdvertisementSlider from "../Components/AdvertisementSlider.jsx";
import WhereToSearch from '../Components/WhereToSearch.jsx';
import Footer from '../Components/Footer.jsx'

const Home = () => {
  return (
    <>
      <AdvertisementSlider />
      <WhereToSearch />

      <Footer/>
     
    </>
  );
}

export default Home;