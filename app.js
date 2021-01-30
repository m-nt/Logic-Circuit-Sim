const express = require("express");
const expressLayout = require("express-ejs-layouts");
const session = require("express-session");
const app = express();

const PORT = process.env.PORT || 3000;

//EJS engine setup
app.use(expressLayout);
app.set("view engine", "ejs");
app.use(express.static("./public"));

//Body Parser
app.use(express.urlencoded({ extended: false }));

//Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

//Routes set up
app.use("/", require("./routes/index.js"));

app.listen(PORT, () => {
  console.log(`app listening on port: ${PORT}`);
});
