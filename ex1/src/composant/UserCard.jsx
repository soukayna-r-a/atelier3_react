
import React from 'react';
import "./style.css";


const UserCard = ({ nom, prénom, email, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={`${prénom} ${nom}`} />
      <h2>{prénom} {nom}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserCard;
