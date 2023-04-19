import React, { useState } from 'react';
import { PRODUCT_CONTEXT, USE_CONTEXT } from '../Context/ProductProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
  const{login} = USE_CONTEXT(PRODUCT_CONTEXT)
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handleSubmit = event=>{
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
      event.preventDefault()
      login(email,password)
      .then(result=>{
        const user = result.user;
        navigate(from ,{replace:true})
        toast.success('Login Succefully')
      })
      .catch(error=> {
        console.log(error)
        setError(error.message)
      })
  }
    return (
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto my-5">
      <form  className="card-body" onSubmit={handleSubmit}>
      <h1 className="text-5xl font-bold">Login</h1>
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
        <div className="form-control mt-6">
          <input type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" value="Submit" />
          
        </div>
      </form>
      
      <p className='text-center py-4'>New to here? <Link className='text-orange-700' to={'/signup'}>Sign Up</Link> </p>
    </div>
    );
};

export default Login;