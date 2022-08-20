import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((robot) => {
    return (
      <Card
        key={robot.id}
        id={robot.id}
        username={robot.username}
        name={robot.name}
        email={robot.email}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
