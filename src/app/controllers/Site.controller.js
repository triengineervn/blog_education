import CourseModel from "../model/Course.model.js";

class SiteController {
  async home(req, res) {
    try {
      const courses = await CourseModel.find();
      res.json(courses);
    } catch (err) {
      res.status(400).json({ error: "ERROR!!!" });
    }
  }

  search(req, res) {
    res.render("search");
  }
}

export default new SiteController();
