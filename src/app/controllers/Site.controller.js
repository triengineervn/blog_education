import CourseModel from "../model/Course.model.js";

class SiteController {
  home(req, res, next) {
    CourseModel.find({})
      .lean()
      .then((courses) => res.render("home", { courses: courses }))
      .catch(next);
  }

  search(req, res) {
    res.render("search");
  }
}

export default new SiteController();
