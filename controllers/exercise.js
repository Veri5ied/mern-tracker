const Exercise = require("../models/exercise");

exports.findExercises = (req, res, next) => {
  Exercise.find()
    .then(() => {
      res.status(200).json({
          message: "Created"
      });
    })
    .catch((error) => {
      res.stauts(400).json({
        error: error,
      });
    });
};

exports.createExercises = (req, res, next) => {
  const exercise = new Exercise({
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
    date: Date.parse(req.body.date),
  });
  exercise
    .save()
    .then(() => {
      res.status(200).json({
          message: "All products"
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
