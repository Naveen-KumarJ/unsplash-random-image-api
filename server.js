require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/imageRoute");

const app = express();
const PORT = 8080;

app.use(cors());

app.use("/api/image", router);

app.use((req, res) => {
  res.status(404).json({
    error: `Use /api/image route.`,
  });
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
