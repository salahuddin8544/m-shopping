import React, { useState } from 'react';
import { FaDownload, FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Slide = () => {
    return (

        <div className=' py-6 md:py-20'>
            <div className='grid grid-cols-12 gap-2 w-11/12 mx-auto'>
                <div className='col-span-12 md:col-span-4 bg-gray-400 sm:mb-6 text-center'>
                    <h2 className='text-3xl'><strong>Welcome</strong></h2>
                    <p className='text-lg my-4'>To Salah uddin</p>
                    <h2 className='text-4xl'></h2>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'I Code Your Dream To Reality',
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                    <p className='text-xl'>2023</p>
                </div>
                <div className='col-span-12 md:col-span-8'>
                    <div className='flex items-center mx-auto w-36'>
                        <Link target='_blank' to={`https://www.linkedin.com/in/salahuddinhmed/`}><FaLinkedin className='text-4xl text-blue'></FaLinkedin></Link>
                        <Link target='_blank' to={'https://github.com/salahuddin8544'}> <FaGithub className='text-4xl text-blue2'></FaGithub></Link>
                        <Link target='_blank' to={'https://web.facebook.com/hmsalauddin.ahmed.5'}><FaFacebookSquare className='text-4xl text-blue3'></FaFacebookSquare></Link>
                        <Link target='_blank' to={'https://www.instagram.com/hafezsalahuddin/'}> <FaInstagram className='text-4xl text-red'></FaInstagram> </Link>
                    </div>
                    <div className='bg-black text-white py-12 text-center'>
                        <h3 className='text-4xl'>I'm Salah uddin</h3>
                        <p className='text-lg my-3'>Full stack Developer</p>
                        <Link className='' download="Resume of Salah uddin" target='_blank' to={'/src/assets/resume/FullStack-salahuddin-resume.pdf'}>
                            <button className='btn btn-sm bg-yellow flex items-center mx-auto text-black'><FaDownload className='me-2 flex'></FaDownload>  Download Resume </button>
                        </Link>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Slide;