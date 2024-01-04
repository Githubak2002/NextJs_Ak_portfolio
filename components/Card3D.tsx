import React from 'react';
import "./3Dcard.css";

const Card3D = (props:any) => {
  
  const title = props.title;
  console.log(title);
  return (
    <main className="cards flexCenter w-fit">
      <figure className="card">
        <figcaption className="card_title">{title}</figcaption>
      </figure>
    </main>
  )
}

export default Card3D