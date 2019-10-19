var db = require("../models");

module.exports = function(app) {
  /* app.get("/api/comments", function(req, res) {
    db.Comment.findAll({
      include: [db.Post]
    }).then(function(dbComment) {
      res.json(dbComment);
    });
  }); */
  app.get("/api/comments/:id", function(req, res) {
    var query = {};
/*     if (req.query.post_id) {
        query.PostId = req.query.post_id;
    } */
    db.Comment.findAll({
      where: {
        PostId: req.params.id
      },
      include: [db.Post]
    }).then(function(dbComment) {
      res.json(dbComment);
    });
  });



  /* app.get("/api/authors/:id", function(req, res) {
    db.Author.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  }); */

  app.post("/api/comments", function(req, res) {
    db.Comment.create(req.body).then(function(dbComment) {
      res.json(dbComment);
    });
  });

  /* app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  }); */

};
