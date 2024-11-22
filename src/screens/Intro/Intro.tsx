import React from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import "./intro.css";

const Intro: React.FC = () => {
  const navigate = useNavigate(); // Inicializar el hook de navegación

  const handleNext = () => {
    navigate("/dashboard"); // Navegar al dashboard
  };

  return (
    <div className="intro">
      <h1 className="intro-title">Welcome to PoemWorld</h1>
      <p className="intro-description">
        Discover, read, and share beautiful poems from around the world. Let
        your imagination flow like verses of poetry.
      </p>
      <button className="intro-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Intro;
