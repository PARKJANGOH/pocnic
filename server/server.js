<<<<<<< HEAD
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/api/host", (req, res) => {
  res.send(`This is POCNIC Server `);
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
=======
const express = require('express');
const app = express();
>>>>>>> 90049f1acdcbf60a63eeae5254d201b42447199a
