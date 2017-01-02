import React from 'react';
import HiwCircle from './hiwCircle';

import './howItWorks.scss';
import eye from './images/eye.png';
import star from './images/star.png';
import tShirt from './images/t-shirt.png';
import user from './images/user.png';

export default class HowItWorks extends React.Component {

  render(){
    const circles = [{
      image: user,
      header: "Create An Account"
    }, {
      image: tShirt,
      header: "Choose Your Clothing Preferences"
    }, {
      image: eye,
      header: "Discover Styles Based on Your Location and Weather"
    }, {
      image: star,
      header: "Our Service Learns From Your Favorites"
    }];

    return (
      <div className="howItWorks">
        <h1>How It Works</h1>
        <div className="circles"> 
          {circles.map((circle, i) => <HiwCircle key={i} circle={circle} />)}
        </div>
      </div>
    )
  }

}