import React from "react";
import { Link } from 'react-router-dom';
import "./Card.css";


export const Card = ({ items }) => {
  return (
    <>
      <div className="cards-list">
      {items.map((item) => (
        <div key={item.id}>
            <div className="card">
              <img src={item.picture} alt={item.name} className="card-image" />
              <div className="card-content">
                <h2 className="card-title">{item.name}</h2>
                <p className="card-status">{item.adoptionStatus}</p>
                <Link to={`/petPage/${item.id}`}> {/* Link to PetPage & pass item.id */}
                <button className="card-button">See More</button>
              </Link>
              </div>
            </div>
          </div>
      ))}
        </div>
    </>
  );
};
