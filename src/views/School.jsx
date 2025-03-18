import React, { useState } from "react";
import "../styles/School.css";
import SchoolImage from "../assets/images/product-images/School.jpg";
import SchoolImage2 from "../assets/images/product-images/School2.jpg";
import SchoolImage3 from "../assets/images/product-images/School3.jpg";
import SchoolImage4 from "../assets/images/product-images/School4.jpg";

const School = () => {
  const images = [SchoolImage, SchoolImage2, SchoolImage3, SchoolImage4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
    
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div 
     
      className="carousel-indicators">
        {images.map((_, index) => (
          <button
          style={{
            backgroundColor: currentIndex === index ? "#4A4A4A" : "gray",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            border: "none"
          }}
            type="button"
            key={index}
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={currentIndex === index ? "active" : ""}
            aria-current={currentIndex === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
      <div 
      
      className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${
              currentIndex === index ? "active" : ""
            }`}
            key={index}
          >
            <img
              src={image}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={goToPrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
       
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={goToNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span
         className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default School;
