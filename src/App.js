import React from 'react';
import wingFingLogo from './components/assets/logo.png';
import playStore from './components/assets/playstore.png';
import appStore from './components/assets/appstore.png';

import img1 from './components/assets/screenshots/1.jpg'
import img2 from './components/assets/screenshots/2.jpg'
import img3 from './components/assets/screenshots/3.jpg'
import img4 from './components/assets/screenshots/4.jpg'
import img5 from './components/assets/screenshots/5.jpg'
import img6 from './components/assets/screenshots/6.jpg'
import img7 from './components/assets/screenshots/7.jpg'
import img8 from './components/assets/screenshots/8.jpg'
import './App.css';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: img1 },
  { url: img2 },
  { url: img3 },
  { url: img4 },
  { url:  img5 },
  { url: img6 },
  { url: img7 },
];


function App() {
  return (
    <div className="container">
      <header>
        <img src={wingFingLogo} className='logoImage' alt="App icon" />
        <h1>Wingfling</h1>
        <p>Convert your dating chats into actual dates</p>

        <div className="download">
            <a href="#">
              <img src={appStore} alt="Download on the App Store" />
            </a>
            <a href="#">
              <img src={playStore} alt="Get it on Google Play" />
            </a>
        </div>
        <div className="imageSlider">
            <SimpleImageSlider
              width={360}
              height={740}
              images={images}
              showBullets={true}
              showNavs={true}
            />
          </div>
      </header>
      {/* <footer>
        
      </footer> */}
    </div>
  );
}

export default App;
