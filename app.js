const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");

const PORT = process.env.PORT || 3500;

const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));