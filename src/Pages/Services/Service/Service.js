import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { picture, name, about, price } = service;
  return (
    <div className="single-service">
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>{price}</p>
            <p><small>{about}</small></p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="outline-primary">More info</Button>
        </Card.Footer>
      </Card>

      {/* <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <p><small>{about}</small></p>
            <Card.Footer>
                <Button variant="outline-primary">More info</Button>
            </Card.Footer>            */}
    </div>
  );
};

export default Service;
