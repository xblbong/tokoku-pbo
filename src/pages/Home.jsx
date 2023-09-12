import React from 'react'
import Header from '../components/layouts/Header/Header'
import Footer from '../components/layouts/Footer/Footer'
import Banner from '../components/Banner/Banner'
import SwiperComponent from '../components/Swiper/Swiper'

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <SwiperComponent />
      <div className="border-2 border-[#DEDEDEEE] border-top">
        
      </div>
      <Footer />
    </div>
  );
}

export default Home
