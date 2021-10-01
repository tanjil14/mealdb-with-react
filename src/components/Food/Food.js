import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Food = ({food}) => {
    const {strCategory,strCategoryThumb,strCategoryDescription}=food;
    return (
        <Col>
        <Card className="h-100">
          <Card.Img variant="top" src={strCategoryThumb} />
          <Card.Body>
            <Card.Title>{strCategory}</Card.Title>
            <Card.Text>
              {strCategoryDescription.slice(0,150)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Food;