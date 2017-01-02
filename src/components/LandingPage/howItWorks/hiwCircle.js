import React from 'react';

const hiwCircle = ({circle}) => {
  const style = {
    margin: "20px 0",
    width: "20vh"
  }
  const circleStyle = {
    margin: "0 auto",
    height: "10vh",
    width: "10vh",
    backgroundColor: "#3273dc",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <div style={style}>
      <div style={circleStyle}>
        <img src={circle.image}></img>
      </div>
      <h3>{circle.header}</h3>
    </div>
  );

}
export default hiwCircle;