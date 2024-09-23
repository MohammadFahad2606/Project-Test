import React from 'react'
import "./Card.css"
import { useNavigate } from 'react-router'

function Card(data) {
const navigate = useNavigate()

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
<div className='description-box'>
<p>{description}</p>
</div>
<div className="icon-wrapper">
<a href={profileLink} target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-facebook'></i></a>
  <i className='fa-brands fa-linkedin'></i>
  <i className='fa-brands fa-instagram'></i>
  <i className='fa-brands fa-youtube'></i>
  <i class='fa-brands fa-twitter'>
    </i>
    </div>

<button onClick={()=>navigate(`${id}`)} >View profile</button>
    </div>
  )
}

export default Card
