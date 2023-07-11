import React from 'react';
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-footer'>
            <div className="grid grid-cols-12 w-5/6 mx-auto py-9">
            <div className='col-span-12  md:col-span-6 '>
                <h3 className='text-white'>CONTACT WITH ME</h3>
                <form className='px-0 md:px-4'>
                    <div className='my-2'>
                        <input type="text" name="" className='rounded p-2 w-full' placeholder='Your Name' id="" />
                    </div>
                    <div className='my-2'>
                        <input type="email" name="" className='rounded p-2 w-full' placeholder='Your Email' id="" />
                    </div>
                    <div className='my-2'>
                        <textarea type="text" name="" className='rounded p-2 w-full' placeholder='Your Message' id="" />
                    </div>
                    <input type="submit" value="Send" className='bg-yellow text-white px-3 py-2 rounded' />
                </form>
               
            </div>
            <div className='col-span-12 md:col-span-3'>
            <h3 className='text-white'>KNOW FOR SALAHUDDIN</h3>
            <p><Link className='text-white2'>Javascript</Link></p>
            <p><Link className='text-white2'>UI Design</Link></p>
            <p><Link className='text-white2'>React</Link></p>
            <p><Link className='text-white2'>Node JS</Link></p>
            <p><Link className='text-white2'>Mongo DB</Link></p>
            <p><Link className='text-white2'>Express</Link></p>
            </div>
            <div className='col-span-12 md:col-span-3'>
            <h3 className='text-white'>QUICK LINKS</h3>
            <p><Link className='text-white2'>Home</Link></p>
            <p><Link className='text-white2'>About Me</Link></p>
            <p><Link className='text-white2'>Projects</Link></p>
            <p><Link className='text-white2'>Blogs</Link></p>
            <p><Link className='text-white2'>Resume</Link></p>
            <p><Link className='text-white2'>Upcoming</Link></p>
            </div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 w-5/6 mx-auto'>
        <p className='text-white2 text-center md:text-start'>Copyright © 2023 All Rights Reserved by --SALAH UDDIN.</p>
        <div className='flex items-center mx-auto w-36 gap-2'>
                        <Link target='_blank' to={`https://www.linkedin.com/in/salahuddinhmed/`}><FaLinkedin className='text-4xl text-blue'></FaLinkedin></Link>
                        <Link target='_blank' to={'https://github.com/salahuddin8544'}> <FaGithub className='text-4xl text-blue2'></FaGithub></Link>
                        <Link target='_blank' to={'https://web.facebook.com/hmsalauddin.ahmed.5'}><FaFacebookSquare className='text-4xl text-blue3'></FaFacebookSquare></Link>
                        <Link target='_blank' to={'https://www.instagram.com/hafezsalahuddin/'}> <FaInstagram className='text-4xl text-red'></FaInstagram> </Link>
                    </div>
        </div>
        </div>
    );
};

export default Footer;