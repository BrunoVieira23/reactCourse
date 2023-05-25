import React from "react";

const PersonInfo = ({ name, hairColor }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Hair Color: {hairColor}</h2>
    </div>
  );
};

export default PersonInfo;
