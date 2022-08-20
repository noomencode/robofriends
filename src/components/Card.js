import React from "react";

const Card = ({ id, username, name, email }) => {
  return (
    <div className="bg-light-green dib tc br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${id}?200x200`}></img>
      <div>
        <h1>{username}</h1>
        <span>{name}</span>
        <br></br>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default Card;
