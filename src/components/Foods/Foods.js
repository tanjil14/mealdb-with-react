import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Food from "../Food/Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setFoods(data.categories));
  }, []);
  return (
    <div className="container-fluid">
      <Row xs={1} md={4} className="g-2">
        {foods.map((food) => (
          <Food food={food} key={food.idCategory} />
        ))}
      </Row>
    </div>
  );
};

export default Foods;
