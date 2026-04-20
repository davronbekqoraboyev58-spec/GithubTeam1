import React from 'react'
import img from "../../../assets/MainImg/Kran.png"
import "./Main.css"

const Main = () => {
  return (
    <div>
      <div className="img" style={{backgroundImage: `url(${img})`}}>
        <div className="mainText">
            <div className="main">
            <h1>CREATE<span style={{color: "#FF5A30"}}>X</span><br />CONSTRUCTION</h1>
            <p>
                Cras ultrices leo vitae non viverra. Fringilla nisi quisque <br />
                consequat,dignissim vitae proin ipsum sed. Pellentesque nec <br />
                turpis purus eget pellentesque integer ipsum elementum felis. 
            </p>
            </div>
            <div className="mainB">
                <button className='B1'>LEARN MORE ABOUT US</button>
                <button className='B2'>SUBMIT REQUEST</button>
            </div>
        </div>
        <div className="mainCh">
            <div className="card1">
              <p>01</p>
              <hr />
            </div>
            <div className="card5">
              <div className="card2">
              <p>02</p>
              <hr />
            </div>
            <div className="card3">
              <p>03</p>
              <hr />
            </div>
            <div className="card4">
              <p>04</p>
              <hr />
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
