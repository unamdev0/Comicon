import React from 'react';
import Carousel from './components/carousel/index'
import Header from './components/headerFooter/header'
import Info from './components/info/index'
import Hightlight from './components/highlights/index'
import Pricing from './components/pricing';
import Location from './components/location/index'
import Footer from './components/headerFooter/footer'
import './resources/styles.css'

function App() {
  return (
    <div className="App" style={{height:'1500px'}}>
     <Header/>
     <Carousel/>
     <Info/>
     <Hightlight/>
     <Pricing/>
     <Location/>
     <Footer/>
    </div>
  );
}

export default App;
