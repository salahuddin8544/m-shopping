import React from 'react';
import { USE_CONTEXT } from '../Context/ProductProvider';
import ProductCart from './ProductCart';

const Home = () => {
    let content;
    const {state:{loading,error,products}} = USE_CONTEXT();
    if(loading){
        content = <p>Loading</p>
    }
    if(error){
        content= <p>Something went wrong</p>
    }
    if(!error && !loading && products.length === 0){
        content = <p>Nothing added</p>
    }
    
    if(!error && !loading && products.length){
        content = products.map(product=> <ProductCart
        
        key={product._id}
        product={product}
        ></ProductCart>)
    }
    
     return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {content}
        </div>
    );
};

export default Home;