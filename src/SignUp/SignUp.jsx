import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  { PRODUCT_CONTEXT, USE_CONTEXT } from '../Context/ProductProvider';

const SignUp = () => {
  const{createUser,updateUser} = USE_CONTEXT(PRODUCT_CONTEXT)
  const [errror, setEerror] = useState('');
      const handleSignUp = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
       const email = form.email.value;
        const role = form.role.value;
        const password = form.password.value;
      const users ={
        name,
        email,
        role


      }
      console.log(users);
      createUser(email,password)
      .then(result=>{
        setCreatedUserEmail(result)
        const user = result.user;
        console.log(user);
        const userInfo ={
           displayName: form.name.value
        }
        updateUser(userInfo)
        .then(()=>{

        })
      })
      .catch(error=>console.log(error)) 

      fetch('http://localhost:5000/allusers', {
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(users)
      })
      .then(data=>{
        console.log(data)
           setCreatedUserEmail(email)
        if(data.acknowledged){
           console.log('user added')
      }   
    })
    .catch(err=>{
      console.log(err);
      setEerror(err.message)
    })

    }
  
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto my-5">
        <form  className="card-body" onSubmit={handleSignUp}>
        <h1 className="text-5xl font-bold">SignUp</h1>
          <div className="form-control">
            <label className="block mb-2 text-sm font-medium text-gray-900 text-start text-medium">
                Your Name
            </label>
            <input type="name" name='name' placeholder="Your name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="form-control">
            <label className="block mb-2 text-sm font-medium text-gray-900 text-start text-medium">
              Email
            </label>
            <input type="text" placeholder="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>
          <div className="form-control">
          <label className="block mb-2 text-sm font-medium text-gray-900 text-start text-medium">
              Password
            </label>
            <input type="text" name='password' placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>
          <div className="form-control">
          <label className='block mb-2 text-sm font-medium text-gray-900 text-start text-medium' > Select account type</label>
          <select   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='role' >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
          
        </select>
          </div>
          <div className="form-control mt-6">
            <input type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" value="Submit" />
            
          </div>
        </form>
        
        <p className='text-center py-4'>Already have an account? <Link className='text-orange-700' to={'/login'}>Login</Link> </p>
      </div>
    );
};

export default SignUp;