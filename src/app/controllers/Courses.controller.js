import CourseModel from "../model/Course.model.js";

class CoursesController {
  show(req, res, next) {
    CourseModel.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        res.render("courses/show", { course });
      })
      .catch(next);
  }
}

export default new CoursesController();
