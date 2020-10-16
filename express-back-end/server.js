const Express = require("express");
const App = Express();
const Logger = require("morgan");
const BodyParser = require("body-parser");
const cors = require("cors");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
App.use(Logger("dev"));

App.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Sample GET route
App.get("/api/data", (req, res) => {
  res.json({
    message: "Seems to work yay!",
  });
});

App.post("/message", (req, res) => {
  console.log(req.body);
});

const PORT = 8080;
App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});

const nodemailer = require("nodemailer");
