import React from 'react';
import "./3Dcard.css";

const Card = (props:any) => {
  
  const title = props.title;
  // console.log(props);
  return (
    <main className="cards flexCenter w-fit">
      <figure className="card">
        <figcaption className="card_title">{title}</figcaption>
      </figure>
    </main>
  )
}

export default Card