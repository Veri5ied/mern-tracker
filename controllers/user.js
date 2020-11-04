const User = require("../models/user");

exports.Login = (req, res, next) => {
  User.find()
    .then(() => {
      res.status(200).json({
        message: "Users available"
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.Create = (req, res, next) => {
  const user = new User({
    username: req.body.username,
  });
  user
    .save()
    .then(() => {
      res.status(200).json({
        message: "User added successfully!",
      });
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
