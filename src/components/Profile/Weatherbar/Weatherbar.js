import React from 'react';
import axios from 'axios';

const weatherbox={
  width: "80vw",
  height: "20vh",
  border: "2px solid red",
  margin: "0 auto"
}
export default class Weatherbar extends React.Component {
  constructor(){
    super();
    this.state = {
      city: ""
    }
  }
  componentDidMount(){ 
    const key = "cb814a55b2f743bf0101230a2d62df95";
    axios.get("http://api.openweathermap.org/data/2.5/weather",{
      params: {
        "APPID": key,
        "id": 524901
      }
    })
    .then((resp) => {
      console.log(resp)
      this.setState({
        city: resp.data.name,
        temp: resp.data.main.temp,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
      })
    })
  }
  
  render(){
    return (
      <div>
        The current weather in {this.state.city || ""}
        <div>
          This has some weather shit in it
        </div>
      </div>
    )
  }
}
