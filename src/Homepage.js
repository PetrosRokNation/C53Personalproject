import React, { Component } from 'react';
//import logo from './logo.svg';
import moneyLogo from './bitcoin.png';
import './Homepage.css';
import Routes from './Routes';
const aboutUs = {
  marginTop: 30
}
class Homepage extends Component {
  //THIS SHOULD BE THE FOOTER, THIS PAGE IS ATTACHED TO ALL PAGES
  render() {
    return (
      <div className="App">
        {/* Change the header into something related to money */}
        <header className="App-header">
          <img src={moneyLogo} className="App-logo" alt="moneyLogo" />
          {/* <h1 className="App-title">"Build a wealth snowball!"</h1> */}
          <h1 className="App-title">Petros Rock National</h1>
        </header>
        <Routes />
        <hr/>
        <div className="container row">
          <div className="aboutUs col-md-5 offset-3" style={aboutUs}>
            <p className="">This is section footer .</p>
            <br/>
            <br/>
            <br/>
            <br/>
            SHARE IT on FACEBOOK, INSTAGRAM, LINKEDIN, GOOGLE will go here. This is the footer Section
          </div>
          <div className="col-md-3" style={aboutUs}>
            <img src="https://www.orbitmedia.com/wp-content/uploads/2015/11/calltoaction.png" alt="Footer" />
          </div>
        </div>
        <div>
          ABOUT ME Link to my. This is the footer Section.
        </div>
        <div>
          FOOTER with Links to FAQ etc. This is the footer section.
        </div>
      </div>
    );
  }
}

export default Homepage;
