const express = require('express');
const path = require('path');
const app = express();


// Creating Routes using expressJS
// app.get("", (req, res) => {
//     res.send("<h1>Welcome To Home Page.</h1>");
// })


// Loading HTML Pages using ExpressJS

const dirPath = path.join(__dirname, 'Pages');

// First Method
// app.use(express.static(dirPath))

// Second Method
app.get("", (req, res) => {
    res.sendFile(`${dirPath}/index.html`)
})
// app.get("/about", (_, res) => {
//     res.sendFile(`${dirPath}/about.html`)
// })

// // Creating Error Page
// app.get("*", (_, res) => {
//     res.sendFile(`${dirPath}/error.html`);
// })


// Using Template Engine to Render Dynamic Pages
app.set("view engine", "ejs");
app.get("/profile", (_, res) => {
    const userData = {
        name: 'Shashank Rai',
        location: 'Lucknow'
    }
    res.render('profile', { userData });
})


app.listen(4500);