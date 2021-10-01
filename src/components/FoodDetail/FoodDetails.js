import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";

const FoodDetails = () => {
  const [singleFood, setSingleFood] = useState({});
  const url = useParams();
  const { id } = url;

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setSingleFood(data.meals));
  }, [id]);
  return (
    <Card className="text-center">
      <Card.Header>{singleFood[0]?.strCategory}</Card.Header>
      <Card.Body>
        <Card.Title>{singleFood[0]?.strMeal}</Card.Title>
        <Card.Text>
         {singleFood[0]?.strInstructions.slice(0,20)}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default FoodDetails;
