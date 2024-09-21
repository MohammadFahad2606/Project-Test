import React from 'react'
import "./Card.css"
function Card(data) {
  const Detail = ()=>{
    console.log("click")
      }
      const {background,description,name,profession,profileImage,profileLink} = data.data
      async const profileImage.onerror = function() {
        
      };
      console.log(profileImage)
  return (
    <div className='Card'>
        <img className='bgImge' src={background} alt="" />
      <div className='ProfileImg'>
        {
         {profileImage} ? <img  src={profileImage} alt="" /> : <img  src="./vite.svg" alt="" />
        }
      
      </div>
<h1>{name}</h1>
<h4>{profession}</h4>
<p>{description}</p>
<p>profileLink</p>
<button >View profile</button>
    </div>
  )
}

export default Card
