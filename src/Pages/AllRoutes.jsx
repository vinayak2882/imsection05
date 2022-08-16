import {React} from 'react'
import { Routes,Route, Link  } from "react-router-dom"
import All from './All'
import HTML from './Html'
import CSS from './Css'
import JavaScript from './Javascript'


const AllRoutes = () => {
  return (
 <>
 <Routes>
    <Route path ='/' element={<All/>}></Route>
    <Route path ='/html' element={<HTML/>}></Route>
    <Route path ='/css' element={<CSS/>}></Route>
    <Route path ='/javasc' element={<JavaScript/>}></Route>
 </Routes>
 </>
  )
}

export default AllRoutes
