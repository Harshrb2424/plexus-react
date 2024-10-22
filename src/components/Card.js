import React from "react";
import '../css/card.css'; // Importing CSS file for styling

const Card = ({ data }) => {
  const { displayName, role, introduction, portrait, username } = data; // Destructuring the data prop

  return (
    <a href={'member/' + username} >
    <div className="card">
      <img
        src={
          "https://raw.githubusercontent.com/Harshrb2424/plexus-edit/refs/heads/main/public" +
          portrait
        }
        alt={displayName}
        className="card-img"
      />
      <div className="card-body">
        <h5>{displayName}</h5>
        <h3>{role}</h3>
        <h4>{introduction}</h4>
      </div>
     
    </div> </a>
  );
};

const CardAssets = ({ data }) => {
  const { name, role, desc, img } = data; // Destructuring the data prop

  return (
    <div className="card">
      <img
        src={
          "https://raw.githubusercontent.com/Harshrb2424/plexus-edit/refs/heads/main/assets/" + img
        }
        alt={name}
        className="card-img"
      />
      <div className="card-body">
        <h5>{name}</h5>
        <h3>{role}</h3>
        <h4>{desc}</h4>
      </div>
    </div>
  );
};

export default Card;
export { CardAssets };
