const express = require("express");
const mongoose = require ("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

const routes = require("./routes/routes");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"))

app.use('/', routes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
});