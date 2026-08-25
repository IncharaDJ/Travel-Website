const express = require("express");
const searchRoutes = require("./searchRoutes");

const app = express();

app.use(express.json());

// Route that serves /api/search
app.use("/api/search", searchRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
