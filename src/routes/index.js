import newsRouter from "./news.route.js";
import coursesRouter from "./courses.route.js";
import siteRouter from "./site.route.js";
export function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
}
