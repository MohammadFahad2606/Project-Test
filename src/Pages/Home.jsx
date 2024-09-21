import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Card from '../Components/Common/card/Card'
import { data } from '../Components/utils/contant/ProfileData'
function Home() {
    
  return (
    <div className='CardWrapper'>
       {
        data.map((item,index)=>{
            return(
<Card key={index} data={item}/>
            )
        })
       }

    </div>
  )
}

export default Home
