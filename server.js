const http = require ("http");
// require("dotenv").config();

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({message: "Hello Rohit! How are you?"}));
    res.end();
})

server.listen(PORT, () => {
    console.log(`server start on PORT: ${PORT}`);
})