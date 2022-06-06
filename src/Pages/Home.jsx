import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '../redux/auth/action';


export const Home = () => {
  const [formData,setFormData]=useState({

  })
  
  const dispatch=useDispatch()

  const Change = (e) => {
    const inputName = e.target.name;
      setFormData({
        ...formData,
        [inputName]: e.target.value,
      });
    
  };
 
  const Submit = (e) => {
    e.preventDefault();
    var value = formData;
    if (value) {
      postLogin({
        value,
        dispatch
      });
    }
    
  };
  return (
    <div>
  
        <h3>Login yourself first</h3>
        <form onSubmit={Submit}> 
        <input
          type="text"
          placeholder="Enter yours email"
          name="email"
          onChange={Change}
        />
        <br />
        <input
          type="password"
          placeholder="Enter yours password"
          name="password"
          onChange={Change}
        />
        <br />
        <input type="submit" name="submit" value="Log in" />
        </form>
         
   
    </div>
  )
}