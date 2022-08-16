import React from 'react'

const DetailsData = (prop) => {
  return (
    <div className='Carddiv'>
<img src={prop.owner.avatar_url} alt={prop.name}/>
<h1>{prop.name}</h1>
<div>
<h3>{prop.stargazers_count}</h3>
<h3>{prop.forks_count}</h3>
</div>
      
    </div>
  )
}

export default DetailsData
