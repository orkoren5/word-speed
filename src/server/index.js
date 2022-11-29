const express = require("express");
const http = require("http");
const path = require("path");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

const urls = ["/"];
urls.forEach((url) => app.use(url, express.static(path.join(__dirname, "../../dist/client"))));

app.use("/", (req, res, next) => {
    console.log("New client connected");
    next();
});

server.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT || 3000}`));
