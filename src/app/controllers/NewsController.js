class NewsController {
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.send("NEW DETAIL!!!");
  }
}

export default new NewsController();
