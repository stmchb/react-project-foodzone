import { useEffect, useState } from "react";
import "./App.css";
import FoodZoneArea from "./components/FoodZoneArea";
import NavBar from "./components/NavBar";

let BASE_URL = "http://localhost:9000";

function App() {
  const [searchedFood, setSearchedFood] = useState(null);
  const [foodData, setFoodData] = useState(null);
  const [typeFood, setTypeFood] = useState("All");
  const [isSeletedType, setIsSelectedType] = useState("All");

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setFoodData(data);
        setSearchedFood(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!foodData) {
    return <p>Loading...</p>;
  }

  const handleSearchedFood = (e) => {
    let inputValue = e.target.value;
    const filter = foodData.filter((data) =>
      data.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchedFood(filter);
  };

  const handleFoodByType = (btn) => {
    setIsSelectedType(btn); // eg-dinner/selected
    if (btn === "All") {
      setSearchedFood(foodData);
      return;
    }

    const filter = foodData.filter((food) =>
      food.type.toLowerCase().includes(btn.toLowerCase())
    );
    setSearchedFood(filter);
    setTypeFood(btn);
  };

  return (
    <>
      <NavBar
        typeFood={typeFood}
        handleFoodByType={handleFoodByType}
        handleSearchedFood={handleSearchedFood}
        isSeletedType={isSeletedType}
      />
      <FoodZoneArea foodData={foodData} searchedFood={searchedFood} />
    </>
  );
}

export default App;
