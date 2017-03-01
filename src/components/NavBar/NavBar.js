import React from 'react';
import {Link} from 'react-router';

require('./NavBar.scss');

export default class NavBar extends React.Component{
    render(){
        return (
            <div className="nav">
                <div className="nav-left">
                    <Link to="/" className="nav-item is-brand">
                        WeatherVain
                    </Link>
                </div>
                <div className="nav-right">
                    <Link href="#" className="nav-item">Home</Link>
                    <Link href="#" className="nav-item">Inspiration</Link>
                    <Link href="#" className="nav-item">About Us</Link>
                    <Link to="/signup" className="nav-item">My Account</Link>
                </div>
            </div>
        )
    }
}