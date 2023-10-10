const jwt = require("jsonwebtoken");
const { user } = require("../models");
const config = require("../config/config");

const auth = (token,roles) => async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return next(res.status(401).json({
        status: 401,
        message : "Please authenticate!"
      }));
    };

    jwt.verify(token, config.jwt.secret_key, (err, decoded) => {
      console.log(roles,'roles');
      if (err || !roles.find((ele) => ele === decoded.role )) {
        console.log(decoded.role,'decoded.role');
        console.log("=====err=====", err);
        throw Error("You dont have permission");
      }
    });

    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      config.jwt.secret_key
    );

    if (!decoded) {
      return next(new Error("Please enter valid token!"));
    }

    const User = await user.findOne({ _id: decoded.user });
    if (!User) {
      return next(new Error("Please authenticate!"));
    }

    req.user = User;
    next();
  } catch (error) {
    return next(new Error(error));
  }
};

module.exports = auth;
