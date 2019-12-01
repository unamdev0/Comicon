import React from 'react';
import Carousel from './components/carousel/index'
import Header from './components/headerFooter/header'
import './resources/styles.css'
function App() {
  return (
    <div className="App" style={{height:'1500px'}}>
     <Header/>
     <Carousel/>
    </div>
  );
}

export default App;
