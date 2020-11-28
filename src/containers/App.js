import React, {Component} from 'react';
import './App.css';
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons.js";
import ProfileImage from "../components/Profile/ProfileImage.js";
import Gallery from "../components/Gallery/Gallery.js";
import Footer from "../components/Footer/Footer.js";
//stateless component

class App extends Component {
  render() {
    return(
      <div>
        <h1 className="tc">Haneyco.</h1>
        <div className="App">
          <SocialMediaIcons/>
          <ProfileImage/>
          <Gallery/>
          <Footer/>
        </div>
      </div>
      
    );
  }
}

export default App;
