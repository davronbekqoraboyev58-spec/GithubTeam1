import React from 'react'
import "./Main.css"
import img from "../../assets/background.png"

const Main = () => {
  return (
    <div>
        
     <main className='main' style={{backgroundImage: `url(${img})`}}>
        <div className="left"> 
                 <p>Homepage / Services</p>
      <h1>SERVICES</h1>
      <p>If you are looking for a full-service construction company, look <br />to Createx Construction Bureau. We are doing our best <br /> to be a partner for all of your construction needs.</p></div>

     </main>
    </div>
  )
}

export default Main 