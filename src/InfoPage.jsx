import React from "react";
import { useNavigate } from "react-router-dom";

function InfoPage({ information, element }) {
  const navigate = useNavigate();

  return (
    <div className="confederation">
      <div className="confed-header">
        <button className="confed-button-back" onClick={() => navigate("/")}>
          Повернутися назад
        </button>
        <h2 className="confed-title">
          {element === "confederation" ? "Історія конфедерації" : "Історія федерації"}
        </h2>
      </div>

      <div className="confed-info">
        <div className="confed-leftblock">
          {information.map((obj) => (
            <div className="confed-textblock" key={obj.title}>
              <h3 className="confed-subtitle">{obj.title}</h3>
              <p className="confed-text">{obj.text}</p>
            </div>
          ))}
        </div>
        <div className="confed-rightblock">
          {element === "confederation" ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Confederate_States_of_America_%28orthographic_projection%29.svg/300px-Confederate_States_of_America_%28orthographic_projection%29.svg.png"
              alt=""
            />
          ) : (
            <img
              src="https://e7.pngegg.com/pngimages/135/100/png-clipart-southern-united-states-confederate-states-of-america-union-american-civil-war-emancipation-proclamation-border-shepherd-united-states-map-thumbnail.png"
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
