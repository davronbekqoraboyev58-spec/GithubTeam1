import React from 'react';
import './Construction.css';
import cons1 from "../../assets/cons1.jpg"
import cons2 from "../../assets/cons2.jpg"
import cons3 from "../../assets/cons3.jpg"
import cons4 from "../../assets/cons3.jpg"




const Construction = () => {
  const services = [
    {
      id: 1,
      title: "Construction",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: cons1, // Rasm o'rniga o'zingizdagini qo'ying
    },
    {
      id: 2,
      title: "Project Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: cons2,
    },
    {
      id: 3,
      title: "Interior Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: cons3,
    },
    {
      id: 4,
      title: "Repairs",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: cons4,
    }
  ];

  return (
    <div className="construction-container">
      {services.map((service, index) => (
        <div key={service.id} className={`service-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
          <div className="service-image">
            <img src={service.image} alt={service.title} />
          </div>
          <div className="service-content">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button className="learn-more-btn">LEARN MORE</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Construction;