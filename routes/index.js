var express = require("express");
var app = express();
var moment = require("moment");
const today = moment();
var router = express.Router();
var port = 3000;
app.set("view engine", "pug");
app.set("views", "./views");

const accesss = (req, res, next) => {
  if (
    today.format("dddd") === "Saturday" ||
    today.format("dddd") === "Sunday" ||
    today.format("HH") > 16 ||
    today.format("HH") < 9
  ) {
    console.log("Access denied please try later");
    res.render("forbidden");
  } else {
    console.log("access granted");
    console.log(today.format("HH"));
    next();
  }
};
app.use(accesss);

/* GET home page. */
app.get("/", (req, res) => {
  res.render("home", { title: "Express" });
});

/* GET services page. */
app.get("/services", (req, res) => {
  res.render("services", { title: "Express" });
});

/* GET contact page. */
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Express" });
});

app.listen(port, () => {
  console.log(
    `Server started on port ${port}, open http://localhost:${port} on your browser`
  );
});

module.exports = router;
