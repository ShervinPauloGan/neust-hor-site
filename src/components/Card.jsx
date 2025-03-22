import React from 'react';

export function Card({ name, position, image, college }) {
  return (
    <div className="officer-card">
      <div className="card-image">
        <img src={image} alt={`Photo of ${name}`} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p className="position">{position}</p>
        <p className="college">{college}</p>
      </div>
    </div>
  );
}