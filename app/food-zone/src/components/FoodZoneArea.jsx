import React from "react";
import FoodCards from "./FoodCards";

const FoodZoneArea = ({ foodData, searchedFood }) => {
  return (
    <>
      <div className="bg_image">
        <div className="food_cards_bg_image"></div>
        <FoodCards foodData={foodData} searchedFood={searchedFood} />
      </div>
    </>
  );
};

export default FoodZoneArea;
