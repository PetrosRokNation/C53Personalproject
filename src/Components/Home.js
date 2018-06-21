import React from 'react';

const aboutUs = {
    marginTop: 30
  }
class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="container row">
                    <div className="aboutUs col-md-5 offset-3" style={aboutUs}>
                        <p className="">This is the homepage of Petros Rock National. This site will track the history of my pattern day trading since the beginning of my journey.
                        I will make inputs into the stocks that I have bought and sold with a history of my profit/loss. Through web scraping and other technologies,
                        I will have the stocks I am following with the prices of the stocks updated live. This site will also have news articles in support of the
                        trends happening with the stocks on my listing page. There will also be blogs page that covers the principles behind my philosphy into
                        building wealth.
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        SHARE IT on FACEBOOK, INSTAGRAM, LINKEDIN, GOOGLE will go here
                    </div>
                    <div className="col-md-3" style={aboutUs}>
                        <img src="https://jamesaltucher.com/wp-content/uploads/2012/03/Stock-Market-Guide.jpeg" alt="Stock Market Guide" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;