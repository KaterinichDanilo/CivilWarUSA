import React, { useState } from "react";

function FightBlock({ item }) {
  const [isActiveText, setIsActiveText] = useState(false);

  return (
    <div className="fight-block" onClick={() => setIsActiveText(!isActiveText)}>
      <img src={item.url} alt="" className="fight-img" />
      <h3 className="fight-title">{item.name}</h3>
      <div className="fight-date">{item.date}</div>
      <div className="fight-description">{!isActiveText && item.description}</div>
      <div className={`fight-text ${isActiveText && "active"}`}>{item.text}</div>
    </div>
  );
}

export default FightBlock;
