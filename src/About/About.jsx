import React from 'react';
import background from '../assets/knowledge/background.avif'
import { TypeAnimation } from 'react-type-animation';
const About = () => {
    return (
        <div style={{background:`url(${background}
            )`
        
    }}>
            <p className='text-white text-center text-3xl pt-6 pb-16'>
            <TypeAnimation
                        sequence={[
                           
                            "Build your Future dream with me.",
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '1em' }}
                        repeat={Infinity}
                    />
            </p>
        </div>
    );
};

export default About;