import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { ProductReducer, inittialState } from '../State/ProductReducer/ProductReducer';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,updateProfile} from 'firebase/auth';

import { ACTION_TYPE } from '../State/ActionType/ActionType';
import app from '../firebase/firebase.config';
export const PRODUCT_CONTEXT = createContext();
const auth = getAuth(app)
const ProductProvider = ({children}) => {

  const [loading,setLoading] = useState(false)
  const [user,setUser] = useState(null)
  const createUser = (email,password)=>{
      setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
  }
  const login = (email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
  }
  const updateUser =(userInfo)=>{
      return  updateProfile(auth.currentUser,userInfo)
    }
  const logOut =()=>{
      setLoading(true)
      return signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
           console.log(currentUser);
           setUser(currentUser)
       })
       return()=>{
           unsubscribe()
       }
},[])
console.log(user);
  //use reducer starte here
    const [state,dispatch] = useReducer(ProductReducer,inittialState);
    useEffect(()=>{
      dispatch({type:ACTION_TYPE.FETCHING_START})
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>
       dispatch({type:ACTION_TYPE.FETCHING_SUCCESS, payload:data})
        )
        .catch(()=> dispatch({type:ACTION_TYPE.FETCHING_ERROR}))
    },[])
    console.log(state);
    const value = {
      state,
      dispatch,
      user,
      createUser,
      loading,
      login,
      logOut,
      updateUser
  
    }
    return (
      <PRODUCT_CONTEXT.Provider
      value={value}
      
      >
        {children}
      </PRODUCT_CONTEXT.Provider>
    );
};
export const USE_CONTEXT =()=>{
  const context = useContext(PRODUCT_CONTEXT);
  return context
}


export default ProductProvider;