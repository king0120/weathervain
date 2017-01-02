import React from 'react';
import {Link} from 'react-router';
import './jumbotron.scss';
import sunBeach from './sun-beach.jpg';

export default class Jumbotron extends React.Component{
    render(){
        const style = {
            height: "75vh",
            backgroundImage: `url(${sunBeach}`,
            backgroundSize: 'cover'
        };
        return (
            <div style={style} className="jumbotron">
                <div className="hellena">Own Your Style</div>
                <div className="hellena">Own Your Day</div> 
                <Link  to="/signup" className="button is-primary">Get Started</Link>
                <div className="underButton">Easy To Start | Free To Try</div>
            </div>
        )
    }
}