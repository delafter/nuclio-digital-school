import React from "react";
import "../styles/CareerTalent.css";
import CareerTalentImage from "../assets/images/product-images/Career&Talent.jpg";

const CareerTalent = () => {
  return (
    <div className="school-container">
      <img
        src={CareerTalentImage}
        className="career-talent-image"
        alt="Career&Talent"
      />
    </div>
  );
};

export default CareerTalent;
