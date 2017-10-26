import React from 'react';

const RevealedCard = ({image, description, type, attack, defense}) => {
  return (
    <div className="revealed_card">
      <img className="image" src={image}/>
      <span className="description">{description}</span>
      <span className="type">{type}</span>
      <div className="attack_wrapper"><span className="attack">{attack}</span></div>
      <div className="defense_wrapper"><span className="defense">{defense}</span></div>
    </div>
  );
};

export default RevealedCard;
