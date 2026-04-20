import React from 'react'
import img from "../../../assets/Pages1/YouTube.png"
import img1 from "../../../assets/Pages1/Bridge.png"
import img2 from "../../../assets/Pages1/Icons1/Like.png"
import img3 from "../../../assets/Pages1/Icons1/hand.png"
import img4 from "../../../assets/Pages1/Icons1/tapichka.png"
import "./Page2.css"

const Page2 = () => {
  return (
    <div>
      <div className="headBo">
        <h1>We are Createx Construction Bureau </h1>
      </div>
      <div className="head1">
        <p>We are rightfully considered to be the best construction company in the USA.</p>
      </div>
      <div className="head2">
        <div className="box" style={{backgroundImage: `url(${img1})`}}>
          <img src={img} alt="" />
        </div>
      </div>
      


      <div className="head3 head31">
        <h2>Our core values</h2>
      </div>
      <div className="head3">
        <p>Our mission is to set the highest standards for construction sphere.</p>
      </div>
      <div className="head4">
        <div className="carta1">
          <img src={img2} alt="like" />
          <h2>Quality</h2>
          <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
        </div>
        <hr className= "hr2"/>
        <div className="carta1">
          <img src={img3} alt="hand" />
          <h2>Safety</h2>
          <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
        </div>
        <hr className= "hr2"/>
        <div className="carta1">
          <img src={img4} alt="tapichka" />
          <h2>Comfort</h2>
          <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
        </div>
      </div>
      
      

        <div className="carta2">
          <h2>Want to know more? Ask us a question:</h2>
        </div>
      <div className="head6">
        <div className="carta3">
           <p className='Para'>Name</p>
           <input type="text" className='Put' placeholder='Your name'/>
        </div>
        <div className="carta4">
           <p className='Para'>Phone</p>
           <input type="text" className='Put' placeholder='Your phone'/>
        </div>
        <div className="carta5">
           <p className='Para'>Message</p>
           <input type="text" className='Put' placeholder='Your message'/>
        </div>
        <div className="carta6">
          <button className='Send1'>SEND</button>
        </div>
      </div>
    </div>
  )
}

export default Page2
