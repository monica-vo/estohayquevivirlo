import React from 'react'
import '../styles/home.css'
import {
    // BrowserRouter as Router,
    Link
    // Route,
    // Switch,
  } from 'react-router-dom';
  import { TiSpiral } from 'react-icons/ti';


export const Home = () => {
    return (
        <div className='home'>
            {/* <Link to="/Main"><FiTarget className='logo'/></Link> */}
            <Link to="/Main"><TiSpiral className='logo'/></Link>
        <div className='title'><h1>Esto Hay Que Vivirlo!</h1></div>
        </div>
    )
}
