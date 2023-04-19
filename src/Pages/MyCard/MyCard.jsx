import React from 'react';
import { USE_CONTEXT } from '../../Context/ProductProvider';
import ProductCart from '../../Home/ProductCart';

const MyCard = () => {
    
    let content;
    const {state:{loading,error,cart}} = USE_CONTEXT();
    if(loading){
        content = <p>Loading</p>
    }
    if(error){
        content= <p>Something went wrong</p>
    }
    if(!error && !loading && cart.length === 0){
        content = <p>Nothing added</p>
    }
    
    if(!error && !loading && cart.length){prod
        content = cart.map(product=> <ProductCart
        
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

export default MyCard;