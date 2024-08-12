import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Picture from './image-hero-desktop.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <div className="content">
          <h1>Make remote work</h1>
          <p>Get your team in sync, no matter your location. <br></br>and watch productivity soar.</p>
          <button className="learn-more">Learn more</button>
        </div>
        <div className="MyPic">
          <img src={Picture} alt="Remote work" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
