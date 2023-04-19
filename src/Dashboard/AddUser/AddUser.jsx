import React from 'react';

const AddUser = ({visible,onClose}) => {
  if(!visible) return null

  const handleUser = event=>{
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
  fetch('https://m-server-ashen.vercel.app//allusers', {
    method:'POST',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(users)
  })
  .then(data=>{
    console.log(data)
    window.confirm('User added')
    if(data.acknowledged){
       
  }   
})
.catch(err=>{
  console.log(err);
  setEerror(err.message)
})

  }
  
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto my-5">
          <button className='btn bg-zinc-500 right-0' onClick={onClose}>X</button>
        <form onSubmit={handleUser} className="card-body">
        <h1 className="text-5xl font-bold">Add User</h1>
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
        
      </div>
    );
};

export default AddUser;