import React from "react";

export default function Card(props){
  const {title, price, location, coverImg, openSpots, stats} = props.item
  return (
    <div className="card">
      <img className="card-img" src={`/src/assets/${coverImg}`} alt="a picture of katie zaferes" />
      <>
        {openSpots>0 && <p className="availability-text">ONLINE!</p>}
        {openSpots==0 && <p className="availability-text">SOLD OUT!</p>}
      </>
      <div className="lesson-bio">
        <img src="/src/assets/star.png" alt="star" className="star-icon"/>
        <p>{stats.rating}</p>
        <p>({stats.reviewCount})</p>
        <p>{location}</p>
      </div>
      <p className="lesson-info">{title}</p>
      <p className="price-text"><b>from {price}$ </b>/ person</p>
    </div>
  )
}
