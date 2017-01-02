import React from 'react';

export default class Footer extends React.Component{

  render(){
    const style = {
      display: "fixed",
      backgroundColor: "rgb(134,134,134)",
      height: "20vh",
      bottom: "0",
    }

    const footContainer = {
      display: "flex",
      justifyContent:"flex-start"
    }

    const footColumn = {
      width: "25%"
    }

    return (
      <div style={style}>
        <div style={footContainer}>
          <div style={footColumn} className="foot">
            <Foot />
          </div>
          <div style={footColumn} className="links">
            <Links />
          </div>
          <div style={footColumn} className="company">
            <Company />
          </div>
          <div style={footColumn} className="social">
            <Social />
          </div>
        </div>
      </div>
    )
  }
}

const Foot = () => (
  <div>
    <a href="#" className="nav-item is-brand">
      WeatherVain
    </a>
  </div>
)

const Links = () => (
  <div>
    <h1>Links</h1>
    <ul>
      <li>How It Works</li>
      <li>Inspiration</li>
      <li>About Us</li>
      <li>My Account</li>
    </ul>
  </div>
)

const Company = () => (
  <div>
    <h1>Company</h1>
    <ul>
      <li>Contact</li>
      <li>Careers</li>
    </ul>
  </div>
)

const icons = [];
const Social = () => (
  <div>
    <h1>Follow Us!</h1>
    <div className="icons">
      <i className="fa fa-twitter" aria-hidden="true"></i>
      <i className="fa fa-facebook" aria-hidden="true"></i>
      <i className="fa fa-instagram" aria-hidden="true"></i>
      <i className="fa fa-snapchat" aria-hidden="true"></i>
    </div>
  </div>
)