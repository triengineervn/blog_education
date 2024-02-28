import * as path from "path";
import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import { route } from "./routes/index.js";
import { connect } from "./config/db/index.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

//Connect to db
connect();

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
app.set("views", path.join(__dirname, "resources", "views"));

route(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
