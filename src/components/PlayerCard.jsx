import { useState } from "react";
import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import "./PlayerCard.css";
const PlayerCard = ({ item }) => {
  const [show, setShow] = useState(false);

  return (
    <Col>
      <Card
        className="player-card bg-warning"
        role="button"
        onClick={() => setShow(!show)}
      >
        {!show ? (
          <Card.Img
            variant="top"
            src={item.img}
            title={item.name}
            alt={item.name}
            className="w-100"
          />
        ) : (
          <>
            <Card.Header>
              <Card.Title>{item.name}</Card.Title>
            </Card.Header>
            <ul className="m-auto">
              {item.statistics.map((veri) => (
                <li className="list-unstyled h5 text-start"> 🏀 {veri}</li>
              ))}
            </ul>
          </>
        )}
      </Card>
    </Col>
  );
};

export default PlayerCard;
