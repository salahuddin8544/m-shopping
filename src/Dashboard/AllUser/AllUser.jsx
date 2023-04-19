import React, { useEffect, useState } from 'react';
import AddUser from '../AddUser/AddUser';

const AllUser = () => {
    const[showModal,setShowModal] = useState(false)
    const handleonClose =()=>setShowModal(false)
    const [users,setUser] = useState([])
    useEffect(()=>{
        fetch(`https://m-server-ashen.vercel.app/allusers/`)
        .then(res=>res.json())
        .then(data=> setUser(data))
      },[])
    return (
        <div>
            <button onClick={()=> setShowModal(true)} className='btn bg-cyan-400'>Add User</button>

            <table class="border-collapse border border-slate-500 ...">
            <thead>
                <tr>
                <th class="border border-slate-600 ...">No</th>
                <th class="border border-slate-600 ...">Name</th>
                <th class="border border-slate-600 ...">Email</th>
                <th class="border border-slate-600 ...">Role</th>
                </tr>
            </thead>
            <tbody>
         {
            users.map((user,i)=>
            <tr key={user._id}>
                  <td class="border border-slate-700 ...">{i+1}</td>
                  <td class="border border-slate-700 ...">{user.name}</td>
                  <td class="border border-slate-700 ...">{user.email}</td>
                  <td class="border border-slate-700 ...">{user.role}</td>
            </tr>
            )
        }
    <tr>
    </tr>
  </tbody>
</table>
<AddUser onClose={handleonClose} visible={showModal}></AddUser>
        </div>
    );
};

export default AllUser;