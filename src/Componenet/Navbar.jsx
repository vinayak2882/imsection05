import React from 'react'
import {Box} from "@chakra-ui/react";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
 <> 
 <div className='nav'>
 <a href='/'>All</a>
 <a href='/css'>CSS</a>
 <a href='/html'>HTML</a>
 <a href='/javascript'>JavaScript</a>
 </div>
</>
  )
}

export default Navbar
