import React from 'react';
import Jumbotron from './jumbotron/jumbotron';
import HowItWorks from './howItWorks/howItWorks';
import Footer from './footer/footer';

export default class LandingPage extends React.Component{
    render(){
        return (
            <div>
                <Jumbotron />
                <HowItWorks />
                <Footer />
            </div>
        )
    }
}