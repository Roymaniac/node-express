const express = require("express");
const colors = require("colors")
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000;


connectDB()

const app = express();

const noteRoutes = require("./routes/noteRoutes")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes
app.use("/api/notes", noteRoutes)


app.use(errorHandler)

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
