const express = require("express");
const { connectToDatabase } = require("./db");

const router = express.Router();

// Search/filter gifts by category
router.get("/api/search", async (req, res) => {
    try {
        const db = await connectToDatabase();
        const { category } = req.query;

        const filter = category ? { category: category } : {};

        const results = await db
            .collection("gifts")
            .find(filter)
            .toArray();

        res.json(results);
    } catch (error) {
        res.status(500).json({ error: "Failed to search gifts" });
    }
});

module.exports = router;
const { category } = req.query;
const filter = category ? { category: category } : {};
