import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SearchFood from "./SearchFood/SearchFood";
const SearchFoods = ({ name }) => {
  const [searchFoods, setSearchFoods] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSearchFoods(data.meals));
  }, [name]);
  return (
    <Row xs={1} md={4} className="g-2">
      {searchFoods.map((food) => (
        <SearchFood food={food} key={food.idMeal} />
      ))}
    </Row>
  );
};

export default SearchFoods;
