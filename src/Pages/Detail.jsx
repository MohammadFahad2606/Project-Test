import React from 'react'
import "./detail.css"
import { useParams } from 'react-router'
import {data} from "../Components/utils/contant/ProfileData"
const Detail = () => {
  const {key}= useParams()
let singdata = data.find((item)=>{
  return item.id == key
})
console.log(singdata)
const {name,description,profession,profileImage,profileLink}= singdata
  return (
    <div className='DetailWrapper'>
    {
         profileImage ? <img  src={profileImage} alt="" /> : <img  src="./profile-icon.svg" alt="" />
        }
    <div className='Detail'>
     
      <h1>{name}</h1>
      <h4>{profession}</h4>
      <p>{description}</p>
      <a href={profileLink} target="_blank" rel="noopener noreferrer"><img src="./facebook-icon.svg" alt="" /></a>

      <button >Buy me a coffee</button>
    </div>
    </div>
  )
}

export default Detail
