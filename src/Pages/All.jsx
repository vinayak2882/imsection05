import React , {useState, useEffect}from 'react'
import axios from 'axios'
import DetailsData from './DetailsData'

const All = () => {
    const [Dataaa, setData]=useState([])
  

    const fecthData = ()=>{
        axios.get('https://api.github.com/search/repositories?q=stars:%3E1+language:all')
        .then(res=>{
            console.log(res.data.items)
            setData(res.data.items)
        })
        // console.log(setData,"set")
        .catch(err=>{
            console.log("err", err)
        })
    }
    console.log(Dataaa,"data")
    useEffect(()=>{
        fecthData()
    },[])

  return (
    <div className='griddiv'>
      {Dataaa.map((el)=>{return(<DetailsData key={el.id} {...el}/>)})}
      
    </div>
  )
}

export default All
