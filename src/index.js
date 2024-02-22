import * as path from "path";
import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import { title } from "process";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

//Static file
app.use(express.static(path.join(__dirname, "public")));
//HTTP logger
app.use(morgan("combined"));
//Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./resources/views"));
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
  });
});
app.get("/news", (req, res) => {
  res.render("news", {
    title: "News",
  });
});
app.listen(port, () => {
  console.log(`excample app listening at http://localhost:${port}`);
});
