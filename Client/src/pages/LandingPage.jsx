import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landingpage.css";
import imagesData from "../db.json/images.json"; 

const LandingPage = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imagesData);
  }, []);

  const handleLogoClick = () => {
    navigate("/home");
  };

  return (
    <div className="landing-container">
      <div className="carousel-container">
        <div className="carousel">
          {images.map((image) => (
            <div
              key={image.id}
              className="carousel-image"
              style={{ backgroundImage: `url(${image.url})` }}
            ></div>
          ))}
        </div>
      </div>
      <div className="logo-container" onClick={handleLogoClick}>
        <div className="logo-background">
          <img
            src="../../public/iconos/logo.png"
            alt="Logo de la empresa"
            className="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
