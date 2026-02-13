import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/Form.css";

const FormPage = () => {
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !quote) {
      alert("All fields required");
      return;
    }

    const res = await API.post("/add", { name, quote });

    navigate("/display", { state: res.data });
  };

  return (
    <div className="form-container">
      <h2>Quote Vault</h2>
      <p>Write something inspiring or meaningful</p>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Enter Quote"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
