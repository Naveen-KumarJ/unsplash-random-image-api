const express = require("express");
const { fetchImage } = require("../services/imageFetch");
const router = express.Router();

router.get("/random", async (req, res) => {
  try {
    const data = await fetchImage();
    res.json({data});
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch image.",
      details: error.message,
    });
  }
});

router.use((req, res) => {
  res.status(404).json({
    error: "Only /random route is Available.",
  });
});

module.exports = router;
