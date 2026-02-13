const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let quotes = [];
app.get("/",(req,res)=>{
  res.send("Quotes API is running")
});

// Add Quote
app.post("/add", (req, res) => {
  const newQuote = {
    id: Date.now(),
    name: req.body.name,
    quote: req.body.quote
  };

  quotes.push(newQuote);
  res.json(newQuote);
});

// Get All Quotes
app.get("/quotes", (req, res) => {
  res.json(quotes);
});

// Delete Quote
app.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  quotes = quotes.filter(q => q.id !== id);
  res.json({ message: "Deleted successfully" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});



