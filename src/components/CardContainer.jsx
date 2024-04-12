import React from "react";
import PlayerCard from "./PlayerCard";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import { data } from "../helper/data";
import Form from "react-bootstrap/Form";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(search.trim().toLowerCase());
  });

  return (
    <div>
      <Form.Control
        type="search"
        placeholder="Search Player..."
        onChange={handleChange}
        className="w-25 mx-auto"
      />
      <Container className="w-75 rounded-4 card-container my-3 ">
        <Row xs={1} md={2} lg={3} className="justify-content-center g-4">
          {filteredData.map((item, index) => (
            <PlayerCard key={index} item={item}></PlayerCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;
