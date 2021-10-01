import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';

const SearchFood = ({food}) => {
    const {idMeal,strMeal,strMealThumb,strInstructions}=food;
    let history = useHistory();

    const handleClick=()=>{
        history.push(`/food/${idMeal}`)
    }
    return (
        <Col>
        <Card className="h-100">
          <Card.Img variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <Card.Text>
              {strInstructions.slice(0,150)}
            </Card.Text>
          </Card.Body>
          <Link to={`/food/${idMeal}`}>See more</Link>
          <Button type="button" onClick={handleClick}>See More</Button>
        </Card>
      </Col>
    );
};

export default SearchFood;