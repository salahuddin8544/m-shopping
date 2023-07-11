import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <div>
            <div className='w-full px-4 md:w-3/5 mx-auto my-16 text-center'>
            <Link className='' download="Resume of Salah uddin" target='_blank' to={'/src/assets/resume/FullStack-salahuddin-resume.pdf'}>
                            <button className='btn btn-sm bg-blue flex items-center mx-auto text-white'> Download Resume </button>
                        </Link>
                <Link className='' target='_blank' to={'https://drive.google.com/file/d/1eJn1qCIQIZzNF_I0Xd-WcQ8e4h7wlY1a/view?usp=sharing'}>
                    <button className='btn btn-sm bg-yellow text-white flex items-center mx-auto  mt-4'>Live Resume </button>
                </Link>
                <h3 className='font-medium text-3xl my-6'>MD SALAH UDDIN</h3>
                <div>
                    <p>FULL STACK DEVELOPER</p>
                    <p>HABIGANJ SADAR</p>
                    <p>SYLHET, BANGLADESH</p>
                    <p>+8801735474562</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;