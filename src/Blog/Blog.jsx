import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Blog = () => {
    return (
        <div>
            <div className='w-full px-4 md:w-3/5 mx-auto text-center my-16'>
            <h2 className='text-2xl mb-4 md:text-5xl'>Welcome to blog</h2>
            <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            "Hello user thanks for coming this page i'm sorry for that i'm building this page for everyone they can post somethings here and also they can read lot's of blog of mine and most of the developer blog they can also read Thank You.",
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '1em' }}
                        repeat={Infinity}
                    />
            </div>
        </div>
    );
};

export default Blog;