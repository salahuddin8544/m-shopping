import React from 'react';
import Projects from './Projects/Projects';
import Knowledge from './Knowledge/Knowledge';
import About from './About/About';
import Slide from './Slides/Slide';
const Home = () => {
   
    
     return (
        <div>
            <Slide></Slide>
            <Projects></Projects>
            <Knowledge></Knowledge>
            <About></About>
        </div>
    );
};

export default Home;