import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Posts } from '../Pages/Posts';
import { PostReducer } from 'd:/src/redux/app/reducer';

export const Navbar = () => {
    const {login}=useSelector((state)=>state.login);
    console.log(login?.data.token);
  return (
    <div >
        <div >
        <div>
           <div>
              <Link to={"/posts"}><Posts/></Link>
           </div>
        <div>  <p>EMAIL ID: </p></div>
        </div>
        <div >
        <div> <h5>Token Number:{login?.data.token} </h5></div>
       
        </div>
        </div>
    </div>
  )
}