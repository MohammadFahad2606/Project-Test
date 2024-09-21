import React from 'react'
import "./Card.css"
import { useNavigate } from 'react-router'

function Card(data) {
const navigate = useNavigate()
  const Detail = ()=>{
    console.log("click")
      }
      const {id,background,description,name,profession,profileImage,profileLink} = data.data
     
    
  return (
    <div className='Card'>
        <img className='bgImge' src={background} alt="" />
      <div className='ProfileImg'>
        {
         profileImage ? <img  src={profileImage} alt="" /> : <img  src="./profile-icon.svg" alt="" />
        }
      
      </div>
<h1>{name}</h1>
<h4>{profession}</h4>
<p>{description}</p>
<a href={profileLink} target="_blank" rel="noopener noreferrer"><img src="./facebook-icon.svg" alt="" /></a>
<button onClick={()=>navigate(`${id}`)} >View profile</button>
    </div>
  )
}

export default Card
