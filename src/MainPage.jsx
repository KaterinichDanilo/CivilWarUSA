import React from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <div className="main-page">
      <h1 className="main-title">Громадянська війна США</h1>
      <div className="main-buttons">
        <button className="main-button" onClick={() => handleNavigate("confederation")}>
          Історія конфедерації
        </button>
        <button className="main-button" onClick={() => handleNavigate("fights")}>
          Важливі битви
        </button>
        <button className="main-button" onClick={() => handleNavigate("federation")}>
          Історія федерації
        </button>
      </div>
    </div>
  );
}

export default MainPage;
