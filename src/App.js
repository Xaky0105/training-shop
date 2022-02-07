import React from 'react';
import Header from './components/header/Header';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';
import Slider from './components/slider/Slider';
import Advantage from './components/advantage/Advantage';
import Blognewstop from './components/blognews-top/Blognewstop';
import Blognewsbot from './components/blognews-bot/Blognewsbot';
import Clothers from './components/clothes/Clothers'




function App() {
  return (
        <div className='main'>
          
            <Header />
            <Slider/>
            <Advantage />
            <Clothers />
            <Clothers />
            <Blognewstop />
            <Subscribe />
            <Blognewsbot />
            <Footer /> 
          
        </div>
  );
}

export default App;
