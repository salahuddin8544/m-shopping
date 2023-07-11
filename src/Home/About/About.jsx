import React from 'react';
import aboutMe from '../../assets/knowledge/about-me.jpg'
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className='w-full'>
            <div className='w-5/6 mx-auto py-20'>
                <h2 className='text-5xl'>About Me</h2>
                <p className='text-lg font-medium my-2'>Javascript Node JS React JS MongoDB</p>
            </div>
            <div className='grid grid-cols-12 w-5/6 mx-auto'>
              <div className='col-span-12 md:col-span-8'>
              <p className='text-gray text-lg'>Experienced with Web Developer skilled in Web Applications, Front-End Development, Back-End Development Web Security. Strong engineering professional with a Diploma focused in Computer Science from Habiganj Polytechnic Institute. Quick Learner, proactive, and has strong work ethics Group Management and Problem Solver Design and code beautifully simple things, and I love what I do.You can never understand everything. but you should push yourself to understand the system.</p>
              <div className=''>
                <h3 className='text-4xl text-black font-medium my-4'>Contact</h3>
              <Link to={'https://api.whatsapp.com/send/?phone=8801735474562&text&type=phone_number&app_absent=0'} target='_blank'>
              <button className='btn bg-blue text-white'>What'sApp</button>
              </Link>
              </div>
              </div>
                <div className='col-span-12 md:col-span-4'>
                <img className='rounded my-8 md:my-0 md:mb-8' src={aboutMe} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;