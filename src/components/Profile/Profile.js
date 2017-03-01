import React from 'react';
import Weatherbar from './Weatherbar/Weatherbar';

const weatherbox={
  width: "80vw",
  height: "20vh",
  border: "2px solid red",
  margin: "0 auto"
}
export default class Profile extends React.Component {
  
  
  render(){
    return (
      <div>
        Profile
        <div style={weatherbox}>
          <Weatherbar/>
        </div>
        <div style={weatherbox}>
          This has some outfit details in it
        </div>
      </div>
    )
  }
}
