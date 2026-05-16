const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.write("Welcome to Home Page");
    }

    else if (req.url === "/about") {
        res.write("Welcome to About Page");
    }

    else if (req.url === "/contact") {
        res.write("Welcome to Contact Page");
    }

    else {
        res.write("Page Not Found");
    }

    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});