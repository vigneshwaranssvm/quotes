import React from "react";
import "../styles/card.css";

const QuoteCard = ({ data, onDelete }) => {
  return (
    <div className="card">
      <h3>{data.name}</h3>
      <p>{data.quote}</p>
      <button onClick={() => onDelete(data.id)}>Delete</button>
    </div>
  );
};

export default QuoteCard;
